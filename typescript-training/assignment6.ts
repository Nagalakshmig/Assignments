

function checkPrime(value :
    number): boolean{

 if (value<=1)
 {
    return false
 }

 for(let i =2 ;i<value;i++){

 
        if (value % i==0){
            return false;
                    }
    }
        
            return true;

}

function displayResult (value: number ): void{
    let output = checkPrime(value);
    console.log(`input:n=${value}`);
console.log(output);

    let divisorcount:number[]=[];

if (value==1){
    console.log(" 1 has only one divisor (1 itself), which is not sufficient for it to be considere prime");
    }

    else if(output){
        console.log(`${value} has exactly two divisors: ${value} and 1, making it a prime number.`);
    }
    
    else 
    {
        for (let i =1 ; i<=value;i++){
            if(value %i==0){

           divisorcount.push(i);
            }
        }

  console.log(`${value} has more than two divisors: ${divisorcount.join(",")}, so it is not a prime number.`);
            
        

    }
}
displayResult(25);
displayResult(7);
displayResult(1);
displayResult(70);