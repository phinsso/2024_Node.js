const fruits = ['apple', 'banana', 'orange', 'pear'];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] + " ");
// }

// forEach문
fruits.forEach(function(f) {
    console.log(f)
})

// forEach (arrow function)
fruits.forEach(f => console.log(f))

// for of문
for(let f of fruits) {
    console.log(f)
}