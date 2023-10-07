const isEqual=(obj1,obj2)=>{
    const obj1keys=Object.keys(obj1);
    const obj2keys=Object.keys(obj2);
}
let obj1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
JSON.stringify(obj1)===JSON.stringify(obj2);
console.log(isEqual(obj1,obj2));