export interface IDeviceFactory<T>{
    createDevice(type: T,config:any):Promise<T>
}