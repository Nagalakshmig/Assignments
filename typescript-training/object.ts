interface empDetails {
empId: number ,
empName: string,
havingVisa: boolean,
address: {
city: string,
zipCode: number,
state: string,
country: string
}
}
let empinfo:empDetails = {
empId: 101,
empName: "John Doe",
havingVisa: true,
address: {
city: "New York",
zipCode: 10001,
state: "NY",
country: "USA"
}
};
//console.log("Employee Details: ", empinfo.empName);
//console.log("Employee Address: ", empinfo.address.city);

for ( let key in empinfo)
{
//console.log(key);
console.log(empinfo[key as keyof empDetails]);
}