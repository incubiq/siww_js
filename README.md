# siww

Sign-In With Wallet

This JS package implements a generic connection to Crypto wallets, and a specific first implementation for Cardano wallets. 
More wallet support may come later. This is now Prod ready for Cardano, including connecting to wallet, requesting wallet connect authorization, and signing message for authorization. 

This library was first made, and is maintained, for SignWithWallet.com 

## Install

This module is installed directly using `npm`:

```sh
$ npm install @incubiq/siww
```

## API

<!-- eslint-disable no-unused-vars -->

```js
const SIWW = require('@incubiq/siww');      // the generic access to wallet connectors 
let siwc=SIWW.getConnector("cardano");      // the Cardano wallet connector

```

This library allows you to Authenticate via a Cardano compatible wallet

### siwc.async_initialize({onNotifyAccessibleWallets: function(_aWallet){}, onNotifyConnectedWallet: function(_obj){}, onNotifySignedMessage: function(_wallet){}});  

Call this function to initialize the Sign-in With Cardano library. The function takes an optional object as parameter, to allow for callback functions to be called when specific events trigger.

 - 'onNotifyAccessibleWallets(_aWallet)' is called at initialization of the library and detection of all available Cardano wallets (browser plugins).
 - 'onNotifyConnectedWallet(_obj)' is called when a wallet gets connected to our host, either because it was connected during an ealier session, or because the user just connected it. It contains entries to determine which case we are in ({didUserAccept: true/false, didUserClick: true/false, didShowWallet: true/false, wallet: ...})
 - 'onNotifyAccessibleWallets(_wallet)' is called at initialization for each accessible Cardano wallet (browser plugins)


### siwc.async_connectWallet(_id)

Call this function to connect to a wallet whose ID is _id. For example, to connect to a nami Cardano wallet, call 'siwc.async_connectWallet("nami")'
If siwc was first initialized with a callback (onNotifyConnectedWallet), it will be called upon sucessful (or failed) connection.


### siwc.async_createMessage(_id,  {message: "sample message...", version: "1.0", valid_for: 300})

Call this function to create a message that will be ready for processing by async_signMessage(...)


### siwc.async_signMessage(_id, objSiwcMsg, "authentication");

Call this function to request the wallet to present the end-user with a Sign Message dialog, containing the requested message and some additional info for certified validity of caller. This function will return the message signature as well as a few additional params for server verification of the signature.


## License

[MIT](LICENSE)

[node-url]: https://nodejs.org/en/download/
