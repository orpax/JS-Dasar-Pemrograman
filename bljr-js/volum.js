function jumlahVolum(a, b){
    var total;

    var volumA = a ** 3;
    var volumB = b ** 3;

    total = volumA + volumB;

    return total;
}    

console.log(jumlahVolum(8,3));