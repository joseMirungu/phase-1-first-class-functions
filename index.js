function receivesAFunction(x){
    return x()
}
function returnsANamedFunction(){
    return function namedFunction(){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}