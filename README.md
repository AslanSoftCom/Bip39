# BIP39

Nodejs Implementation Of Bitcoin Bip39 Code For Generating Deterministic Keys

## CONNECT
```javascript
var bip39 = require("./bip39");
```
## LANGUAGES
- English (`english`)
- Czech (`czech`)
- French (`french`)
- Italian (`italian`)
- Japanese (`japanese`)
- Korean (`korean`)
- Portuguese (`portuguese`)
- Spanish (`spanish`)

### Generate Mnemonic
```javascript
const mnemonic = bip39.generateMnemonic(128, "english");

-> "farm gravity cheap receive shell aware mobile happy way rude remember protect"
```
### Generate Entropy
```javascript
const entropy = bip39.generateEntropy(16);

-> "81a28419325ebdef2fecd046ce93c87a"
```
### Entropy To Mnemonic
```javascript
const mnemonic = bip39.entropyToMnemonic("81a28419325ebdef2fecd046ce93c87a", "english");

-> "like before alien gorilla type wasp sausage old egg innocent velvet visual"
```
### Mnemonic To Entropy
```javascript
const entropy = bip39.mnemonicToEntropy("like before alien gorilla type wasp sausage old egg innocent velvet visual", "english");

-> "81a28419325ebdef2fecd046ce93c87a"
```
### Mnemonic To Seed
```javascript
const seed = bip39.mnemonicToSeed("farm gravity cheap receive shell aware mobile happy way rude remember protect");

-> "2624aff425142c64f6a32fc857d98b578615136d25e4835864b4a3c4446d34ac61e900740d14b451777376a084afccd3be7dd3c44619b7def7c6ba6189f59595"
```
### Mnemonic To Seed Sync
```javascript
const seed = bip39.mnemonicToSeedSync("farm gravity cheap receive shell aware mobile happy way rude remember protect");

-> "<Buffer 26 24 af f4 25 14 2c 64 f6 a3 2f c8 57 d9 8b 57 86 15 13 6d 25 e4 83 58 64 b4 a3 c4 44 6d 34 ac 61 e9 00 74 0d 14 b4 51 77 73 76 a0 84 af cc d3 be 7d ... 14 more bytes>"
```
# [![bitcoin-black](https://i.hizliresim.com/goezfoq.png)]

BTC: 16pY1uNQ1P4CYQiKfQLVanH13Fv2SDEaHh
