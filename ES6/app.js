// type casting check 
// differents between == & === , != & !==
let intValue = 5;
let stringValue = '5';

if(intValue==stringValue){
    console.log('Those are equal but not same type');
}else{
    console.log('Those are not equal');
}
console.log(intValue!=stringValue);
console.log(intValue!==stringValue);
// if(intValue===stingValue){
//     console.log('Those are equal with same type');
// }else{
//     console.log('those are equal but not same type');
// }