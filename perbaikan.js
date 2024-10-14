var jmlkelas = 7;
var kelasBerfungsi = 4;
var noKelas = 1;

for (noKelas; noKelas <= jmlkelas; noKelas++){
    if (noKelas < kelasBerfungsi) {
        console.log (`Speaker di kelas ${noKelas} berfungsi dengan baik`);
    } else if (noKelas == kelasBerfungsi) {
        console.log(`Speaker di kelas ${noKelas} Sedang dalam perbaikan`);
    } else {
        console.log(`speaker di kelas ${noKelas} belum berfungsi dengan baik`)
    }
}