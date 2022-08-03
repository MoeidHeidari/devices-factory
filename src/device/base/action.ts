export class DeviceActions{
    constructor(public action:IAction){
        if(action.parameters){
            if (action.parameters?.filter(element=>typeof element.value != element.type).length > 0){
                throw new Error("Type mismatched");
            }
        }
    }

}
//=============================================================================================================
export interface IAction{

    name: string,
    body: string,
    parameters:[
        {
            name:string,
            type:string,
            value:any,
        } 
    ]
}