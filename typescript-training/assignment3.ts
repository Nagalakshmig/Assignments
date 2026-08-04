
let studentName : string[] = ["Suresh","Mahesh","Naresh"];
let studentMarks : number[] = [75,80,82];

//let addedMarks :number[] =[];
let total:number=0;

let average:number=0;

for (let i:number=0; i< studentMarks.length ;i++){
let addedMarks :number[] =[];
 addedMarks[i]=studentMarks[i]!+10;
   
    console.log(`${studentName[i]} marks after adding is ${addedMarks[i]}`);
    total+=addedMarks[i]!;
}

average=total/studentMarks.length;

console.log(`average marks of student is ${average}`);