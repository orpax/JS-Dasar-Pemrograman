var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
    while(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
        noAngkot = noAngkot + 1;
    }
    
    for(noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot = noAngkot + 1){
        console.log("Angka No. " + noAngkot + " sedang tidak beroperasi")
    }