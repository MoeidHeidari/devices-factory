import { ISwitchableDevice } from "../switachableDevice";
import { SwitchableDevice } from "../switachableDevice/switchableDevice";
import { IDeviceFactory } from "./base";

export class SwitchableDeviceFactory implements IDeviceFactory<ISwitchableDevice>{
    createDevice<T>(type: new (config:any) => T,config:any): Promise<ISwitchableDevice> {
        try {
            const device=new type(config)
            return Promise.resolve(device as ISwitchableDevice)
        } catch (error) {
            return Promise.reject(error)
        }
    }

}