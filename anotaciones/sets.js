const set = new Set()

console.log(set)

set.add("algo")

console.log(set)

set.add(50)

console.log(set)

console.log(set.has("algo"))

set.delete("algo")

console.log(set)

console.log(set.has(50))
console.log(set.has("algo"))

