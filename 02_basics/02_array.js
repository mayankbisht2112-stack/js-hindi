const marvel_heroes=["ironman", "spiderman", "thor"]
const dc_heroes=["superman", "batman", "flash"]
// console.log(marvel_heroes.concat(dc_heroes));
const myheroes=[...dc_heroes,...marvel_heroes]
// console.log(myheroes);
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

