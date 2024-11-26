function getNumberOfBacklogOrders(orders: number[][]): number {
    const sellBacklog: number[][] = [];
    const buyBacklog: number[][] = [];
    orders.forEach((order) => {
        //console.log(`order: ${order}`)
        if(order[2]==0){
            let shouldTryAgain = order[1]>0
            sellBacklog.sort((s1, s2) => s1[0]-s2[0])
            while(shouldTryAgain){
                const minSell = sellBacklog[0]
                //console.log(`minSell: ${minSell}`)
                if(minSell && minSell[0] <= order[0]){
                    sellBacklog.shift()
                    if(order[1]>minSell[1]){
                        order[1]=order[1]-minSell[1]
                        minSell[1]=0
                        shouldTryAgain = order[1]>0
                    } else {
                        minSell[1]=minSell[1]-order[1]
                        order[1]=0
                        sellBacklog.push(minSell)
                        shouldTryAgain = false
                    }
                } else {
                    buyBacklog.push(order)
                    shouldTryAgain = false
                }
                //console.log(`order left: ${order}`)
                //console.log(`minSell left: ${minSell}`)
            }
        } else {
            let shouldTryAgain = order[1]>0
            buyBacklog.sort((s1, s2) => s2[0]-s1[0])
            while(shouldTryAgain){
                const maxBuy = buyBacklog[0]
                //console.log(`maxBuy: ${maxBuy}`)
                if(maxBuy && maxBuy[0] >= order[0]){
                    buyBacklog.shift()
                    if(order[1]>maxBuy[1]){
                        order[1]=order[1]-maxBuy[1]
                        maxBuy[1]=0
                        shouldTryAgain = order[1]>0
                    } else {
                        maxBuy[1]=maxBuy[1]-order[1]
                        order[1]=0
                        buyBacklog.push(maxBuy)
                        shouldTryAgain = false
                    }
                } else {
                    sellBacklog.push(order)
                        shouldTryAgain = false
                }
                //console.log(`order left: ${order}`)
                //console.log(`maxBuy left: ${maxBuy}`)
            }
        }
        //console.log(`buyBacklog:${buyBacklog}`)
        //console.log(`sellBacklog:${sellBacklog}`)
    })
    const buyQtt = buyBacklog.map(subarray => subarray[1]).reduce((acc, curr) => acc+curr, 0)
    const sellQtt =  sellBacklog.map(subarray => subarray[1]).reduce((acc, curr) => acc+curr, 0)
    //console.log(`buyQtt:${buyQtt}`)
    //console.log(`sellQtt:${sellQtt}`)
    return (buyQtt + sellQtt) % (Math.pow(10, 9)+7)
};