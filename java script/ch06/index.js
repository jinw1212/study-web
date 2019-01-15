// 오브젝트 -배열 비교
// number,str,array(object),
//boolean,object, null


let soccer={
    name:"축구",
    count:11,
    need:"공"
}

let people = {
    name:"cos",
    phone:"01022227777",
    address:"busan",
    age:50,
    hobby:["농구",soccer,"음악"]
}
console.log(people.hobby[1]);
console.log(people.hobby[1].count);

console.log(people);
console.log(typeof people);
console.log(people.name);
console.log(people.phone);
console.log(people.address);
console.log(people.age);

let num1=  [1,2,3,4,5,];

let num2 = {
    one:1,
    two:2,
    important:3,
    four:4,
    five:5
}

console.log(num2.important);
 
let c =[30,30,30,30,40,20,50];
