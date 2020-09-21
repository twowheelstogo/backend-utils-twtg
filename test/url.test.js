const { expect } = require("chai");
const { urlUtil } = require("../src")

describe("Url helpers", ()=>{
    test("Get url wit port 80", async () =>{
        let protocol = "http";
        let domain = "localhost";

        let url = urlUtil.getUrl(protocol, domain);
        expect(url).to.be.eql(`${protocol}://${domain}`);
    });

    test("Get url wit port 443 (https)", async () =>{
        let protocol = "https";
        let domain = "localhost";
        let port = 443;

        let url = urlUtil.getUrl(protocol, domain, port);
        expect(url).to.be.eql(`${protocol}://${domain}`);
    });
})