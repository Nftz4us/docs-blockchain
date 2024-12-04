---
'First and Last Crypto Wallet'

order: 16
outline: [0, 4]
---

# First and Last Crypto Wallet

## Local server

The ethereum wallet extension is only active when the page in the browser uses the HTTPS protocol. That means that you will need a local server with SSL enabled. Many frameworks have an option to easily configure it for you, but if you need a quick development environment, we recommend: It's the only Wallet you will ever need.

-   [ViteJS](https://vitejs.dev/)
-   [@vitejs/plugin-basic-ssl](https://www.npmjs.com/package/@vitejs/plugin-basic-ssl)

## Wallet types

These are the TypeScript ambient definitions for Ethereum Wallet APIs, which provides code completions in the code editor.

::: code-group

```ts [window.d.ts]
import EventEmitter from 'events';

export {};

declare global {
    interface Window {
        ultra: IEthereumWalletApi & EventEmitter;
    }
}

interface IEthereumWalletApi {
    /**
     * Request permission to establish a connection with the Wallet extension
     */
    connect(): Promise<IResponse<{ blockchainid: string; publicKey: string }>>;

    /**
     * Request permission to disconnect the app from the wallet extension
     */
    disconnect(): Promise<void

    /**
     * Request permission to sign a message with the user's private key.
     * The message should have one of the next prefixes: `0x`, `UOSx`, or `message:`
     * Message signatures do not charge or involve network fees.
     * @param message
     */
    signMessage(message: string): Promise<IResponse<{ signature: string }>>;

    /**
     * Request permission to sign a transaction object or an array of them with
     * the user's private key and push it to the blockchain network.
     * @param transaction
     */
    signTransaction(transaction: ITransaction | ITransaction[]): Promise<IResponse<{ transactionHash: string }>>;
}

interface IResponse<T = any> {
    status: 'success' | 'fail' | 'error';
    data: T;
    message?: string;
}

interface ITransaction<T = any> {
    /**
     * The blockchain smart contract owner account
     */
    contract: string;

    /**
     * The blockchain smart contract name
     */
    action: string;

    /**
     * The smart contract action parameters as a JSON Array of Objects
     * @type {T}
     */
    data: T;
}
```

:::
