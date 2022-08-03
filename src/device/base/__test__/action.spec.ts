import { DeviceActions } from "../action"

describe("Tests the device actions",()=>{
    it("tests if we can make a function in device actions",()=>{
        const actionBody=`return text`
        const action=new DeviceActions({name:'testFunction',body:actionBody,parameters:[{name: "text",type:"string",value:"from stored function"}]});
        
        const result=new Function("text",action.action.body)
        expect(result(action.action.parameters[0].value)).toEqual(action.action.parameters[0].value)
    })
    it("tests if we can make a promise function in device actions",async ()=>{
        const actionBody=`return new Promise((resolve)=>{
            resolve(text)
        })`
        const action=new DeviceActions({name:'testFunction',body:actionBody,parameters:[{name: "text",type:"string",value:"from stored function"}]});
        
        const result=new Function("text",action.action.body)
        expect(await result(action.action.parameters[0].value)).toEqual(action.action.parameters[0].value)
    })
})