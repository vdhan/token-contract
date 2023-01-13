# Token Smart Contract
## For deploying local:
- Change env to .env and update correspondent data
- Then
```shell
yarn
yarn compile
yarn start
```

- Open other terminal tab:
```shell
yarn deploy localhost
npx hardhat console --network localhost
```

## For deploying testnet:
```shell
yarn deploy testnet
yarn verify {contract_address}
npx hardhat console --network testnet
```

Address: 0x3393e4E7FaeC215CE0E78E4a53560CE3F941d86f