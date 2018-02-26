"use strict";

(function () {

    function Product(name, price, expirationDate) {
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);
    };

    Product.prototype.productID = (function () {
        var min = Math.ceil(10000);
        var max = Math.floor(99999);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })();

    Product.prototype.getInfo = function () {
        var firstLetter = this.name.charAt(0).toUpperCase();
        var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
        var final = firstLetter + lastLetter + this.productID;
        var finalDate = this.expirationDate.getDate() + "-" + (this.expirationDate.getMonth() + 1) + "-" + this.expirationDate.getFullYear();
        return final + ", " + this.name + ", " + this.price;
    };

    function ShoppingBag() {
        this.list = [];
    }

    ShoppingBag.prototype.addProduct = function (product) {
        var currentDate = new Date();

        if (product.expirationDate.getTime() > currentDate.getTime()) {
            this.list.push(product);
        }

    };

    ShoppingBag.prototype.averagePrice = function (price) {
        var totalPrice = 0;

        for (let i = 0; i < this.list.length; i++) {
            totalPrice += this.list[i].price;

        }
        var averagePrice = totalPrice / this.list.length;
        return parseFloat(averagePrice.toFixed(2));
    };
    ShoppingBag.prototype.getMostExpensive = function () {
        var mostExpensive = 0;
        var indexMost;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].price > mostExpensive) {
                mostExpensive = this.list[i].price;
                indexMost = i;
            }

        }
        return this.list[indexMost];
    };
    ShoppingBag.prototype.calculateTotalPrice = function () {
        var totalPrice = 0;

        for (let i = 0; i < this.list.length; i++) {
            totalPrice += this.list[i].price;
        }
        return totalPrice;
    }


    function PaymentCard(accountBalance) {
        this.accountBalance = parseFloat(accountBalance.toFixed(2));
    }


    function checkoutAndBuy(bag1, card) {
        if (card.accountBalance >= bag1.calculateTotalPrice()) {
            return "Purchase successful!";
        } else {
            return "Insufficient price!"
        }
    };

    var product1 = new Product("Banana", 124.45565, "2018-6-12");
    var product2 = new Product("Jabuka", 60, "2018-6-12");
    var product3 = new Product("Mango", 500.42, "2018-6-12");

    var bag1 = new ShoppingBag();

    var card = new PaymentCard(1000)

    bag1.addProduct(product1);
    bag1.addProduct(product2);
    bag1.addProduct(product3);

    console.log();
    console.log(checkoutAndBuy(bag1, card));
})();