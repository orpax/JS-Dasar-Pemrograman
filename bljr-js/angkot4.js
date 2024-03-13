var angkotBeroperasi = 6;
var jumlahAngkot = 10;

for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot = noAngkot + 1){
    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    }else if(noAngkot === 8 ){
        console.log("Angkot No." + noAngkot + " sedang lembur");
    }
    else{ 
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }
} 