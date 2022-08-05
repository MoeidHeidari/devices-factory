import { IBaseDevice } from "../base";

export interface ISwitchableDevice extends IBaseDevice{
    
    state: SwitchableDeviceStates;

}

export enum SwitchableDeviceStates{
    on="on",
    off="off"
}