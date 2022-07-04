//1.
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
console.log(reversedNum(32243))

//2.
const checkPalindrome = str => str == str.split('').reverse().join('');
console.log(checkPalindrome('elephant'));

//3.
const possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}
console.log(possibleCombinations('Antra Angular'));
//4.
const sortAlphabet = str => [...str].sort((a, b) => a.localeCompare(b)).join("");

  console.log(sortAlphabet("zyxwvutsrqponmlkjihgfedcba")); // Logs: "djklopr"

//5.
const capitalize = word => word[0].toUpperCase() + word.substring(1);
console.log(capitalize('netflix'));

//6.
function longestString(...strs) {
    return strs.sort(function(a, b) {return b.length - a.length})[0];
  }

  console.log(longestString('Antra', 'Javascript', 'Angular', "Developer"));

//7.
const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('Zebra Elephant Kangaroo')); // 5
console.log(countVowels('Web Dev')); // 1
console.log(countVowels('Apple')); // 0

//8
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  var sqrt = Math.sqrt(num);

  for (var i = 2; i <= sqrt; i++)
    if (num % i === 0) return false;
  return true;
}
console.log(isPrime(26));

//9
const determineFunc = (param) => typeof param;
console.log(determineFunc(83295));

//10
function matrix(n) {

  let i;
  let j;

  for (i=0; i < n; i++)
  {
    for (j=0; j < n; j++)
    {
         if (i === j)
         {

           console.log(' 1 ');
         }

         else
          {
           console.log(' 0 ');}
          }
       console.log('----------');
     }
 }
//matrix(222); (commented out as it logs for ages)

//11
function Second_Greatest_Lowest(arr_num) {
  arr_num.sort(function(x,y) {
    return x-y;
  });

  var uniqa = [arr_num[0]];
  var result = [];

  for(var j=1; j < arr_num.length; j++) {
    if(arr_num[j-1] !== arr_num[j]) {
      uniqa.push(arr_num[j]);
    }
  }

  result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');

}

console.log((Second_Greatest_Lowest([21,45,1,56,420])));

//12
function isPerfect(number)
{
let temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }

     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        }
     else
        {
       console.log("It is not a perfect number.");
        }
 }
isPerfect(623);

//13
function factors(n)
{
 var num_factors = [], i;

 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15]

//14
function returnCurrencies(baseCoins)
{
  //Number of bigCoins can be found by subtracting the remainder of % 10000 then dividing by 10000
  var bigCoins = (baseCoins - (baseCoins % 10000))/10000;
  //Now take off the bigCoins from the input
  baseCoins %= 10000;
  //Same for medCoins, but with 100
  var medCoins = (baseCoins - (baseCoins % 100))/100;
  //Now take off the medCoins from the input
  baseCoins %= 100;
  //Whatever is left is the small coins
  return [bigCoins, medCoins, baseCoins];
}

returnCurrencies(145); //[0, 1, 45]

//15
function compute(b,n)
{
        let ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;
        }
        return ans;
}
console.log(compute(5, 9));

//16
function uniqueChar(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];

   }
  }
  return uniql;
}
console.log(uniqueChar("WhatYouSeeOnTheOutsideIsJustTheInsideManifested"))

//17
function count(string) {
  return string.split("").reduce(
    (acc, el) => {
      if(acc.hasOwnProperty(el))
        acc[el]++;
      else
        acc[el] = 1;
      return acc;
    }, {}
  )
}
var data = count("TurnOffTheTelevision");
console.log(data);

//18
function binarySearch(narray, delement) {
  var mposition = Math.floor(narray.length / 2);

  if (narray[mposition] === delement){
     return mposition;
  }
  else if (narray.length === 1)
  {
     return null;
  }
  else if (narray[mposition] < delement) {
     var arr = narray.slice(mposition + 1);
     var res = binarySearch(arr, delement);
     if (res === null)
     {
        return null;
     }
     else {
        return mposition + 1 + res;
     }
  }
  else {
     var arr1 = narray.slice(0, mposition);
     return binarySearch(arr1, delement);
  }
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binarySearch(myArray, 23423423));

//19
function isBigEnough(value) {
  return function(element, index, array) {
    return (element >= value);
  }
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough(69420));
isBigEnough(420);

//20
function stringGenerator(num){
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
console.log(stringGenerator(12))

//21
function fixedLength(arra, arra_size)
 {
    var result_set = [],
        result;


for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1;
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set;
}

console.log(fixedLength([5, 7, 21], 66));

//22
function count(str, letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(count('test', 'a'));

//23
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}
console.log(firstNonRepeatedCharacter('antra'))

//24
function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x;
}

console.log(bubble_Sort([132, 3455, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country)
  {
    return lname.length > country.length ? lname : country;
  },
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

//26
function longestWithoutRepeat(testString, returnString){
  var returnString = returnString || "";
  for(var i = 0; i < testString.length; i++) {
    if(i > 0){
      if(testString[i] == testString[i-1]) {
        var testStringArray = testString.split(testString[i] + testString[i-1]);

        testStringArray.sort(function(firstString, nextString){ return nextString.length - firstString.length})

        returnString = testStringArray[0];
        longestWithoutRepeat(testStringArray[0], returnString);
      }
    } else {
      returnString = testString
    }
  }
  return returnString;
}

console.log(longestWithoutRepeat("youtube"));

//27
function isPalindrome(s) {
  //var rev = s.replace(/\s/g,"").split('').reverse().join('');  //to remove space
  var rev = s.split('').reverse().join('');
  return s == rev;
}

function longestPalind(s) {
  var maxp_length = 0,
    maxp = '';
  for (var i = 0; i < s.length; i++) {
    var subs = s.substr(i, s.length);
    if (subs.length <= maxp_length) break; //Stop Loop for smaller strings
    for (var j = subs.length; j >= 0; j--) {
      var sub_subs = subs.substr(0, j);
      if (sub_subs.length <= maxp_length) break; // Stop loop for smaller strings
      if (isPalindrome(sub_subs)) {

          maxp_length = sub_subs.length;
          maxp = sub_subs;

      }
    }
  }
  return maxp;
}

//28
function pretty(x) {
  console.log((x));
}
function bar(func) {
  func("Letter Z");
}

//alerts "Hello World!"
bar(pretty);

//29
function functionName(fun) {
  let ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}
