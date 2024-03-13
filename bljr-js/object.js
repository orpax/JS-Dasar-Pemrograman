// kenapa object ? 
// Misal nya kita medata sebuah murid dengan variable

// var namaMurid = "Tio";
// var kelasBerapa = 9;
// var naikKelas = true;
// var nilaiSemester = [50,60,70,80,90,100];

// function nilaiKelulusan(nilaiSemester){
    // var total = 0;
    // for(var a = 0; a < nilaiSemester.length; a++){
        // total += nilaiSemester[a];
    // }
    // return total / nilaiSemester.length;
// };
// var hasil = nilaiKelulusan(nilaiSemester);
// console.log(hasil);

// dengan object

//var namaMurid = {
//    nama : "Tio",
    // umur : 6,
    // lulus: false,
    // alamat : {  
        // jalan : {
            // dekat : "Wj",
            // lokasi : "samping wj",
            // daerah : "lautannan",
        // },
        // kota : "Denpasar",
        // kodepos : "036183",
    // },
    // nilaiIpk : [3, 3.5, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0],
    // nilaiTotal : function(){
        // var total = 0;
        // var nilaiIpk = this.nilaiIpk;
        // for(var o = 0; o < nilaiIpk.length; o++){
            // total += nilaiIpk[o];
        // }
        // return total / nilaiIpk.length;
    // }
// }
// namaMurid.nilaiTotal();

//  1. Object literal
// var orang = {
//     nama : "Tayo",
//     umur : 8,
//     pekerjaan : "Tidur",
//     hobi : "Ngoding",
// }

// var orang2 = {
//     nama : "Ceca",
//     umur : 11,
//     pekerjaan : "Makan",
//     hobi : "Nyanyi",
// }

// function decralaraion
// function buatObjectMurid(nama, umur, pekerjaan, hobi){
//     var orangBaik = {};
//         orangBaik.nama = nama;
//         orangBaik.umur = umur;
//         orangBaik.pekerjaan = pekerjaan;
//         orangBaik.hobi = hobi;
//     return orangBaik;
// }

// var orangBaik1 = buatObjectMurid("Ceca", 11, "Makan", "Nyanyi");

// var orangBaik2 = buatObjectMurid("Tio", 10, "Tidur", "Ngoding");

// constructor
// function murid (nama, umur, cita, hobi){
//     this.nama = nama;
//     this.umur = umur; 
//     this.cita = cita;
//     this.hobi = hobi;
// }

// var orangCinta1 = new murid("Ceca", 11, "Makan", "Nyanyi");

// var orangCinta2 = new murid("Tio", 10, "Tidur", "Ngoding");