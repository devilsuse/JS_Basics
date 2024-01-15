function sum(a,b){
    return a+b
}

let sum2 = (a,b) => { //using arrow func
    return a+b
}

let sum3 = (a,b) => a+b //as there's just a single LOC it concised to 1 line

function isPositive(num){
    return num>0
}

let isPositive2 = (num) => num>0
let isPositive3 = num => num>0 //remove paranthesis 
                //around num as there's just a single param

function random(){
    return Math.random()
}

let random2 = () =>{
    return Math.random()
}

let random3 = ()=> Math.random()

/*document.addEventListener('click', function(){
    console.log('click')
})

document.addEventListener('click', ()=>console.log('click'))
*/
console.log("sum: ", sum(1,2))
console.log("sumArrow2: ", sum2(1,2))
console.log("sumArrow3: ", sum3(1,2))


console.log("isPositive" + isPositive(2))
console.log("isPositiveArrow2" + isPositive2(2))
console.log("isPositiveArrow3" + isPositive3(2))


console.log("random" + random())
console.log("randomArrow2" + random2())
console.log("randomArrow3" + random3())