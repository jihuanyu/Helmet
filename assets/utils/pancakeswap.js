import { Token, Route, Pair, TokenAmount } from '@pancakeswap-libs/sdk-v2';
import { PairContract } from '~/interface/index.js';
import { getAddress, getWei_2 } from './address-pool';
export const pancakeswap = async (token1, token2) => {
    const address1 = getAddress(token1, window.chainID);
    const address2 = getAddress(token2, window.chainID);
    const TOKEN1 = new Token(
        window.chainID,
        address1,
        getWei_2(token1),
        token1,
        token1
    );
    const TOKEN2 = new Token(
        window.chainID,
        address2,
        getWei_2(token2),
        token2,
        token2
    );
    try {
        // 获取交易对地址
        const address = Pair.getAddress(TOKEN1, TOKEN2);
        // 获取合约方法
        const Contracts = await PairContract(address);
        // 获取getReserves
        let result = await Contracts.methods
            .getReserves()
            .call()
            .then((res) => {
                return res;
            });
        const balances = TOKEN1.sortsBefore(TOKEN2)
            ? [result.reserve0, result.reserve1]
            : [result.reserve1, result.reserve0];
        let pair = new Pair(
            new TokenAmount(TOKEN1, balances[0]),
            new TokenAmount(TOKEN2, balances[1])
        );
        const route = new Route([pair], TOKEN1);
        let Price = route.midPrice.toSignificant(6);
        return Price;
    } catch (error) {
        console.log(error);
        return 0;
    }
};
