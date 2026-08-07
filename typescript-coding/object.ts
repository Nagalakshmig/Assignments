

//let empData:object = {name:"tom",job:"analyst",exp:5};

let empData2 = {name:"tom",job:"analyst",exp:5,
    getDetails:function():string{
        return `${this.name} is working as ${this.job} with ${this.exp} of experience`
    }
};// by defsult its an object so we dont have to specify

//console.log(empData2.name,empData2.job,empData2.exp,empData2.getDetails());

//console.log(empData2.getDetails());

//approach 2 : calling using brackets

console.log(empData2["name"],empData2["job"],empData2["exp"],empData2["getDetails"]());


empData2.job="senior analyst";

console.log("modified job is "+empData2.job) ;

empData2["exp"]=6;
console.log("modified exp is "+empData2["name"]) ;




