const person1={
    name:"aman"
}
const person2={
    name:"sam"
}
function x(){
    console.log(this)
}

x();   //this and below are same
x.call(this);  //window
x.call(person);//aman
x.call(person2);//sam

