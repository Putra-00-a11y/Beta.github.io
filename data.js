console.log(`Halo Putra!`);
let Inject = document.getElementById("dataInject");
let button = document.getElementById("buttonLaunch");
let button1 = document.getElementById("buttonSure");
let button2 = document.getElementById("buttonBack");
let button3 = document.getElementById("buttonNope");

console.log(Inject.value);
localStorage.setItem("Data", Inject.value);
window.location.assign = "Submit.html";
window.location.assign = "Injects.html";
window.location.assign = "nopeTrue";

function buttonInject() {
    if (Inject.value) {
        console.log(`Injections Ready..`);
        console.log(`The Input Is : `, Inject.value);
        localStorage.setItem("Data", Inject.value);
    }
    else {
        console.log(`The Input ?`);
        return alert(`FILL THE INPUT!`);
    }

    if (localStorage.getItem("Data") == Inject.value) {
        console.log(`Injections Coming!`);
        alert(`Are U Sure?..`);
        window.location.href = "Submit.html";
    }
    else {
        console.log(`Nothing To Inject..`);
    }
};

function buttonBackI() {
    console.log(`Injections Fail..`);
    alert(`Anda Kembali... Data Anda Aman!`);
    window.location.href = "Injects.html";
};

function buttonSureI() {
    console.log(`InjectS Complete..`);
    alert(`Data Anda Proses Retas sekarang!!`);
    window.location.href = "nopeTrue.html";
};

function buttonNope0() {
    console.log(`Back To Menu..`);
    alert(`:]`);
    window.location.href = "Injects.html";
};