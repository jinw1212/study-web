//오브젝트 - 배열 비교
//number, str, array(object), 
//boolean, object, null

let soccer = {
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

console.log(people);
console.log(people.hobby[1].count);