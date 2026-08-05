interface Employees 
{
name:string;
baseSalary:number;
experience:number;
rating:number
}

let employees :Employees[] = [
    {name:"Alice Johnson",baseSalary:75000,experience:5.1,rating:4.2},
    {name:"Bob Smith",baseSalary:68000,experience:3.2,rating:3.8},
    {name:"Carol Davis",baseSalary:82000,experience:7.1,rating:4.5},
    {name:"David Brown",baseSalary:90000,experience:10.2,rating:2.5},
    {name:"Eva green",baseSalary:60000,experience:2.4,rating:3.5}
]

let variablePay:number=0;
let bonus:number=0;
let rewards:number=0;
let hikePercentage=0;
let hike=0;
for (let emp of employees){

    if(emp.rating>=4){
        variablePay=(emp.baseSalary*15)/100;
        bonus=1500;
        rewards=0
    }
    else if ((emp.rating>=3) && (emp.rating<4)){
        variablePay=(emp.baseSalary*10)/100;
        bonus=1200;
        rewards=0;
    }
    else if (emp.rating<3){
        variablePay=(emp.baseSalary*3)/100;
        bonus=300;
        rewards=0
    }
 
    if (emp.experience>=5)
    {
        rewards=5000;
    }

    hike=variablePay+bonus+rewards;
    hikePercentage= (hike/emp.baseSalary)*100;

    let empData  = new Map<string,number>();
    empData.set(emp.name,hikePercentage);

    console.log(empData);


}