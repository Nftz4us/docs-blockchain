---
title: '3. Smart Contract Compiling'

outline: [0, 5]
order: -97
---

# Smart Contract Compiling

Compiling smart contracts is very simple with the [Ultra.io Smart Contract Toolkit](https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp).

If docker is installed correctly it will automatically download our development image, and use the image to compile your contracts.

Make sure you're not connected to any vm or docker container with remote explorer otherwise the plugin won't work correctly.

## How to Compile

There are **two ways** to compile your smart contract.

First way is to compile using the VS Code Status Bar. Make sure you have the `.cpp` file open and selected and click `Compile` at the bottom of VSCode.

![](./images/compile-button.png)

Second way to compile is to use the `Command Palette (F1)` and search for `Ultra: Build Contract`.

![](./images/command-palette-build.png)

## Successful Compilation

If the compilation is successful, you won't see any `errors` in the output window for `ultra-cpp`.

![](./images/successful-build.png)

## Bad Compilation

If the compilation is successful unsuccessful, you will see various errors such as the ones below.

![](./images/unsuccessful-build.png)

## Compiled Files

Once the files are compiled you should see an `abi` and a `wasm` file next to your compiled smart contract.

![](./images/compiled-files.png)

## What's next?

The next tutorial will cover deploying smart contracts using the VS Code extension. See [Deploy Smart Contract](./deploy.md) for more information.
