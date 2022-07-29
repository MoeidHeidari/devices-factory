import { IVisionDevice, VisionDevice } from "../visionDevice";
import { IDeviceFactory } from "./base";

export class VisionDeviceFactory implements IDeviceFactory<IVisionDevice>{
    createDevice<T>(type: new (config:any) => T,config:any): Promise<IVisionDevice> {
        try {
            const device=new type(config)
            return Promise.resolve(device as IVisionDevice)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    
}