function checkLoanEligibility() 

{  
let customerName:string = "John Doe";  
let creditScore :number = 720;  
let income :number = 55000.0;  
let isEmployed :boolean = true;  
let debtToIncomeRatio :number = 25.0;

if (creditScore > 750) {
    console.log("the loan is automatically approved for " +customerName+ " as creditscore is eligible for loan" );
    }
    else if (creditScore < 750 && creditScore > 650) {
        if (income>=50000) {
            if (isEmployed) {
                if (debtToIncomeRatio <40) {
                    console.log("the loan is approved as debtToIncomeRatio is less than 40 percent ");
                }
                else {
                    console.log(" loan is denied as debtToIncomeRatio is greater than 40 percent and met all other crtiteria's"); //for debt ratio
                }
                }
                else{
                    console.log(" loan is denied as employee is unemployed"); // for employment
                }
            }
        else {
            console.log("loan is denied as income is not greater than 50000"); // for income
        }
    }
    else{
        console.log("loan is denied as credit score is not within the range"); //for credit score
    }
}

checkLoanEligibility ();