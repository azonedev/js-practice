// create an object
var developers = {
    'frontend'   : 'Abdullah',
    'backend'    : 'Mamun',
    'full-stack' : 'Abdullah Al Mamun'
}

// access object with dot notation
console.log(developers.frontend);
console.log(developers["full-stack"]);

// access object via bracket notation
console.log(developers['frontend']);
console.log(developers['backend']);

// array inside an object property
var object = {
    'name':'Abdullah',
    'legs':2,
    'tails':5.6,
    'friends':['Tushar','Sami','Rokibul']
    };

// change a object property
object.name = "Abdullah Al Mamun";
console.log(object);

// add a new property on object
object.age = 19;
console.log(object);
