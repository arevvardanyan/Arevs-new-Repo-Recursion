// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1

const factorial = function(a,fac = 0){
    if(a === 0){
        return 1
    }

    return  a *  factorial(a-1)
}

// console.log(factorial(5))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2
// 1,1,2,3,5,8,13,21
const fibonacci = function(a){
    if(a < 2){
        return a
    }

    return fibonacci(a-1) + fibonacci(a-2)
}

// console.log(fibonacci(7))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 3

const power = function(a,b){
    if(b === 0){
        return 1
    }

    return a * power(a,b-1)
}

// console.log(power(2,4))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4

const arraySum = function(arr,i = arr.length - 1){
    if(i === 0){
        return arr[i]
    }

    return arr[i] + arraySum(arr,i - 1)
}

// console.log(arraySum([1,2,3,4]))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 5

const isPalindrome = function(str,i = str.length - 1,j = 0){//3,0, 2,1
    if(i < 0){
        return true
    }
    if(str[i] !== str[j]){
        return false
        
    }
    
    return isPalindrome(str,i-1,j+1)
}

// console.log(isPalindrome("racear"))