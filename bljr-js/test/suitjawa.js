var tanya = true;
while (tanya){
    // menangkap pilihan player
var p = prompt("pilihan : gunting, batu, kertas");
// pilihan dari komputer
// membangkit bilangan random
var comp = Math.random();
    if(comp < 0.34){
        comp = "gunting";
    }else if(comp >= 0.34 && comp < 0.67){
        comp = "batu";
    }else{
        comp = "kertas";
    }
console.log(comp)
// menentukan rules
var hasil = "";
if(p == comp){
    hasil = "SERI !";
}else if (p == "gunting"){
    //if (comp == "kertas"){
    //    hasil = "MENANG";
    //}else{
    //    hasil = "kalah";
    //}
    hasil = (comp == "kertas")?  "MENANG" : "KALAH";
}else if(p == "batu"){
    hasil = (comp == "gunting") ? "MENANG" : "KALAH";
}else if(p == "kertas" ){
    hasil = (comp == "batu") ? "KALAH" : "KALAH";
}else{
    hasil = "Memasukan Pilihan yang salah!!";
}
//dan tampilkan hasilnya
alert("Kamu Memilih : " + p + " dan komputer memilih : " +" "+ comp + " \n maka hasilnya : Kamu " + hasil);
tanya = confirm("main lagi?");
}

