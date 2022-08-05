import {v4 as uuidv4} from 'uuid';
import { IAction } from './action';
import { DeviceEvent } from './event';
export interface IBaseDevice{
    connect(): Promise<DeviceConnectionStatus>
    diconnect():Promise<DeviceConnectionStatus>
    getUid():Promise<string>
    sendNotification(data:any):Promise<void>;
    addAction(action:IAction):Function
    RunAction(actionname:string):Function


    connectionState: DeviceConnectionStatus;
    name:string;

    config:JSON;
    error?: Error;
    UUID:string;
    events:DeviceEvents[]
    actions: DeviceActions[]
    createdAt: Date
    updatedAt: Date


    
}

export interface DeviceEvents{
    event: Event,
    actions?: DeviceEvent[],

}

export interface DeviceActions{
    actionName:string
    action:Function;
    events?:DeviceEvent[]
    
}

export enum DeviceConnectionStatus{
    connected="connected",
    disconnected="discunnected",
    pending="pending",
    failed="failed"
}

export enum DeviceTypes{
    
}

export enum DeviceSubTypes{}