var productsArr = [
    {name: "apples", price: 100}, 
    {name: "milk", price: 80}, 
    {name:"bananas", price: 1501}
];

function shopingPrice(arr) {
    var totalPrice = 0;
    for (var i = 0; i < arr.length; i++){
        var product = arr[i]
        totalPrice += product.price;
    }
    return totalPrice;
}

function averageShopingPrice(arr) {
    var average = (shopingPrice(arr)/arr.length);
    average = Number(average).toFixed(3);
    return average;
}

function mostExpensive(arr) {
    arr.sort(function (a,b){
        return a.price - b.price;
    })
    var lastEl = arr[(arr.length-1)].name;
    return lastEl;
}



console.log(mostExpensive(productsArr));
