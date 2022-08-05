import { ISwitchableDevice } from "../switachableDevice";
import { SwitchableDevice } from "../switachableDevice/switchableDevice";
import { IDeviceFactory } from "./base";

export class SwitchableDeviceFactory implements IDeviceFactory<ISwitchableDevice>{
    createDevice<T>(type: new (config:any) => T,config:any): Promise<T> {
        try {
            const device=new type(config)
            return Promise.resolve(device as T)
        } catch (error) {
            return Promise.reject(error)
        }
    }

}