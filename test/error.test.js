const { expect } = require("chai");
const {errorUtil} = require("../src")

describe("Error helpers", ()=>{
    test("Get error of the system", async () =>{
        const message = "own error";
        const code = 1;
        let hasError = false;
        try {
            errorUtil.getErrorOfTheSystem(code)
        } catch (error) {
            expect(error.message).to.be.eql(message);
            expect(error.code).to.be.eql(code);
            hasError = true;
        }
        expect(hasError).to.be.eql(true);
    })
})