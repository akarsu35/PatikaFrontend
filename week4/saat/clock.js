let name = prompt("adınızı giriniz")

document.querySelector("#myName").innerHTML=`${name.toUpperCase()}`

// var time = new Date();
// var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
// var dayName = days[time.getDay()]; // Gün ismini al
// document.querySelector("#myClock").innerHTML=time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " " +dayName


function showTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDay();
    
    // Saati ayarla
    hour = hour < 10 ? "0" + hour : hour;
    // Dakikayı ayarla
    minute = minute < 10 ? "0" + minute : minute;
    // Saniyeyi ayarla
    second = second < 10 ? "0" + second : second;
    
    // Günleri diziye dönüştür
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    // Gün adını al
    let dayName = days[day];
    
    let time = hour + ":" + minute + ":" + second + " " + dayName;
    
    document.getElementById("myClock").innerText = time;
    
    setTimeout(showTime, 1000); // Her saniye güncelle
  }
  
  // Sayfa yüklendiğinde saat gösterimi
  window.onload = showTime;