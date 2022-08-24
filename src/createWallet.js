var CoinKey = require('coinkey'); 

var wallet = new CoinKey.createRandom();

console.log("Chave Privada: ", wallet.privateKey.toString('hex'));
console.log("Endereço:", wallet.publicAddress);
