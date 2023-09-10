// get initials
//method 1
const getInitials = (myName) => {
   let FirstName = myName.split(" ");
   let Fname = FirstName[0][0];
   let Lname =FirstName[1][0];
   return Fname+Lname;
}
//method 2
const getInitials1 = (myName1) => {
    let spaceIndex = myName1.indexOf(" ");
 
 let var1 = myName1[0] + myName1[spaceIndex+1];
 
 return var1;
}
// get initials for more than 2 words
const getInitials2 = (str) => {
    let words = str.split(" ");
    let caps= words.map((x)=> x.split("")[0]);
    let initials = caps.join("");
return initials;

}
console.log(getInitials2("Padmavathi Amara Madhu Madaka"));

// using filter method
let ages = [20,33,40,5,12,18];
let x= ages.filter( (num) => num>=18 )
console.log(x);

// Get Repeated number

let getRepeatedNumbers = (arr) =>
{
    let result = arr.filter((item,index)=> 
    
        arr.indexOf(item) !== index);
    
    
    return result;
}

// get repeated in form of key-value pairs 

let getRepeatedNumbers2 = (arr) =>
{
    let result = arr.filter((item,index)=> 
    
        arr.indexOf(item) !== index);
    
    
    return result;
}



// get repeated numbers 

let getRepeatedNumbers1 = (arr) =>
{    
    let x = findIndex((num)=> indexOf(num));
    let y = findLastIndex( (num) => indexof(num));
    let result1 = arr.filter((x,y)=>(x!==y));
    return result1;
}



//How do you reverse a given string in place?

let reverseOfString = (str1) =>{
   let splittedString = str1.split("").reverse().join("");
   //let reverseString = splittedString.reverse();
   //let finalString = reverseString.join("");
   return splittedString;
}
console.log(reverseOfString("Padhu"));

//How do you print duplicate characters from a string? ??????????????

let dupCharacters = (str2) => {
    let splittedStr2 = str2.split("");
    let x = splittedStr2.filter((value,index) => 
        splittedStr2.indexOf(value)!== index);
   return x;
};
console.log(dupCharacters("adhaaasriii"));

//How do you check if a string contains only digits? 
 let checkString = (str3) => {
    let result =  (Number(str3))?("Contains only digits"):("Not perfect number");
    return result;
 }
 console.log(checkString("212"));

 //How do you count a number of vowels and consonants in a given string? 

  let getCountVowelsAndConsonants = (str) => {
    let vowArray = ["a","e","i","o","u"];
    let vowCount = 0;
    let caps = str.toLowerCase();
    let len = caps.length;
    for(let x of caps){
        if(vowArray.includes(x)){
           vowCount++;         
        }        
    }
    let conCount = len-vowCount;
    console.log("Vowels:", vowCount,"and Consonants:", conCount);
  }
  console.log(getCountVowelsAndConsonants("Javascript"));

//How do you count the occurrence of a given character in a string?

let occ = (char1,str) => {
    let count = str.split('').filter((x)=>x==char1).length;
    return count;
}
console.log(occ("n","Junnuuu"));

//How do you print the first non-repeated character from a string? 

let nonRepeatedChar = (str4) => {
   for(let x of str4){
        if(str4.indexOf(x)==str4.lastIndexOf(x)){
            var result= x;
            return result;
        }  
   }  
}
console.log(nonRepeatedChar("adhuuumadhuuu"));

//How do you check if a given string is a palindrome? 

const getPalindrome = (str6) => {
    let result = str6.split("").reverse().join("");
    return ((result==str6)?"Palindrome":"not");
}
console.log(getPalindrome("padma"));

//How do you reverse words in a given sentence without using any library method?

const getReverse = (str5) => {
      let emptyStr="";      
      let len = str5.length;
      for(x=len-1;x>=0;x--)
      {
        let value = str5[x];
        emptyStr += value;      
      }
      console.log(emptyStr);
      }
      console.log(getReverse("Javascript html"));

      // print prime or not
      
      const isPrimeOrNot = (num) => {
            
            let count=0;
            for(i=1;i<=num;i++){
                if((num%i)==0)
                count++;
            }
             let result = (count==2)?("It is a Prime number"):("It is not a Prime number");
             return result;
        
      }
      console.log(isPrimeOrNot(19));

      // check given year is leap year or not

      const isLeapYear = (year) => {
        if(year%400==0 || year%100!=0 && year%4==0){
            console.log("Leap year");
        }
        else {
            console.log("Not leap year");
        }
      }
      console.log(isLeapYear(2000));

      const sortArray = (arr) => arr.sort().reverse();
      
      console.log(sortArray(['Osterreich', 'Andorra', 'Vietnam']));

      /*Write a function which accepts three numbers as arguments and returns the numbers in descending order, 
      (returns 'Invalid Arguments' if any of the arguments is not a number)*/

      const desc = (a,b,c) => {
            if(typeof(a)=="number" && typeof(b)=="number" && typeof(c)=="number"){
                if((a>b && a>c)){
                     if(b>c){
                        return a + " " + b + " " + c;
                     }
                     else{
                        return a + " " + c + " " + b;
                     }
                }
                else if((b>c && b>a)){
                    if(c>a){
                        return b + " " + c + " " + a;
                    }
                    else{
                        return b + " " + a + " " + c;
                    }
                }
                else if ((c>b && c>a)){
                    if(b>a){
                        return c + " " + b + " " + a;
                    }
                    else{
                        return c + " " + a + " " + b;
                    }
                }
            }
            else {
                console.log("Invalid Arguments");
            }
      }
      console.log(desc(6,"a",3));

/*Write a function which takes in an array of objects as an argument (each object should have name and age like in the sample below)
[{name: "Angelina Jolie",age: 80},
 {name: "Eric Jones",age: 20},
 {name: "Paris Hilton",age: 15},
 {name: "Kayne West",age: 6},
 {name: "Bob Ziroll",age: 100}
]
The function should check if the person is eligible to Vote (based on age) and 
should return "angelina Jolie can Vote" if eligible 
else it should return "angelina Jolie is a minor" (No capital letters in the returned string)*/

const eligibleToVote = (arr1) => {  
   var result = arr1.map((x)=>{
       let final = (x.age>=18)?x.name + " can vote.":x.name + " is a minor.";
       return final.toLowerCase();
})
     return result;
};
console.log(eligibleToVote([{name: "Angelina Jolie",age: 80},
{name: "Eric Jones",age: 20},
{name: "Paris Hilton",age: 15},
{name: "Kayne West",age: 6},
{name: "Bob Ziroll",age: 100}
]));
      
/*3. Write a function which accepts an array of numbers as an argument (example - [1, -4, 7, 2, -3, 9]) and returns the total of all positive numbers in the array
Example - getTotal([1, -4, 7, 2, -3, 9]) should return/console 19;*/

const addPositive = (arr3) => {
 let positiveNum = arr3.filter((x)=>x>-1);
 let result = positiveNum.reduce((acc,num)=> acc = acc + num,0);
 return result;
}
console.log(addPositive([1, -4, 7, 2, -3, 9]));



