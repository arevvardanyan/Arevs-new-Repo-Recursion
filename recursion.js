// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1

const factorial = function(a,fac = 0){
    if(a === 0){
        return 1
    }

    return  a *  factorial(a-1)
}

// console.log(factorial(5))