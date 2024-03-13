var angka = prompt("masukan angka : ");

if(angka % 2 == 0){
    alert( angka + " angka adalah bilangan genap"); //dilakukan ketika true
}else if(angka % 2 == 1){
    alert(angka + " adalah bilangan ganjil"); //dilakukan jika true
}else{
    alert("yang anda masukkan bukan angka!"); //dilakuka ketika false
}