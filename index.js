let array = [89,50,10,20,10,20,44,51,55,44];
let unique = new Set([]);
for (var i = 0; i < array.length; i++) {
 if (unique.has(array[i])) {
   unique.delete(array[i])
 }else{
    unique.add(array[i])
 }
}
 let uniqueData = Array.from(unique)
uniqueData = uniqueData.sort()
console.log(uniqueData)
