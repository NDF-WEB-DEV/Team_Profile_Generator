const Employee = require('../lib/employee.js');
const Manager = require("../lib/manager.js");
const manager = new Manager("Jerry Nice", "103","jerrynice@fakecompany.com","1017");

describe("Manager", () => {
    it("should create an object of the class manager if provided with valid arguments", () => {

        //test new object uses the correct parameters
        expect(manager.name).toEqual("Jerry Nice");
        expect(manager.id).toEqual("103");
        expect(manager.email).toEqual("jerrynice@fakecompany.com");
        expect(manager.officeNumber).toEqual("1017");
    });

    //Test the getName method()
    it("should return the name of the manager class when the getName method is called", () => {
        expect(manager.getName()).toEqual("Jerry Nice");
    });

    //Test the getId method
    it("should return the id number of the manager class when the getId method is called", () => {
        expect(manager.getId()).toEqual("103");
    });

    //Test the getEmail method
    it("should return the email of the manager class when the getEmail method is called", () => {
        expect(manager.getEmail()).toEqual("jerrynice@fakecompany.com");
    });

    //Test the getOfficeNumber
    it("should return the office number of the manager class when the getOfficeNumber method is called", () => {
        expect(manager.getOfficeNumber()).toEqual("1017");
    });

    //Test the getRole method
    it("should return the manager class object when the getRole method is called", () => {
        expect(manager.getRole()).toEqual('Manager');
    });
})