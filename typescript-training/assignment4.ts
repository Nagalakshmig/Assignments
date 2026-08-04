
 interface Transaction  {
    id:number;
    amount:number;
}

let transaction :Transaction[]  = [
    {id:1,amount:50000},
    {id:2,amount:-2000},
    {id:3,amount:3000},
    {id:4,amount:-15000},
    {id:5,amount:-200},
    {id:6,amount:-300},
    {id:7,amount:4000},
    {id:8,amount:-3000}    
]

let creditTransactions:number=0;
let debitTransactions:number=0;
let amountCredited:number=0;
let amountDebited:number=0;
let balance:number=0;
let suspiciousTransaction:number=0;

let amt :number=0;

for (let i:number=0;i<transaction.length ;i++){

    amt =transaction[i]!.amount;
   if (amt>0){
    amountCredited+=amt;
    creditTransactions++;
   }
   else
   {
    amountDebited+=amt;
    debitTransactions++;
   }

   if(amt>10000 || amt<-10000){
    console.log("Suspicious credit/ debit Transaction with Amount");
    suspiciousTransaction++;
   }
}
balance=amountCredited+amountDebited;

console.log(`total number of credit transactions ${creditTransactions}`);
console.log(`total number of debit transactions ${debitTransactions}`);
console.log(`total amount credited ${amountCredited}`);
console.log(`total amount debited  ${amountDebited}`);
console.log(`total amount remaining in the bank ${balance}`);