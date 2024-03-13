//1. Menambah kan Array

//var arr = [] ;
//arr[0] = "Tio";
///arr[1] = "Bas";
//arr[2] = "Der";

//console.log(arr[0]);

//2. Menghilankan Array 

//var arr = ["Tay", "Vas", "Ves"];
//arr[0] = null;
//console.log(arr);

//3. Memanipulasi Array

//var arr = ["Bas", "Bay", "Han", "Der", "Ogs",];
//    for(var i = 0; i < arr.length; i = i + 1){
//        console.log("Murid Dengan Nomor ke : " + (i+1) + " " + arr[i]);
//    }

//Method Pada array atau metode nya

//1. join, menggubah isi array menjadi strings

//var arr = ["Tay","Bas","Han","Ogs", "Der"]
//console.log(arr2.join(", "));

//2. push & pop
//arr.push("Kis"); // bisa ditambahkan lagi tidak seperti pop yang harus satu satu
//arr.pop();

//3. unshift & shift
//arr.unshift("Bima", "Sandhi", "Suma");
//arr.shift(); // sama seperti pop yang sama sama menghilangkan element 

//4. Slice & Splice
// spilce (dariIndexBerapa, MaudiHapusBerapa, element1, element2)
//arr.splice(2, 0 ,"Tahu", "Tempe");
//slice (awal, akhir)
//var arr2 = arr.slice(0,2) // memiliki fungsi yang sama seperti pop yaitu menghilangkan element


//5. foreach

//var angka = [1,2,3,4,5,6,7,8];
//    angka.forEach(function(e){ // penggunaan for yang lebih mudah (foreach) itu adalaj untuk 
//        console.log(e);
//    })

//var namaSiswa = ["Anjay", "Asep", "Risma", "Armi"];
//    namaSiswa.forEach(function(a, z){
//        console.log("Murid Ke = " + (z+1) + " " + a);
//    })

//6. Map
//var angka =[1,2,3,4,5,9,7,8];
//    var angka2 = angka.map(function(a){
//        return a * 2; // setiap bilangan dikali 2
//    })
//    var hasil = angka2.join("-");
//        console.log(hasil);

//7. Sort

//var angka = [1,4,2,6,8,10,14];
//    angka.sort(function(h,c){
//        return h - c;
//    });
//        console.log(angka);

//8. Filter
//var angka = [1,2,3,5,6,21,61,31,24];
//var angka2 = angka.filter(function(a){
//        return a == 1;
//    })
//var angka3 = angka2.sort(function(a,c){
//    return a - c;
//    });
//   console.log(angka3);

//9. Find
var angka = [1,2,3,5,26,6,8,4];
var angka2 = angka.find(function(a){   
    return a > 5;
    })
    console.log(angka2);
