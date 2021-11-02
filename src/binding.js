var test = 1

let obj = {
    test:'test',
    method:function(){
        console.log(this.test)
    }
}

let app = obj.method();

console.log(app);