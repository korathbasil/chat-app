"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.hashString = void 0;
const node_crypto_1 = require("node:crypto");
const node_util_1 = require("node:util");
const scrypt = (0, node_util_1.promisify)(node_crypto_1.scrypt);
async function hashString(password) {
    const salt = (0, node_crypto_1.randomBytes)(8).toString('hex');
    const hash = (await scrypt(password, salt, 32));
    return salt + '.' + hash.toString('hex');
}
exports.hashString = hashString;
async function compareHash(hashedPassword, password) {
    const [salt, hash] = hashedPassword.split('.');
    const newHash = (await scrypt(password, salt, 32));
    if (hash !== newHash.toString('hex'))
        return false;
    return true;
}
exports.compareHash = compareHash;
//# sourceMappingURL=crypto-hash.js.map