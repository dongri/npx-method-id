# npx method-id
Get the method id of a function signature

## usage
```bash
$ npx method-id 'function name(uint256)'
0x00ad800c   name(uint256)
```

## confirm
https://www.4byte.directory/signatures/?bytes4_signature=0x00ad800c

## example
```bash
$ npx method-id 'function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address token, uint liquidity, uint amountTokenMin, uint amountETHMin, address to, uint deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external returns (uint amountETH)'
0x5b0d5984   removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)
```
