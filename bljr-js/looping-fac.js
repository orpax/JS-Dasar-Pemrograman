function faktorial(n){
    var hasil = 1;
    for(var i = n; i > 0; i--){
        hasil *= i;
    }
    return hasil;
}
var angkaMasuk = faktorial(5);
console.log(angkaMasuk)