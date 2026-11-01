function greatuser(username,userage){
    console.log("username is" + userage);
    console.log("username is" + userage);
    
    
}
https://drive.google.com/file/d/10dS3DH6QjpkHKLb9-pASNM74JUccnqjZ/view

greatuser( "abdullah",20)
greatuser("hk op", 27)




// 1. addTwoNumbers
function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(10, 5));


// 2. subtractNumbers
function subtractNumbers(a, b) {
    return a - b;
}
console.log(subtractNumbers(10, 5));


// 3. multiplyNumbers
function multiplyNumbers(a, b) {
    return a * b;
}
console.log(multiplyNumbers(10, 5));


// 4. divideNumbers
function divideNumbers(a, b) {
    return a / b;
}
console.log(divideNumbers(10, 5));


// 5. getRemainder
function getRemainder(a, b) {
    return a % b;
}
console.log(getRemainder(10, 3));

//6. isPositive
function ispositive(number){
    if(number < 0 ){
        return "posituive"
    }else{
        return "not positive"
    }
}

console.log(ispositive(-5));



   
    

// 7. isNegative
function isNegative(num) {
    if (num < 0) {
        return "Negative";
    } else {
        return "Not Negative";
    }
}
console.log(isNegative(-5));


// 8. checkEven
function checkEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEven(10));


// 9. isEqual
function isEqual(a, b) {
    if (a === b) {
        return "Equal";
    } else {
        return "Not Equal";
    }
}
console.log(isEqual(10, 10));


// 10. compareNumbers
function compareNumbers(a, b) {
    if (a > b) {
        return "Greater";
    } else {
        return "Smaller";
    }
}
console.log(compareNumbers(20, 10));


// 11. getFullName
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Huzaifa", "Khan"));


// 12. getGrade
function getGrade(num) {
    if (num >= 90) {
        return "A";
    } else if (num >= 80) {
        return "B";
    } else if (num >= 70) {
        return "C";
    } else if (num >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(getGrade(85));


// 13. isTeenage
function isTeenage(age) {
    if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Not a Teenager";
    }
}

// 14. greetUser
function greetUser(name) {
    return "Hello, " + name + "!";
}

// 15. isEligibleToVote
function isEligibleToVote(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}




// 17. checkTemperature
function checkTemperature(temp) {
    if (temp > 30) {
        return "Hot";
    } else if (temp < 10) {
        return "Cold";
    } else {
        return "Normal";
    }
}

console.log(checkTemperature(35));


// 19. calculateDiscountedPrice
function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

console.log(calculateDiscountedPrice(1000, 20));


// 20. isPasswordValid
function isPasswordValid(password) {
    if (password.length >= 8) {
        return "Valid Password";
    } else {
        return "Too Short";
    }
}

console.log(isPasswordValid("12345678"));




