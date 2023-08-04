let sbiBank = {
bankName: "SBI Bank",
location: "Pune",
accountNumber: 12311111890,
ifsc: 1111,
interestRate: 6,
showDetails: function () {
    console.log(`SBI Bank : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
}
}

let axisBank = {
    bankName: "Axis Bank",
    location: "Mumbai",
    accountNumber: 1222222891,
    ifsc: 2222,
    interestRate: 7,
    showDetails: function(){
        console.log(`Axis Bank : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}

let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Nagpur",
    accountNumber: 1233333892,
    ifsc: 3333,
    interestRate: 8,
    showDetails: function(){
    console.log(`HDFC Bank : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}

let yesBank = {
    bankName: "Yes Bank",
    location: "Amravati",
    accountNumber: 123444444490,
    ifsc: 4444,
    interestRate: 9,
    showDetails: function(){
        console.log(`Yes Bank : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}

console.log(sbiBank.showDetails());
console.log(axisBank.showDetails());
console.log(hdfcBank.showDetails());
console.log(yesBank.showDetails());