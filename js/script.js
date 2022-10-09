// deklarasi variable untuk akses element html
let berat = document.getElementById('weight');
let tinggi = document.getElementById('height');
let buttonHitung = document.getElementById('buttons').onclick = jalankan

function jalankan(event){
    let dataBerat = parseFloat(berat.value);
    let dataTinggi = parseFloat(tinggi.value);

    let hasil = dataBerat / ((dataTinggi / 100) ** 2)

    if(hasil < 18.5){
        document.getElementById('results').children[0].innerText = 'Hasil = ' + hasil.toFixed(1);
        document.getElementById('results').children[1].innerHTML = 'Saat ini kamu <b>Kurang berat badan</b>, tapi kamu bisa meningkatkan berat badanmu dengan mengonsumsi makanan dan minuman sesuai kebutuh kalori harian kamu.'
    } else if ((hasil >= 18.5) & (hasil <= 24.9)){
        document.getElementById('results').children[0].innerText = 'Hasil = ' + hasil.toFixed(1);
        document.getElementById('results').children[1].innerHTML = 'Yeay saat ini level BMI <b>Normal</b>, Pertahankan terus dengan pola hidup sehat yaa!'
    } else if((hasil >= 25 ) & (hasil <= 29.9)){
        document.getElementById('results').children[0].innerText = 'Hasil = ' + hasil.toFixed(1);
        document.getElementById('results').children[1].innerHTML = 'Saat ini kamu <b>Kelebihan Berat Badan</b>. tak perlu khawatir, kamu bisa mencoba menjaga pola makan dan mulai berolahraga rutin'
    } else if(hasil >= 30){
        document.getElementById('results').children[0].innerText = 'Hasil = ' + hasil.toFixed(1);
        document.getElementById('results').children[1].innerHTML = 'level BMI kamu saat ini adalah <b>Obesity</b>. Sebaiknya kamu mulai mengatur pola diet sehat dan olahraga rutin. Aku yakin kamu bisa pasti keluar dari level ini dengan cepat'
    } else{
        document.getElementById('results').children[1].innerHTML = 'Sepertinya kamu <b>salah memasukan data.</b> namun kamu masih bisa mencobanya lagi loh'
    }
    

    event.preventDefault()
}









// function tampilkanData(event){
//     // parseInt(berat.value,tinggi.value);
//     console.log('data ini ditampilkan oleh button')
//     console.log(berat)
//     // event.preventDefault()
// }

