module.exports = {
    getErrorOfTheSystem(code){
        let error = new Error("own error");
        error.code = code;
        throw error;
    }
}