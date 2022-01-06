require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth ridge coil gesture slam force genuine'; 
let testAccounts = [
"0xebf2064d6280931c897d6d4a01bbd400a43873ba09e6908fdfbc7df827db1fe3",
"0xab5a8c5dcc4941b0a5982186ae65370cc0e488836090181ddf08e46d063464ad",
"0xd0f0a21bc7eeabcf01a220e3da83af71b08896b49b2d266ca81e83a8875b6b46",
"0x1b62682875a95946fe5ee6a1408c9ffb69d6b7a493b4d5ca4a79b3932fa38010",
"0xb1aab9d2ef99f6f228e9da5e2cb2476f14936a8ffaed8b507367354559653e21",
"0x60a3194f61f5a0c0b6aa44c7bce8861422ee961f8ef41554f901e7a48021cb02",
"0x2a083d5d0cef578d834f5bb90e1296dd58b6e9016f5ea22332f4bb91c618ebe8",
"0x57abfe8c21b912e17cff927aaeba2e285d862128653097e45e9d46661fb8694b",
"0xfafe72805dec6d6a6b0b49971d35d212cca936b976e2b0fa4cae1442510e5faa",
"0x0f42fd5f3e417e8349b1b74b8e63d46617bd129e2df0f58f7fddea00cb3c1958"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

