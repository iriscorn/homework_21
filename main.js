// Завдання 1.
function raiseToPower(num, power) {
    return num ** power;
}

let n = +prompt('Enter a number:');
let p = +prompt('Enter a power of number:');
alert(`${n} raised to a ${p}th power is ${raiseToPower(n, p)}`);


// Завдання 2.
const arr = ['sport', 'food', 'health', 'js', 'dreams', 'coca-cola', 'friends'];
function removeElement (array, item) {
    return array.splice(array.indexOf(item, 0), 1);
}
item = prompt(`Which of this you would like to remove from your life: ${arr.join(', ')}?`);
removeElement(arr, item);
alert(`Now your life a lot of better: ${arr.join(', ')}`);

// Завдання 3.
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let lenght = +prompt('Enter the lenght of the string')
function generateKey(len, characters) {
    let arr = characters.split("");
    let arr1 = [];
    for(let i = 0; i < len; i++) {
      arr1.push(arr[Math.round(Math.random() * arr.length)]);
    }
    return arr1.join("");
}

const key = generateKey(lenght, characters);
alert(`Your key is: ${key}`);