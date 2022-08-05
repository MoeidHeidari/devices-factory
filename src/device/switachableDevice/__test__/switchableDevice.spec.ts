import { IAction } from "../../base";
import { SwitchableDeviceFactory } from "../../factories";
import { SwitchableDevice } from "../switchableDevice";

describe("Test switchable device with defined actions and events",()=>{

    it("test if we can create a switchable device properly",async()=>{

        const result=new SwitchableDeviceFactory();
        const device=await result.createDevice<SwitchableDevice>(SwitchableDevice,"configuration")
        expect (device).toBeDefined()
        expect (device).toBeInstanceOf(SwitchableDevice)
    })

    it("test if we can create a switchable device properly and an action dynamically",async()=>{

        const result=new SwitchableDeviceFactory();
        const device=await result.createDevice<SwitchableDevice>(SwitchableDevice,"configuration")
        const actionBody=`return text`
        const action:IAction={name:'testFunction',body:actionBody,parameters:[{name: "text",type:"string"}]};
        device.addAction(action)
        console.log(device.actions[0].action("tests parameter"))
        expect (device).toBeDefined()
        expect (device).toBeInstanceOf(SwitchableDevice)
        expect (device.actions[0].action("tests parameter")).toEqual("tests parameter")
    })

    it("tests if we can get an action of a device with the action name",async()=>{
        const result=new SwitchableDeviceFactory();
        const device=await result.createDevice<SwitchableDevice>(SwitchableDevice,"configuration")
        const actionBody=`return text`
        const action:IAction={name:'testFunction',body:actionBody,parameters:[{name: "returnText",type:"string"}]};
        device.addAction(action)
        const actionResult=device.RunAction('testFunction');
        expect(actionResult).toBeInstanceOf(Function);
    })


})