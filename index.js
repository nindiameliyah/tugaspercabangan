// const email = "amaliyahnindi1@gmail.com";
// const pass = "ntah";


// // if(nilai >= 70){
// //     console.log("selamat kamu lulus");
// // } else{
// //     console.log("kamu harus belajar lagi");
// // }


// if (email == "amaliyahnindi1@gmail.com"){
//     if(pass == "ntah"){
//         console.log("kamu berhasil login");
//     }
// } else{
//     console.log("password salah");
// }  


// switch case

// const warna = hitam;

// switch (warna) {
//     case "hitam";
//         console.log("warna hitam");
//         break;
//     case "putih";
//         console.log("warna putih")
//         break;
//         default:
//         console.log("tidak ada warna pilihan");
//         break;        


var pendapatan = 300000;
var kondisi, jasa, total;

if (pendapatan >= 0 && pendapatan <= 200000){
    jasa = 10000;
    komisi = 0.1* pendapatan;
}
else if(pendapatan <=500000)
{
    jasa = 200000;
    komisi = 0.15* pendapatan;
}
else
{
    jasa = 300000;
    komisi = 0.2;
}
{
    total = komisi + jasa;
    console.log(jasa);
    console.log(komisi);
    console.log(total)
}
