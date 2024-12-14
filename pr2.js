
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
userOne.age=19;
userOne.hobby="football";
delete userOne.city;
let userTwo=new User("Nastya",25,"London");
console.log(userOne.age+userTwo.age);

console.log("Задание №2");
let str="asdsadwdacasdcacacasaac";
console.log(str.length);
console.log(str[0]);
console.log(str.at(-1));
console.log(str.startsWith("foo"));
console.log(str.endsWith("bar"));
console.log(str.includes("dac"));

console.log("Задание №3"); 
let fruits = ["Яблоко", "Апельсин", "Слива", 1, true];
console.log(fruits[0]);
console.log(fruits.at(-1));
fruits[1]=false;
let vegetables=fruits.slice();;
console.log(fruits);
console.log(vegetables);
let join = function(a,b){
    for(let item of a){
        b.push(item);        
    }
};
join(fruits,vegetables);
console.log(fruits);
console.log(vegetables);
let users=[new User("Vasya",18,"Moscow"),new User("Petya",27,"Moscow"),new User("Nastya",35,"Moscow")]
let names = function(a){
    let names=[];
    for (let item of a){
        names.push(item.name);
    }
    return names
}
console.log(names(users));
let average = function (numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;
    return avg;
}
let numbers = [1, 2, 3, 4, 5];
console.log(average(numbers)); 

console.log("Задание №4");
/*Создайте набор имен с помощью Set, добавьте в него четыре значения. Удалите
первый добавленный элемент, проверьте его отсутствие в наборе, выведите в
консоль его размер.*/ 
let set = new Set();
set.add("john");
set.add("pete");
set.add("mary");
set.add("Vasya");
set.delete("john");
console.log(set);
console.log(set.size);

console.log("Задание №5");
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
console.log(map.get('meat'));
map.delete('orange');
console.log(map.has('orange'));