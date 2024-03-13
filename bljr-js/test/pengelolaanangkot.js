var penumpang = ["TIo", "Baswara", "Deram", "Ogik", "Kosong", "Sarip", "Kosong", "Kosong", "Kosong"];
var tambahPenumpang = function(namaPenumpang, penumpang){

    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;

    }else{
        for(var i = 0 ; i < penumpang.length; i = i + 1 ){
            if(penumpang[i] == "Kosong"){
                penumpang[i] = namaPenumpang;
                    return penumpang;

            }else if(namaPenumpang == penumpang[i]){
                console.log("Kamu sudah ada dikursi" + " " + namaPenumpang+"!");
                return penumpang;

        }  else if(i == penumpang.length - 1){
            penumpang.push[namaPenumpang];
            return penumpang;
        }
    }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log("Penumpang dengan nama " + namaPenumpang + " tidak Ada!");
        return penumpang;

    }else{
        for(var i = 0; i < penumpang.length; i++){

            if(penumpang[i] == namaPenumpang){
                penumpang[i] = "Kosong";
                return penumpang;

            }else if(i == penumpang.length - 1){
                console.log("Penumpang bernama " + namaPenumpang +  " tidak ada di angkot!");
                return penumpang;
            }
        }
    }
    return penumpang;
}
