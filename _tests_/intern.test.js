const Employee = require('../lib/employee.js');
const Intern = require('../lib/intern.js');
const intern = new Intern("Jenny Lopez","104","jennylopez@fakecompany.com", "MIT");

describe("Intern", () => {
    it("should create an object of the intern class if provided with valid arguments", () => {

        //Test new object uses the correct parameters
        expect(intern.name).toEqual("Jenny Lopez");
        expect(intern.id).toEqual("104");
        expect(intern.email).toEqual("jennylopez@fakecompany.com");
        expect(intern.school).toEqual("MIT");
    });

        //Test the getName method
        it("should return the name of the intern class when the getName method is called", () => {
            expect(intern.getName()).toEqual("Jenny Lopez");
        });
    
        //Test the getId method
        it("should return the id number of the intern class when the getId method is called", () => {
            expect(intern.getId()).toEqual("101");
        });
    
        //Test the getEmail method
        it("should return the email of the intern class when the getEmail method is called", () => {
            expect(intern.getEmail()).toEqual("jennylopez@fakecompany.com");
        });

        it("should return the school of the intern class when the getschool method is called", () => {
            expect(intern.getSchool()).toEqual("MIT");
        });
    
        //Test the getRole method
        it("should return the intern class object when the getRole method is called", () => {
            expect(intern.getRole()).toEqual("Intern");
        });
});