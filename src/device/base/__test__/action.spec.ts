

describe("Tests the device actions",()=>{
    it("tests if we can make a function in device actions",()=>{
        const actionBody=`return text`
        const action={name:'testFunction',body:actionBody,parameters:[{name: "text",type:"string"}]}
        
        const result=new Function("text",action.body)
        expect(result("from stored function")).toEqual("from stored function")
    })
    it("tests if we can make a promise function in device actions",async ()=>{
        const actionBody=`return new Promise((resolve)=>{
            resolve(text)
        })`
        const action={name:'testFunction',body:actionBody,parameters:[{name: "text",type:"string"}]};
        
        const result=new Function("text",action.body)
        expect(await result("from stored function")).toEqual("from stored function")
    })
})