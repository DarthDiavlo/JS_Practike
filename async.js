function loadScript(callback) {
    // Имитация асинхронной операции с использованием setTimeout
    setTimeout(() => {
        const data = "Данные, полученные после задержки";
        callback(data); 
    }, 2000);
}
function input(data) {
    console.log(data);
}
loadScript(input);


function promiseFunction(success){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Данные, полученны");
            } else {
                reject(new Error("Ошибка полученна"));
            }
        }, 2000);
    });
}

promiseFunction(true)
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error(error.message); 
    });
promiseFunction(false)
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error(error.message); 
    });


async function f(success) {
    let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (success) {
                    const data = "Данные, полученные";
                    resolve(data);
                } else {
                    reject(new Error("Ошибка получена"));
                }
            }, 2000);
        });
    try {
        let result = await promise; 
        console.log(result);
    } catch (error) {
        console.error(error.message); 
    }
}

f(true)
f(false)


async function runParallelTasks() {
    try {
        const promises = [
            promiseFunction(true),
            promiseFunction(true),
            promiseFunction(false) 
        ];
        const results = await Promise.all(promises);
        console.log(results); 
    } catch (error) {
        console.error(error.message); 
    }
}

runParallelTasks();