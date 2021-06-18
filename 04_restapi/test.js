var a =42;
function hello(name){
    var greeting = "Hello";
    return greeting + ' ' + name;
}

console.log(hello("Node"));
greeting = "testt";
console.log(greeting);

{
    let scopeVariable = "42";
    var constNum = '37';
}
console.log(constNum);

const o = {a:42};
console.log(o);
o.a = 33
console.log(o)



const square = a =>a*a;

console.log([1,2,3].map(a => a*a));
console.log([1,10,3].map(square));

// use parameter attribute
let util = {
    squares(a){
        return a*a;
    }
}
console.log(util.squares(3));

// define the parameters attributes
exports.i = 'am exports';
console.log(exports);

// f1 is regular scope, f2 is arrow scope
let u3 = {
    f1:function (){
        console.log(exports);
    },
    f2:() => {
        console.log(exports)
    }
}


u3.f1();
u3.f2();

a = [1, 2, 3.14, 'Hello', null, true];
console.log(a[4]);

new Array(1,2,3);


var persion = {
    name:'Bob',
    age:20,
    tages:['js', 'web', 'mobile']
};

console.log(persion.tages[0]);


var a =123;
a = 'ABC';
console.log(a);


var test_1 = '\x41';
console.log(test_1);

var test_2 = '\u4e2d\u6587';
console.log(test_2);


console.log(`test
dsafas
sadf
`);



var s_2 = 'Hello world';
console.log(s_2.length);


var age = 20;
if (age >= 18) {
    console.log('teste');
}else{
    alert('tennger')
}

var x = 1;
var i;
for (i=2; i<=10;i++){
    x = x*i;
}
console.log(x)

var o1 = {
    name : "jack",
    age:23,
    city:'Hoboken'
}
for (var key in o1){
    console.log(key);
}

var m = new Map([['Michael', 95], ['Bob', 75]]);
console.log(m.get('Michael'));


var n = new Map([['Michael', 95], ['Bob', 75]]);
console.log(n.get('Michael'));


