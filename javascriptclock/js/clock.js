
let userName = prompt("Adınız nedir?");

let myName = document.querySelector("#myName");

let myClock = document.querySelector("#myClock");

myName.innerHTML = userName; //Kullanıcı adını ekranda yazdırdık..

// Saat kısmı.

function showTime() {
    
    let date = new Date();   

    let hour = date.getHours();

    let min = date.getMinutes()

    let second = date.getSeconds();
    myClock.innerHTML =`${hour}:${min}:${second}`;
    // Burada saniye başına yenileme ekledim.
    let time;   
    time = setInterval('showTime()',1);
}

showTime();