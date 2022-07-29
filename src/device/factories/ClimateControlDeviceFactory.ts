import { TemperatureControlDevice, IClimateControlDevice } from "../ClimateControlDevice";
import { IDeviceFactory } from "./base";

export class ClimateControlDeviceFactory implements IDeviceFactory<IClimateControlDevice>{
    createDevice<T>(type: new (config:any) => T,config:any): Promise<IClimateControlDevice> {
        try {
            const device=new type(config)
            return Promise.resolve(device as IClimateControlDevice)
        } catch (error) {
            return Promise.reject(error)
        }
    }

}