// Write your code below this line.
let arr = [1,2,3,4,5,6,7,8,9,10]
function randomReturn(num) {
    let emptyArr = []
    for (i=1; i <= num; i++){
        let test = arr.splice([Math.floor(Math.random() * arr.length)], 1)
        emptyArr.push(test[0])
        console.log(arr.length)
        }
        return emptyArr;
    }


let luckyNumbers = randomReturn(10)
console.log(luckyNumbers)