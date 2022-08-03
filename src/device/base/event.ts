export class DeviceEvent{
    constructor(public event:IEvent){
        if(event.parameters){
            if (event.parameters?.filter(element=>typeof element.default_value != element.type).length > 0){
                throw new Error("Type mismatched");
            }
        }
    }

}
//=================================================================================================================
export interface IEvent{
    name:string,
    parameters?:[
        {
            name:string,
            type:string,
            default_value?:any,
        }
    ]
    
}