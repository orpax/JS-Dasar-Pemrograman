// global scope / window scope

var a = 1;
// lokal scope
function tes(){ //scope (Note jiga diluar var lokal tidak bisa mengakses
    var a = 2;// var lokal jika di dalam bisa dan sebaliknya jika var lokal bisa mengakses ke var global
    console.log(a)
}

tes();

// name conflict

// var a = 1;

// function tes(){
//      var a = 2;
//}

// tes();
// console.log(a); (Note : jika tidak ingin melakukan name conflict bisa menggunakan
// console.log(window.a) pada var lokal untuk berinteraksi dengan var global/window)