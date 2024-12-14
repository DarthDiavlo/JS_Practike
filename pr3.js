console.log("Задание №1");
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function Operation(a,b) {
    try {
        if (typeof a !== 'number') {
            throw new CustomError("Все аргументы должны быть числами");
        }
        if (typeof b !== 'number')  {
            throw new CustomError("Все аргументы должны быть числами");
        }
        if (b === 0) {
            throw new CustomError("Не дели на ноль");
        }
        return a/b;
    } catch (error) {
        console.error(`Произошла ошибка: ${error.name} - ${error.message}`);
        return null;
    }
}
console.log(Operation(1, 2)); 
console.log(Operation(1, '3')); 
console.log(Operation(1, 0)); 





    

