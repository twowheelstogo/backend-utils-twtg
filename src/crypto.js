const crypto = require('crypto');
const {CryptConfig} = require("configs-twtg")
module.exports = {
    encrypt: function(text){
        const cipher = crypto.createCipheriv(CryptConfig.algorithm, CryptConfig.secretKey, CryptConfig.iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
        return JSON.stringify({
            iv: iv.toString('hex'),
            content: encrypted.toString('hex')
        });
    },
    decrypt: function(hash){
        hash = JSON.stringify(hash);
        const decipher = crypto.createDecipheriv(CryptConfig.algorithm, CryptConfig.secretKey, CryptConfig.iv, Buffer.from(hash.iv, 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
        return decrpyted.toString();
    }
}