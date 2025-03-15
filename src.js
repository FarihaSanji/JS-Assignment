let math = 0.2;
let phy = 0.1;
total = phy+math;
console .log(total.toFixed(2))
var num1 = 119;
mod = num1 % 5;
console .log(mod)

console.log(5==10);

const number = 45;

function fanoff(){
    console.log('fan off kor')
}

fanoff();

function add(num1,num2){
    const num = num1 + num2;
    console.log('add is', num)
}
add(4,5)
function doubleIT (number){
    const doubled = number * 2;
    console.log(number, doubled)
}
console.log('will call the function')
doubleIT(15);
console.log('--------------')
doubleIT(88);
console.log('----------------')


function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill1 = add(5, 80);

function add2(price1, price2){
    return price1+price2;
}
const bill2 = add2(6,90)
console.log (bill1, bill2)


function evenSizedString(str){
const size = str.length;
console.log(str, size);
if (size%2 == 0)
{
    console.log('even size');
    return true;

}
else 
{
    console.log('odd size');
    return false;
}
}

evenSizedString('Dhaka');
evenSizedString('faka');

function doubleOrtriple(number,doDouble){
    if (doDouble === true){
        const result =number*2;
        return result;
    }
    else{
        const result = number*3;
        return result ;

    }
}
console.log(doubleOrtriple(5,true));
console.log(doubleOrtriple(5,false));


function numberOffElements(numbers){
    const len = numbers.length;
    return len;
}
console.log(numberOffElements([12,45,78,45,1212,4,5]))

function getAge(person){
    const age = person.age;
    return age;
}
console.log(getAge([s,a,n]))

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum+number;
      

    }
    return sum;
}
const numbs = [54,62,12,6];
const summation =sumOfNumbers(numbs);
console.log('Sum of numbers is', sum);

function evenNumbersOnly(numbers){
  const evens = [];
   for(const number of numbers) {
    if (number % 2 === 0){
        console.log(number);
        evens.push(number);
    }
    
   }
   return evens;
}

const numberArray = [5, 8, 91,24,6];
// const evens = evenNumbersOnly(numbers); 
// console.log('even numbers are', evens)


function sumOfEvenNumbers(numbers){
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);   
console.log('sum is', sum);

function mileToKilometer (mile){
    const kilo =mile*1.60934;
    return kilo;
}
console.log(mileToKilometer(4))

function oddAverage(numbers){
    const odds = []
    for (const number of numbers){
        if (number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }
       
}
    

    let sum = 0;
    for(const number of odds){
        sum = sum + number;

}
const count = odds.length;
console.log(sum, count);
const avg = sum / count;
return avg;
console.log(sum);
}

const numbers = [42,13,58,65,81,96, 7];
const avg = oddAverage(numbers) 
console.log('avg of the odd numbers is:',avg);
