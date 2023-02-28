var crypto = require('crypto');
var WORDLIST = require("./wordlists");

exports.generateMnemonic = generateMnemonic;
function generateMnemonic(strength = 128, language = "english") {
    strength = strength || 128;
    if (strength % 32 !== 0) {
        return ("Invalid entropy");
    } else {
        var entropy = crypto.randomBytes(strength / 8);
        return entropyToMnemonic(entropy.toString('hex'), language);
    }
}

exports.generateEntropy = generateEntropy;
function generateEntropy(strength = 16) {
    strength = strength || 16;
    if (strength % 16 !== 0) {
        return ("Invalid entropy");
    } else {
        var entropy = crypto.randomBytes(strength);
        return entropy.toString('hex');
    }
}

exports.mnemonicToSeed = mnemonicToSeed;
function mnemonicToSeed(mnemonic, password) {
    if (!mnemonic) {
        return ("Invalid mnemonic");
    } else {
        const mnemonicBuffer = Buffer.from((mnemonic || '').normalize('NFKD'), 'utf8');
        const saltBuffer = Uint8Array.from(Buffer.from(salt(normalize(password)), 'utf8'));
        return crypto.pbkdf2Sync(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512').toString('hex');
    }
}

exports.mnemonicToSeedSync = mnemonicToSeedSync;
function mnemonicToSeedSync(mnemonic, password) {
    if (!mnemonic) {
        return ("Invalid mnemonic");
    } else {
        const mnemonicBuffer = Buffer.from((mnemonic || '').normalize('NFKD'), 'utf8');
        const saltBuffer = Uint8Array.from(Buffer.from(salt(normalize(password)), 'utf8'));
        return crypto.pbkdf2Sync(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512');
    }
}

exports.entropyToMnemonic = entropyToMnemonic;
function entropyToMnemonic(entropy, language = "english") {
    if (!entropy) {
        return ("Invalid entropy");
    } else {
        entropy = Buffer.from(entropy, 'hex');
        var entropyBits = bytesToBinary([].slice.call(entropy));
        var checksum = checksumBits(entropy);

        var bits = entropyBits + checksum
        var chunks = bits.match(/(.{1,11})/g);

        if (!chunks) {
            return ("Invalid entropy");
        } else {
            var words = chunks.map(function(binary) {
                var index = parseInt(binary, 2);
                const result = WORDLIST.wordlists[language];
                return result[index];
            })

            return words.join(" ");
        }
    }
}

exports.mnemonicToEntropy = mnemonicToEntropy;
function mnemonicToEntropy(mnemonic, language = "english") {
    const result = WORDLIST.wordlists[language];
    const words = normalize(mnemonic).split(' ');

        if (words.length % 3 !== 0) {
            return ("Invalid mnemonic");
        }

        const bits = words.map((word) => {

            const index = result.indexOf(word);
            if (index === -1) {
                return ("Invalid mnemonic");
            }
    
            return lpad(index.toString(2), '0', 11);
    
        }).join('');
    
        const dividerIndex = Math.floor(bits.length / 33) * 32;
        const entropyBits = bits.slice(0, dividerIndex);
        const entropyBytes = entropyBits.match(/(.{1,8})/g).map(binaryToByte);
        const entropy = Buffer.from(entropyBytes);
        return entropy.toString('hex');
 
}

function bytesToBinary(bytes) {
    return bytes.map(function(x) { return lpad(x.toString(2), '0', 8) }).join('');
}

function checksumBits(entropyBuffer) {
    var hash = crypto.createHash('sha256').update(entropyBuffer).digest()
    var ENT = entropyBuffer.length * 8
    var CS = ENT / 32
    return bytesToBinary([].slice.call(hash)).slice(0, CS)
}

function lpad(str, padString, length) {
    while (str.length < length) str = padString + str;
    return str;
}

function normalize(str) {
    return (str || '').normalize('NFKD');
}

function salt(password) {
    return 'mnemonic' + (password || '');
}

function binaryToByte(bin) {
    return parseInt(bin, 2);
}

