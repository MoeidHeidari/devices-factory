import { TemperatureControlDevice } from "../ClimateControlDevice";
import { ClimateControlDeviceFactory, SensorDeviceFactory, SwitchableDeviceFactory, VisionDeviceFactory } from "../factories";
import { MotionSensoreDevice } from "../sensorDevice";
import { SwitchableDevice } from "../switachableDevice/switchableDevice";
import { VisionDevice } from "../visionDevice";

describe("Testing switchable devices factory",()=>{

    it("should create a new switchable device factory",()=>{
        const result=new SwitchableDeviceFactory();
        expect (result).toBeDefined()
    })
    it("should create a new switchable device factory with createDeviceMethod",async()=>{
        const result=new SwitchableDeviceFactory();
        const device=await result.createDevice(SwitchableDevice,"configuration")
        expect (device).toBeDefined()
        expect (device).toBeInstanceOf(SwitchableDevice)
    })
})
//=============================================================================================================================
describe("Testing vision devices factory",()=>{

    it("should create a new vision device factory",()=>{
        const result=new VisionDeviceFactory();
        expect (result).toBeDefined()
    })
    it("should create a new vision device factory with createDeviceMethod",async()=>{
        const result=new VisionDeviceFactory();
        const device=await result.createDevice(VisionDevice,"configuration")
        expect (device).toBeDefined()
        expect (device).toBeInstanceOf(VisionDevice)
    })
})
//=============================================================================================================================
describe("Testing climate control devices factory",()=>{

    it("should create a new climate control device factory",()=>{
        const result=new ClimateControlDeviceFactory();
        expect (result).toBeDefined()
    })
    it("should create a new climate control device factory with createDeviceMethod",async()=>{
        const result=new ClimateControlDeviceFactory();
        const device=await result.createDevice(TemperatureControlDevice,"configuration")
        expect (device).toBeDefined()
        expect (device).toBeInstanceOf(TemperatureControlDevice)
    })
})
//=============================================================================================================================
describe("Testing sensor devices factory",()=>{

    it("should create a new sensor device factory",()=>{
        const result=new SensorDeviceFactory();
        expect (result).toBeDefined()
    })
    it("should create a new sensor device factory with createDeviceMethod",async()=>{
        const result=new SensorDeviceFactory();
        const device=await result.createDevice(MotionSensoreDevice,"configuration")
        expect (device).toBeDefined()
        expect (device).toBeInstanceOf(MotionSensoreDevice)
    })
    
})