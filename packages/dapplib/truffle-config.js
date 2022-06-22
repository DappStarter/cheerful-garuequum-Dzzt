require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain umbrella include private fox tunnel'; 
let testAccounts = [
"0x854ded14e9bf39ed49d1213f69d742251c06f35689efaf17c9ab23dc64a8df96",
"0xaa27d147f5844030c6a9fcd7454dadeed50ce15a5f75f7d125cefd5b50844d14",
"0x495cac9532cd7f35546aa5fff06a3507e2d759660aabc8b6465f551d82de55b0",
"0x6dc0c83fb334cfe9f2c8c7ae1ec1c681c1884b01a14c8dd10ab8295e1b580030",
"0x73dcf76669558830d588aba615a9d947854e5789734ef87716d94f8c14a54880",
"0xe394ed8bec6fa0198295099338daa847e64669c88efff1cbd499ec60b1495f4d",
"0xddf93c6fca2aaa51fb9f7eae3f8f07ae265e09a24b677ddacf29dc1fdaf3e4cd",
"0x883a62fcb73d27fad5f94bbb095cd119a5add75b47227f9486dacab3be18dfaf",
"0x0ebd3a9b99ca0b26d57596e2bb280b4a85c4b9135c8c33d9a0575c40bfbce0a4",
"0x7ba8afd630703d3193536da1ae8fadb8efaf586566489eca9b868405734945da"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


