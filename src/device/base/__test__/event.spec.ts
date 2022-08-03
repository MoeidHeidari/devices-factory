import { DeviceEvent } from "../event"

describe("tests the event class", () => {

    it("test if event object from event class can be instantiated", () => {
        const event = new DeviceEvent({ name: "eventName" });
        expect(event).toBeDefined()
        expect(event).toBeInstanceOf(DeviceEvent)
        expect(event.event.name).toEqual('eventName');
    })

    it("tests the parameters of an event", () => {
        const event = new DeviceEvent({ name: "eventName", parameters: [{ name: "parameters", type: "number", default_value: 5 }] });
        expect(event).toBeDefined()
        expect(event).toBeInstanceOf(DeviceEvent)
        expect(event.event.name).toEqual('eventName');
        expect(event.event.parameters?.length).toEqual(1)
    })

    it("tests the parameters of an event", () => {
        const event = new DeviceEvent({ name: "eventName", parameters: [{ name: "parameters", type: "string", default_value: "string value" }] });
        expect(event).toBeDefined()
        expect(event).toBeInstanceOf(DeviceEvent)
        expect(event.event.name).toEqual('eventName');
        expect(event.event.parameters?.length).toEqual(1)
    })
    it("tests the parameters of an event", () => {
        try {
            const event = new DeviceEvent({ name: "eventName", parameters: [{ name: "parameters", type: "number", default_value: 98 }] });
        } catch (error) {
            expect(error).toBeDefined()
        }

    })
    it("tests the parameters of an event", () => {
        try {
            const event = new DeviceEvent({ name: "eventName", parameters: [{ name: "parameters", type: "number", default_value: "rtrt" }] });
        } catch (error) {
            expect(error).toBeDefined()
        }

    })
})

