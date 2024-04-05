let name = prompt("adınızı giriniz")

document.querySelector("#myName").innerHTML=`${name.toUpperCase()}`

var time = new Date();
var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
var dayName = days[time.getDay()]; // Gün ismini al
document.querySelector("#myClock").innerHTML=time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " " +dayName
