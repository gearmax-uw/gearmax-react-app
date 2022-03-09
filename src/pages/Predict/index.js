import React, { useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import { Select } from 'antd';
import {
    Input,
    Row,
    Col,
} from "antd";
import jsonData from "../../json/web_dic.json";

const { Option } = Select;

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        marginBottom: '20px',
        boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        height: '40px',
        padding: '0 6px'
    }),

    input: (provided, state) => ({
        ...provided,
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
    }),
}

const colorOptions = [
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Brown', label: 'Brown' },
    { value: 'Gold', label: 'Gold' },
    { value: 'Gray', label: 'Gray' },
    { value: 'Green', label: 'Green' },
    { value: 'Orange', label: 'Orange' },
    { value: 'Pink', label: 'Pink' },
    { value: 'Purple', label: 'Purple' },
    { value: 'Red', label: 'Red' },
    { value: 'Silver', label: 'Silver' },
    { value: 'Teal', label: 'Teal' },
    { value: 'White', label: 'White' },
    { value: 'Yellow', label: 'Yellow' },
]

const isNewOptions = [
    { value: '1', label: 'Barely New' },
    { value: '0', label: 'Used' },
]

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}

function getMakes() {
    var allMakes = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (!containsObject(x['make_name'], allMakes)) {
            allMakes.push(x['make_name']);
        }
    }
    return allMakes;
}

function getModels(make) {
    var allModels = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make) {
            if (!containsObject(x['model_name'], allModels)) {
                allModels.push(x['model_name']);
            }
        }
    }
    return allModels;
}

function getBodies(make, model) {
    var allBodies = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model) {
            if (!containsObject(x['body_type'], allBodies)) {
                allBodies.push(x['body_type']);
            }
        }
    }
    return allBodies;
}

function getFuels(make, model, body) {
    var allFuels = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body) {
            if (!containsObject(x['fuel_type'], allFuels)) {
                allFuels.push(x['fuel_type']);
            }
        }
    }
    return allFuels;
}

function getTransmissions(make, model, body, fuel) {
    var allTransmissions = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel) {
            if (!containsObject(x['transmission'], allTransmissions)) {
                allTransmissions.push(x['transmission']);
            }
        }
    }
    return allTransmissions;
}

function getPowers(make, model, body, fuel, transmission) {
    var allPowers = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        // console.log('make='+make+'; model='+model+'; body='+body+"; fuel="+fuel+"; transmission="+transmission);
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission) {
            if (!containsObject(x['horsepower'], allPowers)) {
                allPowers.push(x['horsepower']);
            }
        }
    }
    return allPowers;
}

function getEngineDisplacements(make, model, body, fuel, transmission, horsepower) {
    var allDisplacements = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower) {
            if (!containsObject(x['engine_displacement'], allDisplacements)) {
                allDisplacements.push(x['engine_displacement']);
            }
        }
    }
    return allDisplacements;
}

function getEngineTypes(make, model, body, fuel, transmission, horsepower, displacement) {
    var allEngines = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement) {
            if (!containsObject(x['engine_type'], allEngines)) {
                allEngines.push(x['engine_type']);
            }
        }
    }
    return allEngines;
}

function getTorquePowers(make, model, body, fuel, transmission, horsepower, displacement, engineType) {
    var allTorques = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType) {
            if (!containsObject(x['torque_power'], allTorques)) {
                allTorques.push(x['torque_power']);
            }
        }
    }
    return allTorques;
}

function getTorqueRpms(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower) {
    var allTrpms = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower) {
            if (!containsObject(x['torque_rpm'], allTrpms)) {
                allTrpms.push(x['torque_rpm']);
            }
        }
    }
    return allTrpms;
}

function getPowerRpms(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower, torqueRpm) {
    var allPrpms = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm) {
            if (!containsObject(x['power_rpm'], allPrpms)) {
                allPrpms.push(x['power_rpm']);
            }
        }
    }
    return allPrpms;
}

function getWheelSystems(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower,
    torqueRpm, powerRpm) {
    var allWheels = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm
            && x['power_rpm'] == powerRpm) {
            if (!containsObject(x['wheel_system'], allWheels)) {
                allWheels.push(x['wheel_system']);
            }
        }
    }
    return allWheels;
}

function getGears(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower,
    torqueRpm, powerRpm, wheelSystem) {
    // console.log('make=' + make + "; model=" + model + "; body=" + body + "; fuel=" + fuel + "; transmission=" + transmission + "; horsepower=" + horsepower +
    //     "; displacement=" + displacement + "; engineType=" + engineType + "; torquePower=" + torquePower + "; torqueRpm=" + torqueRpm +
    //     "; powerRpm=" + powerRpm + "; wheelSystem=" + wheelSystem);
    var allGears = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm
            && x['power_rpm'] == powerRpm && x['wheel_system'] == wheelSystem) {
            if (!containsObject(x['transmission_display'], allGears)) {
                allGears.push(x['transmission_display']);
            }
        }
    }
    return allGears;
}

function getYears(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower,
    torqueRpm, powerRpm, wheelSystem, transmissionDisplay) {
    // console.log('make=' + make + "; model=" + model + "; body=" + body + "; fuel=" + fuel + "; transmission=" + transmission + "; horsepower=" + horsepower +
    //     "; displacement=" + displacement + "; engineType=" + engineType + "; torquePower=" + torquePower + "; torqueRpm=" + torqueRpm +
    //     "; powerRpm=" + powerRpm + "; wheelSystem=" + wheelSystem + "; transmissionDisplay="+transmissionDisplay);
    var allYears = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm
            && x['power_rpm'] == powerRpm && x['wheel_system'] == wheelSystem && x['transmission_display'] == transmissionDisplay) {
            if (!containsObject(x['year'], allYears)) {
                allYears.push(x['year']);
            }
        }
    }
    return allYears;
}

function getFuelTankVolumes(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower,
    torqueRpm, powerRpm, wheelSystem, transmissionDisplay) {
    var allTanks = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm
            && x['power_rpm'] == powerRpm && x['wheel_system'] == wheelSystem && x['transmission_display'] == transmissionDisplay) {
            if (!containsObject(x['fuel_tank_volume'], allTanks)) {
                allTanks.push(x['fuel_tank_volume']);
            }
        }
    }
    return allTanks;
}

function getCityFuelEconomies(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower,
    torqueRpm, powerRpm, wheelSystem, transmissionDisplay) {
    var allCities = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm
            && x['power_rpm'] == powerRpm && x['wheel_system'] == wheelSystem && x['transmission_display'] == transmissionDisplay) {
            if (!containsObject(x['city_fuel_economy'], allCities)) {
                allCities.push(x['city_fuel_economy']);
            }
        }
    }
    return allCities;
}

function getHighwayFuelEconomies(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower,
    torqueRpm, powerRpm, wheelSystem, transmissionDisplay) {
    var allHighways = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm
            && x['power_rpm'] == powerRpm && x['wheel_system'] == wheelSystem && x['transmission_display'] == transmissionDisplay) {
            if (!containsObject(x['highway_fuel_economy'], allHighways)) {
                allHighways.push(x['highway_fuel_economy']);
            }
        }
    }
    return allHighways;
}

function getSeats(make, model, body, fuel, transmission, horsepower, displacement, engineType, torquePower,
    torqueRpm, powerRpm, wheelSystem, transmissionDisplay) {
    var allSeats = [];
    for (var i = 0; i < jsonData.length; i++) {
        var x = jsonData[i];
        if (x['make_name'] == make && x['model_name'] == model && x['body_type'] == body && x['fuel_type'] == fuel
            && x['transmission'] == transmission && x['horsepower'] == horsepower && x['engine_displacement'] == displacement
            && x['engine_type'] == engineType && x['torque_power'] == torquePower && x['torque_rpm'] == torqueRpm
            && x['power_rpm'] == powerRpm && x['wheel_system'] == wheelSystem && x['transmission_display'] == transmissionDisplay) {
            if (!containsObject(x['maximum_seating'], allSeats)) {
                allSeats.push(x['maximum_seating']);
            }
        }
    }
    return allSeats;
}

const Predict = (props) => {
    const { register, control, setValue, handleSubmit, formState: { errors } } = useForm();

    const [makes, setMakes] = React.useState([]);
    const [makeName, setMakeName] = React.useState('');
    const [models, setModels] = React.useState([]);
    const [modelName, setModelName] = React.useState('');
    const [bodies, setBodies] = React.useState([]);
    const [bodyName, setBodyName] = React.useState('');
    const [fuels, setFuels] = React.useState([]);
    const [fuelName, setFuelName] = React.useState('');
    const [transmissions, setTransmissions] = React.useState([]);
    const [transmissionName, setTransmissionName] = React.useState('');
    const [powers, setPowers] = React.useState([]);
    const [powerValue, setPowerValue] = React.useState('');
    const [displacements, setDisplacements] = React.useState([]);
    const [displacementValue, setDisplacementValue] = React.useState('');
    const [engines, setEngines] = React.useState([]);
    const [engineName, setEngineName] = React.useState('');
    const [torquePowers, setTorquePowers] = React.useState([]);
    const [torquePowerValue, setTorquePowerValue] = React.useState('');
    const [torqueRpms, setTorqueRpms] = React.useState([]);
    const [torqueRpmValue, setTorqueRpmValue] = React.useState('');
    const [powerRpms, setPowerRpms] = React.useState([]);
    const [powerRpmValue, setPowerRpmValue] = React.useState('');
    const [wheelSystems, setWheelSystems] = React.useState([]);
    const [wheelSystemName, setWheelSystemName] = React.useState('');
    const [gears, setGears] = React.useState([]);
    const [gearValue, setGearValue] = React.useState('');
    const [years, setYears] = React.useState([]);
    const [yearValue, setYearValue] = React.useState('');
    const [tanks, setTanks] = React.useState([]);
    const [tankValue, setTankValue] = React.useState('');
    const [cityFuelEconomies, setCityFuelEconomies] = React.useState([]);
    const [cityFuelEconomyName, setCityFuelEconomyName] = React.useState('');
    const [highwayFuelEconomies, setHighwayFuelEconomies] = React.useState([]);
    const [highwayFuelEconomyName, setHighwayFuelEconomyName] = React.useState('');
    const [seats, setSeats] = React.useState([]);
    const [seatValue, setSeatValue] = React.useState('');
    const [colorName, setColorName] = React.useState('');
    const [isNew, setIsNew] = React.useState('');

    const onSubmit = data => {
        console.log(data)
    };

    useEffect(() => {
        const allMakes = getMakes();
        setMakes(allMakes);
        const defaultMakeName = allMakes[0];
        setMakeName(defaultMakeName);

        const allModels = getModels(defaultMakeName);
        setModels(allModels);
        const defaultModelName = allModels[0];
        setModelName(defaultModelName);

        const allBodies = getBodies(defaultMakeName, defaultModelName);
        setBodies(allBodies);
        const defaultBodyName = allBodies[0];
        setBodyName(defaultBodyName);

        const allFuels = getFuels(defaultMakeName, defaultModelName, defaultBodyName);
        setFuels(allFuels);
        const defaultFuelName = allFuels[0];
        setFuelName(defaultFuelName);

        const allTransmissions = getTransmissions(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName);
        setTransmissions(allTransmissions);
        const defaultTransmissionName = allTransmissions[0];
        setTransmissionName(defaultTransmissionName);

        const allPowers = getPowers(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName, defaultTransmissionName);
        setPowers(allPowers);
        const defaultPowerValue = allPowers[0];
        setPowerValue(defaultPowerValue);

        const allDisplacements = getEngineDisplacements(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName,
            defaultTransmissionName, defaultPowerValue);
        setDisplacements(allDisplacements);
        const defaultDisplacementValue = allDisplacements[0];
        setDisplacementValue(defaultDisplacementValue);

        const allEngines = getEngineTypes(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName,
            defaultTransmissionName, defaultPowerValue, defaultDisplacementValue);
        setEngines(allEngines);
        const defaultEngineName = allEngines[0];
        setEngineName(defaultEngineName);

        const allTorquePowers = getTorquePowers(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName,
            defaultTransmissionName, defaultPowerValue, defaultDisplacementValue, defaultEngineName);
        setTorquePowers(allTorquePowers);
        const defaultTorquePowerValue = allTorquePowers[0];
        setTorquePowerValue(defaultTorquePowerValue);

        const allTorqueRpms = getTorqueRpms(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName,
            defaultTransmissionName, defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue);
        setTorqueRpms(allTorqueRpms);
        const defaultTorqueRpmValue = allTorqueRpms[0];
        setTorqueRpmValue(defaultTorqueRpmValue);

        const allPowerRpms = getPowerRpms(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName,
            defaultTransmissionName, defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue,
            defaultTorqueRpmValue);
        setPowerRpms(allPowerRpms);
        const defaultPowerRpmValue = allPowerRpms[0];
        setPowerRpmValue(defaultPowerRpmValue);

        const allWheelSystems = getWheelSystems(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName,
            defaultTransmissionName, defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue,
            defaultTorqueRpmValue, defaultPowerRpmValue);
        setWheelSystems(allWheelSystems);
        const defaultWheelSystemName = allWheelSystems[0];
        setWheelSystemName(defaultWheelSystemName);

        const allGears = getGears(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName, defaultTransmissionName,
            defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue, defaultTorqueRpmValue,
            defaultPowerRpmValue, defaultWheelSystemName);
        setGears(allGears);
        const defaultGearValue = allGears[0];
        setGearValue(defaultGearValue);

        const allYears = getYears(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName, defaultTransmissionName,
            defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue, defaultTorqueRpmValue,
            defaultPowerRpmValue, defaultWheelSystemName, defaultGearValue);
        setYears(allYears);
        const defaultYearVal = allYears[0];
        setYearValue(defaultYearVal);

        const allTanks = getFuelTankVolumes(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName, defaultTransmissionName,
            defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue, defaultTorqueRpmValue,
            defaultPowerRpmValue, defaultWheelSystemName, defaultGearValue);
        setTanks(allTanks);
        const defaultTankVolume = allTanks[0];
        setTankValue(defaultTankVolume);

        const allCityFuelEconomies = getCityFuelEconomies(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName, defaultTransmissionName,
            defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue, defaultTorqueRpmValue,
            defaultPowerRpmValue, defaultWheelSystemName, defaultGearValue);
        setCityFuelEconomies(allCityFuelEconomies);
        const defaultCityFuelEconomy = allCityFuelEconomies[0];
        setCityFuelEconomyName(defaultCityFuelEconomy);

        const allHighwayFuelEconomies = getHighwayFuelEconomies(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName, defaultTransmissionName,
            defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue, defaultTorqueRpmValue,
            defaultPowerRpmValue, defaultWheelSystemName, defaultGearValue);
        setHighwayFuelEconomies(allHighwayFuelEconomies);
        const defaultHighwayFuelEconomy = allHighwayFuelEconomies[0];
        setHighwayFuelEconomyName(defaultHighwayFuelEconomy);

        const allSeats = getSeats(defaultMakeName, defaultModelName, defaultBodyName, defaultFuelName, defaultTransmissionName,
            defaultPowerValue, defaultDisplacementValue, defaultEngineName, defaultTorquePowerValue, defaultTorqueRpmValue,
            defaultPowerRpmValue, defaultWheelSystemName, defaultGearValue);
        setSeats(allSeats);
        const defaultSeatValue = allSeats[0];
        setSeatValue(defaultSeatValue);
    }, []);

    const updateParams = (makeVal = '', modelVal = '', bodyVal = '',
        fuelVal = '', transmissionVal = '', powerVal = '', displacementVal = '',
        engineVal = '', torquePowerVal = '', torqueRpmVal = '', powerRpmVal = '',
        wheelSystemVal = '', gearVal = '', yearVal = '', tankVal = '', cfeVal = '',
        hfeVal = '', seatVal = '') => {
        // console.log('makeVal='+makeVal+'; modelVal='+modelVal);
        var makeName = makeVal;
        if (!makeVal) {
            const allMakes = getMakes();
            setMakes(allMakes);
            makeName = allMakes[0];
        }
        setMakeName(makeName);

        var modelName = modelVal;
        if (!modelVal) {
            const allModels = getModels(makeName);
            setModels(allModels);
            modelName = allModels[0];
        }
        setModelName(modelName);

        var bodyName = bodyVal;
        if (!bodyVal) {
            const allBodies = getBodies(makeName, modelName);
            setBodies(allBodies);
            bodyName = allBodies[0];
        }
        setBodyName(bodyName);

        var fuelName = fuelVal;
        if (!fuelVal) {
            const allFuels = getFuels(makeName, modelName, bodyName);
            setFuels(allFuels);
            fuelName = allFuels[0];
        }
        setFuelName(fuelName);

        var transmissionName = transmissionVal;
        if (!transmissionVal) {
            const allTransmissions = getTransmissions(makeName, modelName, bodyName, fuelName);
            setTransmissions(allTransmissions);
            transmissionName = allTransmissions[0];
        }
        setTransmissionName(transmissionName);

        var powerValue = powerVal;
        if (!powerVal) {
            const allPowers = getPowers(makeName, modelName, bodyName, fuelName, transmissionName);
            setPowers(allPowers);
            powerValue = allPowers[0];
        }
        setPowerValue(powerValue);

        var displacementValue = displacementVal;
        if (!displacementVal) {
            const allDisplacements = getEngineDisplacements(makeName, modelName, bodyName,
                fuelName, transmissionName, powerValue);
            setDisplacements(allDisplacements);
            displacementValue = allDisplacements[0];
        }
        setDisplacementValue(displacementValue);

        var engineName = engineVal;
        if (!engineVal) {
            const allEngines = getEngineTypes(makeName, modelName, bodyName, fuelName,
                transmissionName, powerValue, displacementValue);
            setEngines(allEngines);
            engineName = allEngines[0];
        }
        setEngineName(engineName);

        var torquePowerValue = torquePowerVal;
        if (!torquePowerVal) {
            const allTorquePowers = getTorquePowers(makeName, modelName, bodyName,
                fuelName, transmissionName, powerValue, displacementValue, engineName);
            setTorquePowers(allTorquePowers);
            torquePowerValue = allTorquePowers[0];
        }
        setTorquePowerValue(torquePowerValue);

        var torqueRpmValue = torqueRpmVal;
        if (!torqueRpmVal) {
            const allTorqueRpms = getTorqueRpms(makeName, modelName, bodyName,
                fuelName, transmissionName, powerValue, displacementValue,
                engineName, torquePowerValue);
            setTorqueRpms(allTorqueRpms);
            torqueRpmValue = allTorqueRpms[0];
        }
        setTorqueRpmValue(torqueRpmValue);

        var powerRpmValue = powerRpmVal;
        if (!powerRpmVal) {
            const allPowerRpms = getPowerRpms(makeName, modelName, bodyName,
                fuelName, transmissionName, powerValue, displacementValue,
                engineName, torquePowerValue, torqueRpmValue);
            setPowerRpms(allPowerRpms);
            powerRpmValue = allPowerRpms[0];
        }
        setPowerRpmValue(powerRpmValue);

        var wheelSystemName = wheelSystemVal;
        if (!wheelSystemVal) {
            const allWheelSystems = getWheelSystems(makeName, modelName, bodyName,
                fuelName, transmissionName, powerValue, displacementValue,
                engineName, torquePowerValue, torqueRpmValue, powerRpmValue);
            setWheelSystems(allWheelSystems);
            wheelSystemName = allWheelSystems[0];
        }
        setWheelSystemName(wheelSystemName);

        var gearValue = gearVal;
        if (!gearVal) {
            const allGears = getGears(makeName, modelName, bodyName, fuelName,
                transmissionName, powerValue, displacementValue, engineName,
                torquePowerValue, torqueRpmValue, powerRpmValue, wheelSystemName);
            setGears(allGears);
            gearValue = allGears[0];
        }
        setGearValue(gearValue);

        var yearValue = yearVal;
        if (!yearVal) {
            const allYears = getYears(makeName, modelName, bodyName, fuelName,
                transmissionName, powerValue, displacementValue, engineName,
                torquePowerValue, torqueRpmValue, powerRpmValue, wheelSystemName,
                gearValue);
            // console.log(allYears);
            setYears(allYears);
            yearValue = allYears[0];
        }
        setYearValue(yearValue);

        var tankVolume = tankVal;
        if (!tankVal) {
            const allTanks = getFuelTankVolumes(makeName, modelName, bodyName, fuelName,
                transmissionName, powerValue, displacementValue, engineName,
                torquePowerValue, torqueRpmValue, powerRpmValue, wheelSystemName,
                gearValue);
            setTanks(allTanks);
            tankVolume = allTanks[0];
        }
        setTankValue(tankVolume);

        var cfeName = cfeVal;
        if (!cfeVal) {
            const allCityFuelEconomies = getCityFuelEconomies(makeName, modelName, bodyName, fuelName,
                transmissionName, powerValue, displacementValue, engineName,
                torquePowerValue, torqueRpmValue, powerRpmValue, wheelSystemName,
                gearValue);
            setCityFuelEconomies(allCityFuelEconomies);
            cfeName = allCityFuelEconomies[0];
        }
        setCityFuelEconomyName(cfeName);

        var hfeName = hfeVal;
        if (!hfeVal) {
            const allHighwayFuelEconomies = getHighwayFuelEconomies(makeName, modelName, bodyName, fuelName,
                transmissionName, powerValue, displacementValue, engineName,
                torquePowerValue, torqueRpmValue, powerRpmValue, wheelSystemName,
                gearValue);
            setHighwayFuelEconomies(allHighwayFuelEconomies);
            hfeName = allHighwayFuelEconomies[0];
        }
        setHighwayFuelEconomyName(hfeName);

        var seatValue = seatVal;
        if (!seatVal) {
            const allSeats = getSeats(makeName, modelName, bodyName, fuelName,
                transmissionName, powerValue, displacementValue, engineName,
                torquePowerValue, torqueRpmValue, powerRpmValue, wheelSystemName,
                gearValue);
            setSeats(allSeats);
            seatValue = allSeats[0];
        }
        setSeatValue(seatValue);
    }

    const handleChangeMake = (makeVal) => {
        setMakeName(makeVal);
        updateParams(makeVal);
    };

    const handleChangeModel = (modelVal) => {
        setModelName(modelVal);
        updateParams(makeName, modelVal);
    };

    const handleChangeBody = (bodyVal) => {
        setBodyName(bodyVal);
        updateParams(makeName, modelName, bodyVal);
    };

    const handleChangeFuel = (fuelVal) => {
        setFuelName(fuelVal);
        updateParams(makeName, modelName, bodyName, fuelVal);
    };

    const handleChangeTransmission = (transmissionVal) => {
        setTransmissionName(transmissionVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionVal);
    }

    const handleChangePower = (powerVal) => {
        setPowerValue(powerVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerVal);
    }

    const handleChangeDisplacement = (displacementVal) => {
        setDisplacementValue(displacementVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerValue, displacementVal);
    }

    const handleChangeEngine = (engineVal) => {
        setEngineName(engineVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerValue, displacementValue, engineVal);
    }

    const handleChangeTorquePower = (torquePowerVal) => {
        setTorquePowerValue(torquePowerVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerValue, displacementValue, engineName, torquePowerVal);
    }

    const handleChangeTorqueRpm = (torqueRpmVal) => {
        setTorqueRpmValue(torqueRpmVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerValue, displacementValue, engineName, torquePowerValue,
            torqueRpmVal);
    }

    const handleChangePowerRpm = (powerRpmVal) => {
        setPowerRpmValue(powerRpmVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerValue, displacementValue, engineName, torquePowerValue,
            torqueRpmValue, powerRpmVal);
    }

    const handleChangeWheelSystem = (wheelSystemVal) => {
        setWheelSystemName(wheelSystemVal);
        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerValue, displacementValue, engineName, torquePowerValue,
            torqueRpmValue, powerRpmValue, wheelSystemVal);
    }

    const handleChangeGear = (gearVal) => {
        setGearValue(gearVal);

        updateParams(makeName, modelName, bodyName, fuelName, transmissionName,
            powerValue, displacementValue, engineName, torquePowerValue,
            torqueRpmValue, powerRpmValue, wheelSystemName, gearVal);

        // const allYears = getYears(makeName, modelName, bodyName, fuelName, transmissionName,
        //     powerValue, displacementValue, engineName, torquePowerValue, powerRpmValue,
        //     wheelSystemName, gearVal);
        // setYears(allYears);
        // setYearValue(allYears[0]);

        // const allTanks = getFuelTankVolumes(makeName, modelName, bodyName, fuelName, transmissionName,
        //     powerValue, displacementValue, engineName, torquePowerValue, powerRpmValue,
        //     wheelSystemName, gearValue);
        // setTanks(allTanks);
        // setTankValue(allTanks[0]);

        // const allCityFuelEconomies = getCityFuelEconomies(makeName, modelName, bodyName, fuelName, transmissionName,
        //     powerValue, displacementValue, engineName, torquePowerValue, powerRpmValue,
        //     wheelSystemName, gearValue);
        // setCityFuelEconomies(allCityFuelEconomies);
        // setCityFuelEconomyName(allCityFuelEconomies[0]);
    }

    const handleChangeYear = (yearVal) => {
        // const allTanks = getYears(makeName, modelName, bodyName, fuelName, transmissionName,
        //     powerValue, displacementValue, engineName, torquePowerValue, powerRpmValue,
        //     wheelSystemName, gearValue);
        setYearValue(yearVal);
        // setTanks(allTanks);
        // setTankValue(tankValue);
    }

    const handleChangeTankVolume = (tankVal) => {
        setTankValue(tankVal);
    }

    const handleChangeCityFuelEconomy = (cityFuelEconomyVal) => {
        setCityFuelEconomyName(cityFuelEconomyVal);
    }

    const handleChangeHighwayFuelEconomy = (highwayFuelEconomyVal) => {
        setHighwayFuelEconomyName(highwayFuelEconomyVal);
    }

    const handleChangeSeat = (seatVal) => {
        setSeatValue(seatVal);
    }

    const handleChangeColor = (colorVal) => {
        setColorName(colorVal);
    }

    const handleIsNew = (isNew) => {
        setIsNew(isNew);
    }

    return (
        <div data-testid="predict_text">
            <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
                <div className="label_container">Please enter the following information of your car:</div>

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Make</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Model</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="make"
                            control={control}
                            render={() => (
                                <Select
                                    value={makeName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeMake}>
                                    {makes.map(make => (
                                        <Option key={make}>{make}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>

                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="model"
                            control={control}
                            render={() => (
                                <Select
                                    value={modelName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeModel}>
                                    {models.map(model => (
                                        <Option key={model}>{model}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Body Type</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Fuel Type</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="body"
                            control={control}
                            render={() => (
                                <Select
                                    value={bodyName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeBody}>
                                    {bodies.map(body => (
                                        <Option key={body}>{body}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="fuel"
                            control={control}
                            render={() => (
                                <Select
                                    value={fuelName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeFuel}>
                                    {fuels.map(fuel => (
                                        <Option key={fuel}>{fuel}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Transmission</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Power (hp)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="transmission"
                            control={control}
                            render={() => (
                                <Select
                                    value={transmissionName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeTransmission}>
                                    {transmissions.map(transmission => (
                                        <Option key={transmission}>{transmission}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="power"
                            control={control}
                            render={() => (
                                <Select
                                    value={powerValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangePower}>
                                    {powers.map(power => (
                                        <Option key={power}>{power}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Engine Displacement (cc)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Engine Type</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="displacement"
                            control={control}
                            render={() => (
                                <Select
                                    value={displacementValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeDisplacement}>
                                    {displacements.map(displacement => (
                                        <Option key={displacement}>{displacement}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="engineType"
                            control={control}
                            render={() => (
                                <Select
                                    value={engineName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeEngine}>
                                    {engines.map(engine => (
                                        <Option key={engine}>{engine}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Torque Power (lb-ft)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>RPM at Maximum Torque (rpm)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="torquePower"
                            control={control}
                            render={() => (
                                <Select
                                    value={torquePowerValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeTorquePower}>
                                    {torquePowers.map(torquePower => (
                                        <Option key={torquePower}>{torquePower}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="torqueRpm"
                            control={control}
                            render={() => (
                                <Select
                                    value={torqueRpmValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeTorqueRpm}>
                                    {torqueRpms.map(torqueRpm => (
                                        <Option key={torqueRpm}>{torqueRpm}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>RPM at Maximum Power (rpm)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Wheel System</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="powerRpm"
                            control={control}
                            render={() => (
                                <Select
                                    value={powerRpmValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangePowerRpm}>
                                    {powerRpms.map(powerRpm => (
                                        <Option key={powerRpm}>{powerRpm}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="wheelSystem"
                            control={control}
                            render={() => (
                                <Select
                                    value={wheelSystemName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeWheelSystem}>
                                    {wheelSystems.map(wheelSystem => (
                                        <Option key={wheelSystem}>{wheelSystem}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Gears</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Year</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="gear"
                            control={control}
                            render={() => (
                                <Select
                                    value={gearValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeGear}>
                                    {gears.map(gear => (
                                        <Option key={gear}>{gear}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="year"
                            control={control}
                            render={() => (
                                <Select
                                    value={yearValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeYear}>
                                    {years.map(year => (
                                        <Option key={year}>{year}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Fuel Tank Volume (gal)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>City Fuel Economy (miles/gal)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="tankVolume"
                            control={control}
                            render={() => (
                                <Select
                                    value={tankValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeTankVolume}>
                                    {tanks.map(tank => (
                                        <Option key={tank}>{tank}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="cityFuelEconomy"
                            control={control}
                            render={() => (
                                <Select
                                    value={cityFuelEconomyName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeCityFuelEconomy}>
                                    {cityFuelEconomies.map(cfe => (
                                        <Option key={cfe}>{cfe}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Highway Fuel Economy (miles/gal)</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Number of Seats</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="highwayFuelEconomy"
                            control={control}
                            render={() => (
                                <Select
                                    value={highwayFuelEconomyName}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeHighwayFuelEconomy}>
                                    {highwayFuelEconomies.map(hfe => (
                                        <Option key={hfe}>{hfe}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="seat"
                            control={control}
                            render={() => (
                                <Select
                                    value={seatValue}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeSeat}>
                                    {seats.map(seat => (
                                        <Option key={seat}>{seat}</Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <Row gutter={[24, 6]}>
                    <Col className='gutter-row' span={12}>
                        <label>Exterior Color</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <label>Vehicle Conditions</label>
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="color"
                            control={control}
                            render={() => (
                                <Select
                                    options={colorOptions}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleChangeColor}
                                />
                            )}
                        />
                    </Col>
                    <Col className='gutter-row' span={12}>
                        <Controller
                            name="isNew"
                            control={control}
                            render={() => (
                                <Select
                                    options={isNewOptions}
                                    defaultValue={''}
                                    style={{ width: "100%" }}
                                    onChange={handleIsNew}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <br />

                <label>Mileage</label>
                <Controller
                    placeholder="mileage"
                    control={control}
                    name="mileage"
                    render={({ field }) =>
                        <Input
                            {...register("mileage", {
                                required: false,
                                min: 0,
                                max: 1000000,
                            })}
                            {...field}
                            size='large'
                        />
                    }
                />
                <br />
                <br />
                <br />

                <input type="submit" data-testid="predict_button" id="predict" />
            </form>

            <div className="form_container">
                <div className="label_container">
                    The price predicted for your car:
                </div>
                <div className="prediction_container">CAD 10000</div>
            </div>
        </div>
    );
};

export default (Predict);