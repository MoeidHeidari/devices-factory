import { ISensorDevice } from "../sensorDevice";
import { IDeviceFactory } from "./base";

export class SensorDeviceFactory implements IDeviceFactory<ISensorDevice>{
    createDevice<T>(type: new (config:any) => T,config:any): Promise<ISensorDevice> {
        try {
            const device=new type(config)
            return Promise.resolve(device as ISensorDevice)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    
}