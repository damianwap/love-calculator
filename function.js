


function hitung(){
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let hitung = Math.floor(Math.random() * 100) + 1;

    if (name1 == "" || name2 == "") {
        alert("Nama tidak boleh kosong 😉");
    } else {


        //

        //SAFE VERSION
        if (hitung < 50) {
            document.getElementById("hasil").innerHTML = "Tingkat kecocokan:" + " " + hitung + "%";
            document.getElementById("keterangan").innerHTML = "Tetap semangat! Kamu pasti bisa dapetin doi"
            document.getElementById("footer").style.backgroundColor = "#c21717";
            document.getElementById("quote").innerHTML = "";
        } else {
            document.getElementById("hasil").innerHTML = "Tingkat kecocokan:" + " " + hitung + "%";
            document.getElementById("keterangan").innerHTML = "MANTAPP! Kalau dilanjutkan, bisa sampai tahap serius nih"
            document.getElementById("footer").style.backgroundColor = "#099109";
            document.getElementById("quote").innerHTML = "";

        }
        //END OF SAVE VERSION
    }
}

function reset(){
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("keterangan").innerHTML = "";
    document.getElementById("footer").style.backgroundColor = "hotpink";
    document.getElementById("quote").innerHTML = "<i>There's only one happiness in this life, to <b>love</b> and be <b> loved</b> </i>"
}