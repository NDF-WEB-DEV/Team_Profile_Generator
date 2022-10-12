const Employee = require('../lib/employee.js');
const Engineer = require("../lib/engineer.js");
const engineer = new Engineer("Ari Green","102","arigreen@fakecompany.com", "NDF-WEB-DEV");

describe("Engineer", () => {
    it("should create an object of the engineer class if provided with valid arguments", () => {
        
        //test new object uses the correct parameters
        expect(engineer.name).toEqual("Ari Green");
        expect(engineer.id).toEqual("102");
        expect(engineer.email).toEqual("arigreen@fakecompany.com");
        expect(engineer.gitHub).toEqual("NDF-WEB-DEV");
    });

    //Test the getName method()
    it("should return the name of the engineer class when the getName method is called", () => {
        expect(engineer.getName()).toEqual("Ari Green");
    });

    //Test the getId method
    it("should return the id number of the engineer class when the getId method is called", () => {
        expect(engineer.getId()).toEqual("102");
    });

    //Test the getEmail method
    it("should return the email of the engineer class when the getEmail method is called", () => {
        expect(engineer.getEmail()).toEqual("arigreen@fakecompany.com");
    })
    
    //Test the getGithub method
    it("should return the GitHub username of the engineer class when the getGithub method is called", () => {
        expect(engineer.getGithub()).toEqual("NDF-WEB-DEV");
    })

    //Test the getRole method
    it("should return the engineer class object when the getRole method is called", () => {
        expect(engineer.getRole()).toEqual("Engineer");
    });
});