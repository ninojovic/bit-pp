var randomEmail = "ninojovic@gmail.com";

function hideEmail(email) {
    var newArr = email.split("@");
    var username = newArr[0].split("")
    username.splice(newArr[0].length/2);
    username = username.join("") + "...@";
    return username.concat(newArr[1]);

}

console.log(hideEmail(randomEmail));
