
function addNum(num){

    let initial = num;

    function createBase(initial){

         let output = initial + 6;

         return output;
    }
    return createBase(initial);
}


for(let i=0; i<20; i++){
    console.log(addNum(i))
}