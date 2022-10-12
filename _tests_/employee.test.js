const Employee = require('../lib/employee.js');

describe("Employee", () => {
    it("should create an object of the employee class if provided with valid arguments", () => {
        const employee = new employee("John Smith","101","johnsmith@fakecompany.com");

        //test new object uses the correct parameters
        expect(employee.name).toEqual("John Smith");
        expect(employee.id).toEqual("101");
        expect(employee.email).toEqual("johnsmith@fakecompany.com");
    });

    //Test the getName method()
    it("should return the name of the employee class when the getName method is called", () => {
        expect(employee.getName()).toEqual("John Smith");
    });

    //Test the getId method
    it("should return the id number of the employee class when the getId method is called", () => {
        expect(employee.getId()).toEqual("101");
    });

    //Test the getEmail method
    it("should return the email of the employee class when the getEmail method is called", () => {
        expect(employee.getEmail()).toEqual("johnsmith@fakecompany.com");
    });

    //Test the getRole method
    it("should return the employee class object when the getRole method is called", () => {
        expect(employee.getRole()).toEqual('Employee');
    });
});

