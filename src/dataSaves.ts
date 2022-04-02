import AlphaStrikeForce, { IASForceExport } from "./classes/alpha-strike-force";
import AlphaStrikeGroup, { IASGroupExport } from "./classes/alpha-strike-group";
import { BattleMech, IBattleMechExport } from "./classes/battlemech";
import { IBMForceExport } from "./classes/battlemech-force";
import { BattleMechGroup, IBMGroupExport } from "./classes/battlemech-group";
import { IAppGlobals } from "./ui/app-router";
import { AppSettings, IAppSettingsExport } from "./ui/classes/app_settings";

export enum ESaveDataMode {
    localStorage = 0,
    firebase = 1,
}

export interface IFullBackup {
    battleMechSaves: IBattleMechExport[];
    // appSettings: IAppSettingsExport;
    favoriteASGroups: IASGroupExport[];
    currentASForce: IASForceExport | null;
    currentVBattleMech: string | null;
}

export async function getFullBackup(
    appSettings: AppSettings,
): Promise<string> {
    let rv: IFullBackup  = {
        battleMechSaves: await getBattleMechSaves(appSettings),
        // appSettings: getAppSettings(),
        favoriteASGroups: await getFavoriteASGroups(appSettings),
        currentASForce: await getCurrentASForce(appSettings),
        currentVBattleMech: await getCurrentBattleMech(appSettings),
    }

    return JSON.stringify( rv );
}

export interface IRestoreMessage {
    severity: string;
    message: string;
}

export function checkFullRestoreData(
    io: IFullBackup
): boolean {
    if( typeof(io.battleMechSaves) !== "object" ) {
        return false;
    }
    // if( typeof(io.appSettings) !== "object" ) {
    //     return false;
    // }
    // if( typeof(io.currentASForce) !== "object" ) {
    //     return false;
    // }
    if( typeof(io.favoriteASGroups) !== "object" ) {
        return false;
    }
    // if( typeof(io.currentVBattleMech) !== "object" ) {
    //     return false;
    // }


    return true;
}



export function restoreFullBackup(
    io: IFullBackup,
    appGlobals: IAppGlobals,
    overWriteCurrentBattlemech: boolean = false,
    overWriteCurrentASGroup: boolean = false,
    performActions: boolean = false,
): IRestoreMessage[] {

    let restoreMessages: IRestoreMessage[] = [];

    restoreMessages.push({
        severity: "replace",
        message: "Overwrite your Settings",
    })

    for( let item of io.favoriteASGroups ) {
        let foundItem: IASGroupExport | null = null;
        let itemName = "(nameless)";
        if( item.name ) {
            itemName = item.name;
        }
        for( let existingItem of appGlobals.favoriteASGroups ) {
            let existingItemExport = existingItem.export();
            if( existingItem.uuid === item.uuid ) {
                foundItem = existingItemExport;

                let existingName = "(nameless)";
                if( existingItemExport.name ) {
                    existingName = existingItemExport.name;
                }
                restoreMessages.push({
                    severity: "replace",
                    message: "Replace Alpha Strike Favorite Group '" + existingName + "' with '" + itemName + "'",
                })
                if( performActions ) {

                    existingItem.import( item );
                }
            }
        }

        if( !foundItem ) {
            restoreMessages.push({
                severity: "add",
                message: "Add To your Alpha Strike Favorite groups: '" + itemName + "'",
            })
            if( performActions ) {
                appGlobals.favoriteASGroups.push( new AlphaStrikeGroup(item) );
            }
        }
    }


    for( let item of io.battleMechSaves ) {
        let foundItem: IBattleMechExport | null = null;
        let itemName = "(nameless)";
        if( item.name ) {
            itemName = item.name;
        }
        for( let existingItem of appGlobals.battleMechSaves ) {

            if( existingItem.uuid === item.uuid ) {
                foundItem = existingItem;

                let existingName = "(nameless)";
                if( existingItem.name ) {
                    existingName = existingItem.name;
                }
                restoreMessages.push({
                    severity: "replace",
                    message: "Replace Saved BattleMech '" + existingName + "' with '" + itemName + "'",
                })
                if( performActions ) {
                    existingItem = item;
                }
            }
        }

        if( !foundItem ) {
            restoreMessages.push({
                severity: "add",
                message: "Add to your Saved BattleMech: '" + itemName + "'",
            })
            if( performActions ) {
                appGlobals.battleMechSaves.push( item )
            }
        }
    }

    if( overWriteCurrentBattlemech && performActions ) {
        if( io.currentVBattleMech ) {
            let bmObj = new BattleMech();
            bmObj.importJSON(io.currentVBattleMech);
            appGlobals.currentBattleMech = bmObj;
        }
    }

    if( overWriteCurrentASGroup && performActions ) {
        appGlobals.currentASForce = new AlphaStrikeForce(io.currentASForce);
    }

    if( performActions ) {
        appGlobals.saveCurrentBattleMech( appGlobals.currentBattleMech );
        appGlobals.saveCurrentASForce( appGlobals.currentASForce );
        appGlobals.saveBattleMechSaves( appGlobals.battleMechSaves );
        appGlobals.saveFavoriteASGroups( appGlobals.favoriteASGroups );
        // let appSettingsObj = new AppSettings(io.appSettings);
        // appGlobals.saveAppSettings( appSettingsObj );
    }

    return restoreMessages;
}

function saveData(
    appSettings: AppSettings,
    keyName: string,
    data: string,
): void {
    switch( appSettings.storageLocation ) {
        case ESaveDataMode.localStorage: {
            localStorage.setItem(keyName, data);
            break;
        }
        case ESaveDataMode.firebase: {
            // localStorage.setItem(keyName, data);
            break;
        }
        default: {
            console.error("Unknown Save Storage", appSettings.storageLocation)
            break;
        }
    }

}

async function getData(
    appSettings: AppSettings,
    keyName: string,
): Promise<string | null> {
    switch( appSettings.storageLocation ) {
        case ESaveDataMode.localStorage: {
            return localStorage.getItem(keyName);
        }
        case ESaveDataMode.firebase: {
            return null;
        }
        default: {
            console.error("Unknown Save Storage", appSettings.storageLocation)
            return null;
        }
    }
}

export function saveBattleMechSaves(
    appSettings: AppSettings,
    nv: IBattleMechExport[]
) {
    saveData(appSettings, "battleMechSaves", JSON.stringify(nv) );
}

export async function getBattleMechSaves(
    appSettings: AppSettings,
): Promise<IBattleMechExport[]> {
    let rv: IBattleMechExport[] = [];

    let rawData = await getData(appSettings, "battleMechSaves" );
    try {
        if( rawData )
            rv = JSON.parse( rawData );

        if(!rv ) {
            rv = [];
        }
    }
    catch {
        rv = [];
    }

    return rv;
}


export function saveCurrentBMForce(
    appSettings: AppSettings,
    nv: IBMForceExport,
) {
    saveData(appSettings, "currentBMForce", JSON.stringify(nv) );
}

export function saveCurrentASForce(
    appSettings: AppSettings,
    nv: IASForceExport,
) {
    saveData(appSettings, "currentASForce", JSON.stringify(nv) );
}

export async function getCurrentBMForce(
    appSettings: AppSettings,
): Promise<IBMForceExport | null> {
    let rv: IBMForceExport | null = null;

    let rawData = await getData(appSettings, "currentBMForce" );
    try {
        if( rawData )
            rv = JSON.parse( rawData );

        if(!rv ) {
            return rv;
        }
    }
    catch {
        return rv;
    }

    return rv;
}

export async function getCurrentASForce(
    appSettings: AppSettings,
): Promise<IASForceExport | null> {
    let rv: IASForceExport | null = null;

    let rawData = await getData(appSettings, "currentASForce" );
    try {
        if( rawData )
            rv = JSON.parse( rawData );

        if(!rv ) {
            return rv;
        }
    }
    catch {
        return rv;
    }

    return rv;
}


export function saveCurrentBattleMech(
    appSettings: AppSettings,
    nv: string,
) {
    saveData(appSettings, "currentBattleMech", nv );
}

export async function getCurrentBattleMech(
    appSettings: AppSettings,
): Promise<string | null> {

    return await getData(
        appSettings,
        "currentBattleMech"
    );

}


export function saveFavoriteASGroups(
    appSettings: AppSettings,
    nv: IASGroupExport[]
) {
    saveData(appSettings, "favoriteASGroups", JSON.stringify(nv) );
}

export function saveFavoriteASGroupsObjects(
    appSettings: AppSettings,
    nv: AlphaStrikeGroup[]
) {
    let rv: IASGroupExport[] = [];
    for( let unit of nv ) {
        rv.push( unit.export() );
    }
    saveData(appSettings, "favoriteASGroups", JSON.stringify(rv) );
}

export async function getFavoriteASGroups(
    appSettings: AppSettings,
): Promise<IASGroupExport[]> {
    let rv: IASGroupExport[] = [];

    let rawData = await getData(appSettings, "favoriteASGroups" );
    try {
        if( rawData )
            rv = JSON.parse( rawData );

        if(!rv ) {
            rv = [];
        }
    }
    catch {
        rv = [];
    }

    return rv;
}

export function saveFavoriteBMGroupsObjects(
    appSettings: AppSettings,
    nv: BattleMechGroup[]
) {
    let rv: IBMGroupExport[] = [];
    for( let unit of nv ) {
        rv.push( unit.export() );
    }
    saveData(appSettings, "favoriteBMGroups", JSON.stringify(rv) );
}

export async function getFavoriteBMGroups(
    appSettings: AppSettings,
): Promise<IBMGroupExport[]> {
    let rv: IBMGroupExport[] = [];

    let rawData = await getData(appSettings, "favoriteBMGroups" );
    try {
        if( rawData )
            rv = JSON.parse( rawData );

        if(!rv ) {
            rv = [];
        }
    }
    catch {
        rv = [];
    }

    return rv;
}


export function saveAppSettings(
    nv: IAppSettingsExport,
) {
    localStorage.setItem("appSettings", JSON.stringify(nv) );
}

export function getAppSettings(): IAppSettingsExport {
    let rv: IAppSettingsExport = (new AppSettings(null)).export()
    let rawData = localStorage.getItem("appSettings" );

    try {
        if( rawData )
            rv = JSON.parse( rawData );

        if(rv ) {
            return rv;
        }
    }
    catch {
        return rv;
    }

    return rv;
}