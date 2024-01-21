# zkGraph ERC721NFT free mint tracker

This zkGraph will monitor events on-chain to track ERC721NFT that are minted for free. The major difference between ERC721NFT and ERC1155NFT is the number of Etherium event's topic. ERC721NFT event has topic4 and ERC1155NFT event only have topic1,2 and 3. 

When I saw the scholarship application form, there was only one hour left before the application deadline. I could only submit this simple repo first. I really hope to participate in your scholarship project.

## Usage CLI

> Note: Only `full` image will be processed by zkOracle node. `local` (generated by commands ending with `--local` option) means the zkGraph is compiled locally and only contains partial computation (so that proving and executing will be faster).

The workflow of local zkGraph development must follow: `Develop` (code in /src) -> `Compile` (get compiled wasm image) -> `Execute` (get expected output) -> `Prove` (generate input and pre-test for actual proving in zkOracle) -> `Verify` (verify proof on-chain).

To upload and publish your zkGraph, you should `Upload` (upload code to IPFS), and then `Publish` (register zkGraph on onchain zkGraph Registry).

## Commonly used commands

- **compile**: `npx zkgraph compile`
- **exec**: `npx zkgraph exec <block id>`
- **prove**: ` npx zkgraph prove <block id> <expected state> -i|-t|-p`  
- ……

Read more: https://github.com/hyperoracle/zkgraph-cli#cli
