// can get data of all the coin using fetching
// let data=[
//     {
//       "id": "bitcoin",
//       "symbol": "btc",
//       "name": "Bitcoin",
//       "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//       "current_price": 63411,
//       "market_cap": 1249248523051,
//       "market_cap_rank": 1,
//       "fully_diluted_valuation": 1332022629272,
//       "total_volume": 31032073315,
//       "high_24h": 65489,
//       "low_24h": 62861,
//       "price_change_24h": -840.936215133814,
//       "price_change_percentage_24h": -1.30881,
//       "market_cap_change_24h": -12831974554.2688,
//       "market_cap_change_percentage_24h": -1.01673,
//       "circulating_supply": 19695025,
//       "total_supply": 21000000,
//       "max_supply": 21000000,
//       "ath": 73738,
//       "ath_change_percentage": -14.00472,
//       "ath_date": "2024-03-14T07:10:36.635Z",
//       "atl": 67.81,
//       "atl_change_percentage": 93414.34979,
//       "atl_date": "2013-07-06T00:00:00.000Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:57.162Z"
//     },
//     {
//       "id": "ethereum",
//       "symbol": "eth",
//       "name": "Ethereum",
//       "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
//       "current_price": 3065.7,
//       "market_cap": 368355126914,
//       "market_cap_rank": 2,
//       "fully_diluted_valuation": 368355126914,
//       "total_volume": 13933741659,
//       "high_24h": 3221.25,
//       "low_24h": 3046.89,
//       "price_change_24h": -85.5146739917532,
//       "price_change_percentage_24h": -2.71371,
//       "market_cap_change_24h": -9074337726.75861,
//       "market_cap_change_percentage_24h": -2.40425,
//       "circulating_supply": 120101536.931692,
//       "total_supply": 120101536.931692,
//       "max_supply": null,
//       "ath": 4878.26,
//       "ath_change_percentage": -37.20013,
//       "ath_date": "2021-11-10T14:24:19.604Z",
//       "atl": 0.432979,
//       "atl_change_percentage": 707449.82645,
//       "atl_date": "2015-10-20T00:00:00.000Z",
//       "roi": {
//         "times": 63.6467628111119,
//         "currency": "btc",
//         "percentage": 6364.67628111119
//       },
//       "last_updated": "2024-05-07T05:20:24.455Z"
//     },
//     {
//       "id": "tether",
//       "symbol": "usdt",
//       "name": "Tether",
//       "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
//       "current_price": 1,
//       "market_cap": 110962291481,
//       "market_cap_rank": 3,
//       "fully_diluted_valuation": 110962291481,
//       "total_volume": 35398711574,
//       "high_24h": 1.002,
//       "low_24h": 0.997384,
//       "price_change_24h": 0.00004288,
//       "price_change_percentage_24h": 0.00429,
//       "market_cap_change_24h": 82984187,
//       "market_cap_change_percentage_24h": 0.07484,
//       "circulating_supply": 110971000757.376,
//       "total_supply": 110971000757.376,
//       "max_supply": null,
//       "ath": 1.32,
//       "ath_change_percentage": -24.41685,
//       "ath_date": "2018-07-24T00:00:00.000Z",
//       "atl": 0.572521,
//       "atl_change_percentage": 74.67256,
//       "atl_date": "2015-03-02T00:00:00.000Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:31.981Z"
//     },
//     {
//       "id": "binancecoin",
//       "symbol": "bnb",
//       "name": "BNB",
//       "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
//       "current_price": 588.36,
//       "market_cap": 90517860749,
//       "market_cap_rank": 4,
//       "fully_diluted_valuation": 90517860749,
//       "total_volume": 899527180,
//       "high_24h": 602.61,
//       "low_24h": 582.86,
//       "price_change_24h": -4.96976553831291,
//       "price_change_percentage_24h": -0.8376,
//       "market_cap_change_24h": -576352081.634827,
//       "market_cap_change_percentage_24h": -0.6327,
//       "circulating_supply": 153856150,
//       "total_supply": 153856150,
//       "max_supply": 200000000,
//       "ath": 686.31,
//       "ath_change_percentage": -14.2643,
//       "ath_date": "2021-05-10T07:24:17.097Z",
//       "atl": 0.0398177,
//       "atl_change_percentage": 1477659.46622,
//       "atl_date": "2017-10-19T00:00:00.000Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:44.281Z"
//     },
//     {
//       "id": "solana",
//       "symbol": "sol",
//       "name": "Solana",
//       "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
//       "current_price": 154.72,
//       "market_cap": 69377031337,
//       "market_cap_rank": 5,
//       "fully_diluted_valuation": 89106966984,
//       "total_volume": 3386378539,
//       "high_24h": 157.63,
//       "low_24h": 148.04,
//       "price_change_24h": 6.68,
//       "price_change_percentage_24h": 4.5093,
//       "market_cap_change_24h": 3339759712,
//       "market_cap_change_percentage_24h": 5.05739,
//       "circulating_supply": 447984602.503103,
//       "total_supply": 575385663.167758,
//       "max_supply": null,
//       "ath": 259.96,
//       "ath_change_percentage": -40.39435,
//       "ath_date": "2021-11-06T21:54:35.825Z",
//       "atl": 0.500801,
//       "atl_change_percentage": 30840.4989,
//       "atl_date": "2020-05-11T19:35:23.449Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:57.342Z"
//     },
//     {
//       "id": "usd-coin",
//       "symbol": "usdc",
//       "name": "USDC",
//       "image": "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
//       "current_price": 1,
//       "market_cap": 33199121962,
//       "market_cap_rank": 6,
//       "fully_diluted_valuation": 33213157850,
//       "total_volume": 7545002454,
//       "high_24h": 1.002,
//       "low_24h": 0.996618,
//       "price_change_24h": -0.0005924602888423,
//       "price_change_percentage_24h": -0.05919,
//       "market_cap_change_24h": -382500415.645412,
//       "market_cap_change_percentage_24h": -1.13902,
//       "circulating_supply": 33202460339.1393,
//       "total_supply": 33216497638.7793,
//       "max_supply": null,
//       "ath": 1.17,
//       "ath_change_percentage": -14.70856,
//       "ath_date": "2019-05-08T00:40:28.300Z",
//       "atl": 0.877647,
//       "atl_change_percentage": 13.96591,
//       "atl_date": "2023-03-11T08:02:13.981Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:45.248Z"
//     },
//     {
//       "id": "ripple",
//       "symbol": "xrp",
//       "name": "XRP",
//       "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
//       "current_price": 0.537589,
//       "market_cap": 29693920192,
//       "market_cap_rank": 7,
//       "fully_diluted_valuation": 53751720720,
//       "total_volume": 1750596693,
//       "high_24h": 0.567124,
//       "low_24h": 0.526433,
//       "price_change_24h": 0.00349005,
//       "price_change_percentage_24h": 0.65345,
//       "market_cap_change_24h": 235171147,
//       "market_cap_change_percentage_24h": 0.79831,
//       "circulating_supply": 55235913166,
//       "total_supply": 99987652657,
//       "max_supply": 100000000000,
//       "ath": 3.4,
//       "ath_change_percentage": -84.19205,
//       "ath_date": "2018-01-07T00:00:00.000Z",
//       "atl": 0.00268621,
//       "atl_change_percentage": 19899.39807,
//       "atl_date": "2014-05-22T00:00:00.000Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:21.954Z"
//     },
//     {
//       "id": "staked-ether",
//       "symbol": "steth",
//       "name": "Lido Staked Ether",
//       "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
//       "current_price": 3064.64,
//       "market_cap": 28669543385,
//       "market_cap_rank": 8,
//       "fully_diluted_valuation": 28669543385,
//       "total_volume": 100677501,
//       "high_24h": 3214.81,
//       "low_24h": 3045.03,
//       "price_change_24h": -83.6162573509014,
//       "price_change_percentage_24h": -2.65596,
//       "market_cap_change_24h": -710955686.339756,
//       "market_cap_change_percentage_24h": -2.41982,
//       "circulating_supply": 9351368.9433819,
//       "total_supply": 9351368.9433819,
//       "max_supply": null,
//       "ath": 4829.57,
//       "ath_change_percentage": -36.55635,
//       "ath_date": "2021-11-10T14:40:47.256Z",
//       "atl": 482.9,
//       "atl_change_percentage": 534.51639,
//       "atl_date": "2020-12-22T04:08:21.854Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:39.426Z"
//     },
//     {
//       "id": "dogecoin",
//       "symbol": "doge",
//       "name": "Dogecoin",
//       "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
//       "current_price": 0.155992,
//       "market_cap": 22475586505,
//       "market_cap_rank": 9,
//       "fully_diluted_valuation": 22475678473,
//       "total_volume": 1765607934,
//       "high_24h": 0.16867,
//       "low_24h": 0.154485,
//       "price_change_24h": -0.00687879138574255,
//       "price_change_percentage_24h": -4.22346,
//       "market_cap_change_24h": -976403619.865082,
//       "market_cap_change_percentage_24h": -4.16341,
//       "circulating_supply": 144186276383.705,
//       "total_supply": 144188606383.705,
//       "max_supply": null,
//       "ath": 0.731578,
//       "ath_change_percentage": -78.69232,
//       "ath_date": "2021-05-08T05:08:23.458Z",
//       "atl": 0.0000869,
//       "atl_change_percentage": 179273.4998,
//       "atl_date": "2015-05-06T00:00:00.000Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:29.733Z"
//     },
//     {
//       "id": "the-open-network",
//       "symbol": "ton",
//       "name": "Toncoin",
//       "image": "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498",
//       "current_price": 5.83,
//       "market_cap": 20225661771,
//       "market_cap_rank": 10,
//       "fully_diluted_valuation": 29734286604,
//       "total_volume": 294059414,
//       "high_24h": 6.18,
//       "low_24h": 5.77,
//       "price_change_24h": -0.0850725671433228,
//       "price_change_percentage_24h": -1.43902,
//       "market_cap_change_24h": -285529898.784977,
//       "market_cap_change_percentage_24h": -1.39207,
//       "circulating_supply": 3473349688.87202,
//       "total_supply": 5106264323.65831,
//       "max_supply": null,
//       "ath": 7.63,
//       "ath_change_percentage": -23.77066,
//       "ath_date": "2024-04-11T05:55:53.682Z",
//       "atl": 0.519364,
//       "atl_change_percentage": 1020.50844,
//       "atl_date": "2021-09-21T00:33:11.092Z",
//       "roi": null,
//       "last_updated": "2024-05-07T05:20:36.967Z"
//     }
//   ]
function show(data){
    let table=document.getElementById("table");
    table.innerHTML="";
    
    data.forEach(element => {
      let row=  table.insertRow(0);
      let cell1=row.insertCell(0);
      let cell2=row.insertCell(1);
      let cell3=row.insertCell(2);
      let cell4=row.insertCell(3);
      let cell5=row.insertCell(4);
      let cell6=row.insertCell(5);

        cell1.innerHTML=`<img width=20px height=20 px src="${element.image}">`
        cell2.innerHTML=`   ${element.name}`;
        cell3.innerHTML=`      ${element.symbol}`;
        cell4.innerHTML=`      $${element.current_price}`
        cell5.innerHTML=`       ${Math.abs(element.price_change_percentage_24h)}%`
        cell6.innerHTML=`       MKT Cap  ${element.market_cap}`

  })

}
  async function coinTracker(){
   const res=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
   const data=await res.json();
   console.log(data);
    show(data);
  return data;
}
let data;
  coinTracker().then((response)=>{
 data=response;
 })
 
//  show(data);
function sortbymkt(){
   
   show(data.sort((a,b)=>{
    return (a.market_cap-b.market_cap);
   }))

}
function sortbyper(){
   
    data=data.sort((a,b)=>{
       return (Math.abs(b.price_change_percentage_24h)-Math.abs(a.price_change_percentage_24h))
    })
    
    show(data);
    

}
function serachCoin(){
    console.log("we are inside searchcoin");
    let text=document.getElementById("search");
    console.log("the text value is ",text.value);
    filtered_data=data.filter((element)=>{
       return element.name==text.value || element.symbol==text.value;
    })
    console.log("filter data is ",filtered_data);
    if(filtered_data.length>0){
        show(filtered_data);
    }
    else{
        alert("Please enter valid Name or Symbol")
    }

}
document.getElementById("search-btn").addEventListener("click",serachCoin);
    

