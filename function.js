function hitung(){
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let hitung = Math.floor(Math.random() * 100) + 1;
    if (name1 == "" || name2 == "") {
        alert("Nama tidak boleh kosong");
    } else {
        if (hitung < 50) {
            document.getElementById("hasil").innerHTML = "Tingkat kecocokan:" + " " + hitung + "%";
            document.getElementById("keterangan").innerHTML = "Tetap semangat! Kamu pasti bisa dapetin doi"
        } else {
            document.getElementById("hasil").innerHTML = "Tingkat kecocokan:" + " " + hitung + "%";
            document.getElementById("keterangan").innerHTML = "MANTAPP! Kalau dilanjutkan, bisa sampai tahap serius nih"
        }
    }
}