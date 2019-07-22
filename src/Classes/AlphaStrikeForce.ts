import AlphaStrikeGroup, { IASGroupExport } from './AlphaStrikeGroup';
import { IASMULUnit, AlphaStrikeUnit } from './AlphaStrikeUnit';

export interface IASForceExport {
    groups: IASGroupExport[];
}

export default class AlphaStrikeForce {

    groups: AlphaStrikeGroup[] = [];

	customName : string= "";

	activeMembers: number = 0;
	forcePoints: number = 0;
    membersLabel: string = "";

    constructor(importObj: IASForceExport | null = null ) {
        if( importObj ) {
            this.import(importObj);
        }

        if( this.groups.length === 0 ) {
            this.groups.push( new AlphaStrikeGroup() )
        }
    }

    public renameGroup( newName: string, groupIndex: number ) {
        if( this.groups.length > groupIndex && this.groups[groupIndex]) {
            this.groups[groupIndex].customName = newName;
        }
    }

	public getActiveMembers() {
		this.activeMembers = 0;
        this.forcePoints = 0;
        for( var memCountGroup = 0; memCountGroup < this.groups.length; memCountGroup++ ) {
            for( var memCount = 0; memCount < this.groups.length; memCount++ ) {
                this.groups[memCountGroup].members[memCount].calcCurrentVals();
                if( this.groups[memCountGroup].members[memCount].active )
                    this.activeMembers++;
                this.forcePoints += this.groups[memCountGroup].members[memCount].currentPoints / 1;
            }
        }

		this.membersLabel = " (" + this.activeMembers + "/" + this.groups.length + ")";
    }

    public addToGroup( mulUnit: IASMULUnit,  groupIndex: number = 0 ) {
        if( this.groups.length < groupIndex)  {
            groupIndex = this.groups.length
        }
        if( this.groups.length > groupIndex && this.groups[groupIndex]) {
            this.groups[groupIndex].members.push(
                new AlphaStrikeUnit( mulUnit )
            );
        }
    }

    removeUnitFromGroup(asGroupIndex: number, asUnitIndex: number) {
        if( this.groups.length > asGroupIndex && this.groups[asGroupIndex]) {
            if( this.groups[asGroupIndex].members.length > asUnitIndex && this.groups[asGroupIndex].members[asUnitIndex]) {
                this.groups[asGroupIndex].members.splice( asUnitIndex, 1);
            }
        }
    }

    public export(): IASForceExport {
        let returnValue: IASForceExport = {
            groups: []
        }

        for( let group of this.groups) {
            returnValue.groups.push( group.export() );
        }

        console.log("ASF returnValue", returnValue)
        return returnValue;
    }

    public import(importObj: IASForceExport) {
        for( let group of importObj.groups ) {
            this.groups.push( new AlphaStrikeGroup( group) );
        }

    }
}