// javascriipt

function kelbtn() {
    let sisia = +document.ElementById("sisi-satu").value;
    let sisib = +document.getElementById("sisi-dua").value;
    let sisic = +document.getElementById("sisi-tiga").value;
    let keliling = parseint(sisia) + parseint(sisib) + parseint(sisic);
     if (sisia == ``|| sisib == `` || sisic == ``)
        {alert(`form masih kosong`);}
    
    
   }
     console.log(sisia);
     console.log(sisib);
     console.log(sisic);
    let keliling = sisia + sisib + sisic;
    document.getElementById('result_keliling').innerHTML = `Keliling = ${sisia} + ${sisib} + ${sisic} = ${keliling}`;

    
function luasbtn() {
    let tinggi = +document.getElementById("tinggi").value;
    let panjang = +document.getElementById("panjang-alas").value;
    if (panjang == '' || tinggi == '') {
        alert('Form masih kosong!');
    
    let luashasil = (panjang * tinggi)/ 2;
    document.getElementById('luashasil').innerHTML = `Luas = 1/2 x ${panjang} x ${tinggi} = ${luashasil}`;
}

    console.log(panjang,tinggi);
}



prompt
