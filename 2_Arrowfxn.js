// console.log(this);

const obj={
    fn:function(){
        console.log(this);  //here this refers to obj
    },
    fn2:()=>{
        console.log(this);// in case of arrow fxn this refers to parent's this
    }
}

obj.fn(); //op- obj        this fxn is called by obj.fn
obj.fn2();//op- window
//whenever you see this it depends how u are calling that fxn