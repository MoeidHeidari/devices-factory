export interface IDeviceFactory<T>{
    createDevice(type: new (config:any) => T,config:any):Promise<T>
}