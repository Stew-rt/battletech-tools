import { IEquipmentItem } from "./data-interfaces";

/*
* The data here is/may be copyrighted and NOT included in the GPLv3 license.
*/
export const mechISEquipmentMisc: IEquipmentItem[] = [
    {
        uuid: "",
        notes: "Active Beagle Probe and Guardian ECM Suite",
        count: 0,
        name: "EW Equipment",
        alternameName: "",
        tag: "ew-equipment",
        sort: "",
        category: "Miscellaneous Equipment",
        damage: 0,
        damageAero: 0,
        damagePerCluster: 0,
        damageClusters: 0,
        accuracyModifier: 0,
        accuracyModifiier: 0,
        cbills: 500000,
        cbillsOneShot: 0,
        introduced: 3030,
        extinct: 3045,
        reintroduced: 0,
        battleValue: 0,
        battleValueOneShot: 0,
        heat: 0,
        heatAero: 0,
        weight: 7.5,
        range: {
            min: 0,
            short: 0,
            medium: 0,
            long: 0,
            extreme: 0
        },
        space: {
            battlemech: 4,
            protomech: 0,
            combatVehicle: 0,
            supportVehicle: 4,
            aerospaceFighter: 0,
            smallCraft: 0,
            dropShip: 0
        },
        ammoPerTon: 0,
        minAmmoTons: 0,
        explosive: false,
        gauss: false,
        weaponType: [],
        techRating: "",
        unique: false,
        book: "TO",
        page: 0,
        alphaStrike: {
            heat: 0,
            rangeShort: 0,
            rangeMedium: 0,
            rangeLong: 0,
            rangeExtreme: 0,
            tc: false,
            notes: []
        },
        battleValuePerItemDamage: 0,
        requiresHandActuator: false,
        weightDivisor: 0,
        damageDivisor: 0,
        criticalsDivisor: 0,
        variableSize: false,
        isMelee: false,
        costPerItemTon: 0,
        location: "",
        rear: false,
        criticals: 0,
        available: false,
        isAmmo: false,
        isEquipment: true
    }
]