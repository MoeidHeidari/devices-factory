import {v4 as uuidv4} from 'uuid';
export interface IBaseDevice{
    connect(): Promise<DeviceConnectionStatus>
    diconnect():Promise<DeviceConnectionStatus>
    getUid():Promise<string>


    connectionState: DeviceConnectionStatus;
    name:string;
    type:DeviceTypes;
    subtype:DeviceSubTypes
    config:JSON
    error: Error
    createdAt: Date
    updatedAt: Date

    
    
}

enum DeviceConnectionStatus{
    connected="connected",
    disconnected="discunnected",
    pending="pending",
    failed="failed"
}

enum DeviceTypes{
    
}

enum DeviceSubTypes{}