import {v4 as uuidv4} from 'uuid';
import { DeviceAction } from './action';
import { DeviceEvent } from './event';
export interface IBaseDevice{
    connect(): Promise<DeviceConnectionStatus>
    diconnect():Promise<DeviceConnectionStatus>
    getUid():Promise<string>


    connectionState: DeviceConnectionStatus;
    name:string;
    type:DeviceTypes;
    subtype:DeviceSubTypes
    config:JSON;
    error: Error;
    events:DeviceEvents[]
    actions: DeviceActions[]
    createdAt: Date
    updatedAt: Date


    
}

interface DeviceEvents{
    event: DeviceEvent,
    actions?: DeviceEvent[],

}

interface DeviceActions{
    action:DeviceAction;
    events?:DeviceEvent[]
    
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