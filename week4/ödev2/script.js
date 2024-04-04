// Tüm butonları alıyoruz
const buttons = document.querySelectorAll('.btn');

// Her bir buton için tıklama olayını dinliyoruz
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // İlgili ses dosyasını alıyoruz
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        // Ses dosyasını çal
        audio.play();
    });
});

document.addEventListener('keydown', function(event) {
    // Basılan tuşun değerini al
    const key = event.key.toUpperCase();
    
    // Tuşa karşılık gelen ses dosyasının ID'sini bul
    const audioId = "audio" + key;

    // İlgili ses dosyasını al
    const audio = document.getElementById(audioId);
    
    // Eğer ilgili ses dosyası varsa, çal
    if (audio) {
        audio.currentTime = 0; // Ses dosyasını başa al
        audio.play();
    }
});