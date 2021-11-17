const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newArray = [...cats]
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0, length-1)
}

function removeFirstCat() {
    const newArray = cats.slice(1);
    return newArray;
}