let userName = prompt("Lütfen adınızı giriniz:");
console.log(userName)
document.getElementById("myName").textContent = `${userName}`;

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

     hours = (hours < 10) ? "0" + hours : hours;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     seconds = (seconds < 10) ? "0" + seconds : seconds;
 
     let time = hours + ":" + minutes + ":" + seconds + " " + days[day];
     document.getElementById("myClock").innerText = time;

     setTimeout(showTime, 1000);
}

showTime();