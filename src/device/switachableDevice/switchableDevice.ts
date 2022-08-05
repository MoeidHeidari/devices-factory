import {  DeviceActions, DeviceConnectionStatus, DeviceEvents, IAction } from "../base";
import { ISwitchableDevice, SwitchableDeviceStates } from "./IswitchableDevice";


export class SwitchableDevice implements ISwitchableDevice
{
    state: SwitchableDeviceStates;
    connectionState: DeviceConnectionStatus;
    name: string;
    config: JSON;
    error?: Error;
    UUID:string;
    events: DeviceEvents[];
    actions: DeviceActions[];
    createdAt: Date;
    updatedAt: Date;
    constructor(config:any){
        this.state=SwitchableDeviceStates.off;
        this.connectionState=DeviceConnectionStatus.disconnected;
        this.name=config.name;
        this.config=config;
        this.events=[]
        this.actions=[]
        this.UUID="wefoi0ew9wefudknlksdcf"
        this.createdAt=new Date();
        this.updatedAt=new Date()

    }
    RunAction(actionName: string): Function {
        try {
            const action=this.actions.find(action=>action.actionName == actionName)?.action;
            if(action) return action
            else throw new Error("action not found");
        } catch (error) {
            throw new Error("an error happened");
            
        }
        
    }
    addAction(action: IAction): Function {
        
        const args:string[]=[]
        action.parameters.forEach((parameter: { name: string; })=>{
            args.push(parameter.name);
        })
        const deviceAction=new Function(...args,action.body)
        this.actions.push({actionName:action.name,action:deviceAction,events:[]})
        return deviceAction
    }
    sendNotification(data: any): Promise<void> {
        console.log("switchable device notification sent")
        return new Promise((resolve)=>{resolve()})
    }
    connect(): Promise<DeviceConnectionStatus> {
        this.connectionState=DeviceConnectionStatus.connected;
        return new Promise((resolve)=>{
            resolve(this.connectionState)
        })
    }
    diconnect(): Promise<DeviceConnectionStatus> {
        this.connectionState=DeviceConnectionStatus.disconnected;
        return new Promise((resolve)=>{
            resolve(this.connectionState)
        })
    }
    getUid(): Promise<string> {
        return new Promise((resolve)=>{
            resolve(this.UUID)
        })
    }
    
    
}