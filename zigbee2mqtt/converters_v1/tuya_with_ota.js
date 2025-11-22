let tuyaDefinitions = require("zigbee-herdsman-converters/devices/tuya");
let moesDefinitions = require("zigbee-herdsman-converters/devices/moes");
let avattoDefinitions = require("zigbee-herdsman-converters/devices/avatto");
let girierDefinitions = require("zigbee-herdsman-converters/devices/girier");
let tuya = require("zigbee-herdsman-converters/lib/tuya");

// Support Z2M 2.1.3-1
tuyaDefinitions = tuyaDefinitions.definitions ?? tuyaDefinitions;
moesDefinitions = moesDefinitions.definitions ?? moesDefinitions;
avattoDefinitions = avattoDefinitions.definitions ?? avattoDefinitions;
girierDefinitions = girierDefinitions.definitions ?? girierDefinitions;

const definitions = [];
const multiplePinoutsDescription = "WARNING! There are multiple known pinouts for this device! Before flashing custom firmware, it is recommended you disassemble the device and trace the board pinout. Please check https://github.com/romasku/tuya-zigbee-switch/tree/main/docs/devices/multiple_pinouts.md";

const ota = require("zigbee-herdsman-converters/lib/ota");

const tuyaModels = [
    "TS0001",
    "TS0002",
    "TS0003",
    "TS0004",
];

const tuyaMultiplePinoutsModels = [
];

for (let definition of tuyaDefinitions) {
    if (tuyaModels.includes(definition.model)) {
        if (tuyaMultiplePinoutsModels.includes(definition.model)) {
            definitions.push(
                {
                    ...definition,
                    description: multiplePinoutsDescription,
                    whiteLabel: definition.whiteLabel.map(entry => ({...entry, description: multiplePinoutsDescription,})),
                    ota: ota.zigbeeOTA,
                }
            )
        }
        else {
            definitions.push(
                {
                    ...definition,
                    ota: ota.zigbeeOTA,
                }
            )
        }
    }
}

const moesModels = [
];

const moesMultiplePinoutsModels = [
];

for (let definition of moesDefinitions) {
    if (moesModels.includes(definition.model)) {
        if (moesMultiplePinoutsModels.includes(definition.model)) {
            definitions.push(
                {
                    ...definition,
                    description: multiplePinoutsDescription,
                    whiteLabel: definition.whiteLabel.map(entry => ({...entry, description: multiplePinoutsDescription,})),
                    ota: ota.zigbeeOTA,
                }
            )
        }
        else {
            definitions.push(
                {
                    ...definition,
                    ota: ota.zigbeeOTA,
                }
            )
        }
    }
}

const avattoModels = [
];

const avattoMultiplePinoutsModels = [
];

for (let definition of avattoDefinitions) {
    if (avattoModels.includes(definition.model)) {
        if (avattoMultiplePinoutsModels.includes(definition.model)) {
            definitions.push(
                {
                    ...definition,
                    description: multiplePinoutsDescription,
                    whiteLabel: definition.whiteLabel.map(entry => ({...entry, description: multiplePinoutsDescription,})),
                    ota: ota.zigbeeOTA,
                }
            )
        }
        else {
            definitions.push(
                {
                    ...definition,
                    ota: ota.zigbeeOTA,
                }
            )
        }
    }
}

const girierModels = [
    "JR-ZDS01",
];

const girierMultiplePinoutsModels = [
];

for (let definition of girierDefinitions) {
    if (girierModels.includes(definition.model)) {
        if (girierMultiplePinoutsModels.includes(definition.model)) {
            definitions.push(
                {
                    ...definition,
                    description: multiplePinoutsDescription,
                    whiteLabel: definition.whiteLabel.map(entry => ({...entry, description: multiplePinoutsDescription,})),
                    ota: ota.zigbeeOTA,
                }
            )
        }
        else {
            definitions.push(
                {
                    ...definition,
                    ota: ota.zigbeeOTA,
                }
            )
        }
    }
}

module.exports = definitions;
