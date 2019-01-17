let people ={
    name:"cos",
    age:20,
    hobby:["농구","축구"]
}
console.log(people);

let people_json ='{"name":"cos","age":20,"hobby":["농구","축구"]}';
console.log(people_json);
//자바스크립트------>JSON문자열
let change_json=JSON.stringify(people);
console.log(change_json);
//JSON문자열--------->자바스크립트 오브젝트
let change_object = JSON.parse(change_json);
console.log(change_object);
console.log(change_object.name);