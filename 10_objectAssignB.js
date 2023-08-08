let bankSbi = {
    bankName: "SBI Bank",
    accountNumber: 12311111890,
    ifsc: 1111,
    interestRate: 6,
    }

   let bankLocation = {
    street : "Baner Road",
    city : "Pune",
    pincode : 411335
   }

console.log(`=================== Clone two objects by using Object.assign =====================`);
   let cloneBankSbi = Object.assign({}, bankSbi);
console.log(cloneBankSbi);

let cloneBankLocation = Object.assign({}, bankLocation,);
console.log(cloneBankLocation);

console.log(`=================== Clone two objects by using Spread operator =====================`);
 cloneBankSbi = {...bankSbi};
 console.log(cloneBankSbi);

 cloneBankLocation = {...bankLocation};
 console.log(cloneBankLocation);

 console.log(`=================== Merge all objects =====================`);
 let rateOfInterest = {
    homeLoanInterest : "12%",
    personalLoanInterest : "8%",
    dueInterest : "5%"
 }

 let sbiDetails = Object.assign({}, bankSbi, bankLocation,rateOfInterest)
 console.table(sbiDetails);

 console.log(`=================== Traverse of above Merged objects =====================`);
 for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} : ${element}`);
        
    }
 }