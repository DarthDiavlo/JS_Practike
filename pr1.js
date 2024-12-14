console.log("Задание №1");
class User{
    constructor(nameUser,age,city){
        this.name=nameUser;
        this.age=age;
        this.city=city;
    }

    setage(newage){
        this.age=newage;
    }
    printing(){
        console.log("Привет, Я "+this.name+" из "+this.city+" и мне "+this.age+" лет");
    }
}
let userOne=new User("Vasya",18,"Moscow");
var userTwo=new User("Nastya",25,"London");
const userThree=new User("Nikita",10,"Moscow");
userOne.printing();
userTwo.printing();
userThree.printing();
console.log("Изменили возраст первого пользователя");
userOne.setage(19);
userOne.printing();

console.log("Задание №2");

let number =0;
let bigint =10n ;
let boolean =true;
let string ="foo";
let symbol =Symbol("id");
let object =null;
console.log("undefined"+" : "+ typeof (undefined)); // "undefined"
console.log(number+" : "+ typeof ( number ));// "number"
console.log(bigint+" : "+ typeof ( bigint ));// "bigint"
console.log(boolean+" : "+ typeof ( boolean)); // "boolean"
console.log(string+" : "+ typeof ( string ));// "string"
console.log('Symbol("id")'+" : "+ typeof ( symbol)); // "symbol"
console.log(object+" : "+ typeof ( object)); // "object" 

console.log("Задание №3");

let num1 = 1;
let num2 = 102;
let num3 = 45;
console.log(num1,num2,num3);
let max;
if (num1 >= num2 && num1 >= num3) {
    max = num1;
} else if (num2 >= num1 && num2 >= num3) {
    max = num2;
} else {
    max = num3;
}
console.log(`Наибольшее число: ${max}`);

console.log("Задание №4");

console.log("Цикл for:");
let resultFor = "";
for (let i = 1; i <= 10; i++) {
    resultFor += i + " ";
}
console.log(resultFor.trim());

console.log("Цикл while:");
let resultWhile = "";
let j = 1;
while (j <= 10) {
    resultWhile += j + " ";
    j++;
}
console.log(resultWhile.trim());

console.log("Цикл do...while:");
let resultDoWhile = "";
let k = 1;
do {
    resultDoWhile += k + " ";
    k++;
} while (k <= 10);
console.log(resultDoWhile.trim());

console.log("Задание №5");

function amount(a,b){
    return a+b;
};
console.log("Сумма: "+amount(1,2))
let multiplication = function(a,b) {
    return( a*b );
  };
console.log("Разность: "+multiplication(1,2));
let difference = (a,b)=> a-b;
console.log("Умножение: "+difference(1,2));