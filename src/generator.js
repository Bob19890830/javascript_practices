function* gen(){
    yield 'first value';
    yield 2;
    yield 3;
}

let g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());