// Нихуя непонятно

function debounce(func, ms) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
}

let f = debounce((message) => console.log(message), 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);