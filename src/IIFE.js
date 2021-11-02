(function(){
    setTimeout(() => console.log((1), 0));
    console.log(2);
    setTimeout(() => console.log((3), 0));
    console.log(4);
})();

// 2, 4, 1, 3
// function Timer(){
//     setTimeout(() => console.log((1), 0));
//     console.log(2);
//     setTimeout(() => console.log((3), 0));
//     console.log(4);}
// Timer();