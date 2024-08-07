function show(data) {
  let table = document.getElementById("table");
  table.innerHTML = "";

  data.forEach((element) => {
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = `<img width=20px height=20 px src="${element.image}">`;
    cell2.innerHTML = `   ${element.name}`;
    cell3.innerHTML = `      ${element.symbol}`;
    cell4.innerHTML = `      $${element.current_price}`;
    cell5.innerHTML = `       ${Math.abs(
      element.price_change_percentage_24h
    )}%`;
    cell6.innerHTML = `       MKT Cap  ${element.market_cap}`;
  });
}
async function coinTracker() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const data = await res.json();
  console.log(data);
  show(data);
  return data;
}
let data;
coinTracker().then((response) => {
  data = response;
});

//  show(data);
function sortbymkt() {
  show(
    data.sort((a, b) => {
      return a.market_cap - b.market_cap;
    })
  );
}
function sortbyper() {
  data = data.sort((a, b) => {
    return (
      Math.abs(b.price_change_percentage_24h) -
      Math.abs(a.price_change_percentage_24h)
    );
  });

  show(data);
}
function serachCoin() {
  console.log("we are inside searchcoin");
  let text = document.getElementById("search");
  console.log("the text value is ", text.value);
  filtered_data = data.filter((element) => {
    return element.name == text.value || element.symbol == text.value;
  });
  console.log("filter data is ", filtered_data);
  if (filtered_data.length > 0) {
    show(filtered_data);
  } else {
    alert("Please enter valid Name or Symbol");
  }
}
document.getElementById("search-btn").addEventListener("click", serachCoin);

// let maindiv = document.createElement('div');
// maindiv.setAttribute('id', 'maindiv');
// let bodyContent = document.body.innerHTML;
// document.body.innerHTML = ""; // clear the body
// maindiv.innerHTML = bodyContent; // set the content of the div to the original body content
// let theme = document.createElement('button');
// theme.textContent='change theme'; // assuming 'themes' is the text you want to set
// theme.setAttribute('id','theme');
// theme.style.backgroundColor='green'
// document.body.appendChild(theme);
// document.body.appendChild(maindiv); // append the div to the body
// let changetheme=true;

// document.getElementById('theme').addEventListener('click',()=>{
//   changetheme=!changetheme
//   let maindiv = document.getElementById('maindiv');

//   let allChildren = maindiv.querySelectorAll('*');
//   for(let i=0; i < allChildren.length; i++){
//     allChildren[i].style.color=changetheme?"white":'black';

//     allChildren[i].style.backgroundColor=changetheme?"black":'white'
//   }
//   document.body.style.backgroundColor=changetheme?"black":'white'
// })
