// nested array
var array = [ ['arg1','arg2'], ['1arg','2arg']];

// access a data with indexNumber 
var data = array[0][1];
// console.log(data);

// modify data with indexes
array[1][0] = 1218;
// console.log(array);
// access multidimental array with index number
// console.log(array[0][1]);

// push method on array

// push a array on multidimentional array
array.push(['name','email']);
// console.log(array);

// push a item on exitsting array
var myArray = [50,20,10,30];
myArray.push(50);
// console.log(myArray);

// manipulate pop method on array
// pop method removes the last item form a array & we can store it on a variable
var popRemove = myArray.pop();
// console.log(popRemove);
// pop on mulit-dimetional array
var popArryRemove = array.pop();
// console.log(popArryRemove);

var arrayPro = [];
arrayPro['name'] = 'Abdullah';
arrayPro['title'] = 'Abdullah';
arrayPro['0']=20;
// console.log(arrayPro);
// console.log(arrayPro.length);

// print a array item with for loop
for (let i = 0; i < arrayPro.length; i++) {
    // console.log(arrayPro[i]); 
    
}

var toDo = [ 'read','perform salth', 'eat', 'practice-coding'];
// pop for remove a item last of an array & store with a variable
var pop = toDo.pop();
// console.log(pop);

// push for add an item last of an array 
toDo.push('coding');
for (let i = 0; i < toDo.length; i++) {
    const result = toDo[i];
    // console.log(result);    
}

// shift for remove an item first of an array & store within a variable
var shift = toDo.shift();
// console.log(shift);

// unshift for add an item/array first of an array
toDo.unshift('read-more');
for (let i = 0; i < toDo.length; i++) {
    const singeArrayItem = toDo[i];
    // console.log(singeArrayItem); 
} 

// index of is use to know a item of index number
// console.log(toDo.indexOf('eat'));

// splice use to cut a specific part of an array
// var newToDo = toDo.splice(1,3);
// console.log(newToDo);
// we can user splice method like this 
var spliceToDo = toDo.splice(2);
console.log(spliceToDo);
