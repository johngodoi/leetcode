function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let buyPrice = prices[0]
    for(let i=1; i<prices.length; i++){
        if(buyPrice > prices[i]){
            buyPrice = prices[i]
        }
        const profit = prices[i] - buyPrice
        maxProfit = maxProfit > profit? maxProfit : profit
    }
    
    return maxProfit;
};