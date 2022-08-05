
export interface IAction{

    name: string,
    body: string,
    parameters:[
        {
            name:string,
            type:string,
        } 
    ]
}