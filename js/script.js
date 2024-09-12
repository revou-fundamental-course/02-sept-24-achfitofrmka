// javascriipt

function kelbtn(){
    let sisia = document.getElementById("sisi-satu").value;
    let sisib = document.getElementById("sisi-dua").value;
    let sisic = document.getElementById("sisi-tiga").value;
    let hasilkel = parseint(sisia) + parseint(sisib) + parseint(sisic);
    document.write(`hasilnya adalah ` =hasilkel )


    console.log(sisia,sisib,sisic);
}
function luasbtn(){
    let tinggi = document.getElementById("tinggi").value;
    let panjang = document.getElementById("panjang-alas").value;
    
    let luashasil = parseint(panjang) + parseint(tinggi);
    document.write(`hasilnya adalah ` =luashasil )


    console.log(panjang,tinggi);
}