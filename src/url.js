module.exports = {
    getUrl:(protocol, domain, port = 80) =>{
        let url = `${protocol}://${domain}`;
        if(port == 80){
            if (protocol != "http")
                throw new Error("Protocol is invalided, it must be http")
            return url;
        }else if (port == 443){
            if (protocol != "https")
                throw new Error("Protocol is invalided, it must be https")
            return url;
        }
        return `${url}:${ApiConfig.port}`;
    }
}