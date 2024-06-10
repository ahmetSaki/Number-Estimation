var x;
var tahminNum = 10;
var userInputNumber = []


function computerNumberBtn() {
    var gameArea = document.getElementById('gameArea');
    var computer = document.getElementById('computer');
    var computerNumber = document.getElementById("computerNumber").value;

    // Rastgele sayıyı bu adımda oluştur
    x = Math.floor(Math.random() * computerNumber) + 1; // Kontrol için

    gameArea.style.display = "block";
    computer.style.display = "none";
    document.getElementById("computerNumber").value = '';
}


function gameBtn() {
    var container = document.getElementById("container")
    
    var box = document.getElementById("box")
    
    var userInput = document.getElementById("userInput").value;

    // Girilen sayıyı userInputNumber dizisine ekle
    
    userInputNumber.push(parseInt(userInput))

    console.log(userInputNumber)


if (tahminNum == 0) {
    document.querySelector('button').disabled = true
    mesaj = 'Bilgisayarin Tuttuğu Sayi : ' + x ; 
    container.textContent = mesaj
    
}

else
{
    if (userInput === '') {
        mesaj = 'Lütfen Boş Bırakmayınız'
        container.textContent = mesaj
        return;
        userInput.value = ''

    }

    if (userInput > x ) {
        mesaj = 'Daha KÜÇÜK Değer Deneyin'
        container.textContent = mesaj

    }
    else if (x > userInput ) {
        mesaj = 'Daha BÜYÜK Değer Deneyin'
        container.textContent = mesaj


    }
     else {
        mesaj = 'TEBRİKLER BİLDİNİZ'
        container.innerText = mesaj
        document.querySelector('button').disabled = true;
        

    }  

}
    



    if (parseInt(userInput) === x) {
        // var userInputTrue = 'Tahmininiz Doğru'
        // container.textContent = userInputTrue;

        x = Math.floor(Math.random() * computerNumber) + 1;
        // container.textContent = x

        console.log(true)
    
    } else {

        // var userInputFalse = 'Tahmininiz Yanlış'
        // container.textContent = userInputFalse;
        console.log(false)
        var tahminİnfo = 'Kalan Tahmin Sayisi : ' + tahminNum--
        box.innerText = tahminİnfo
    }

    document.getElementById("userInput").value = ''

}

function newGameBtn() {
    console.clear() // console temizler
     
    var computerNumber = document.getElementById("computerNumber").value

    x = Math.floor(Math.random() * computerNumber) + 1; // 1 ile 10 arasında rastgele bir sayı üretir
    tahminNum = 10
    userInputNumber = []

    
    var gameArea = document.getElementById('gameArea')
    var computer = document.getElementById('computer')
    gameArea.style.display = "none";
    computer.style.display = "block"; 

    var container = document.getElementById("container");
    container.textContent = '';
    
    var box = document.getElementById("box");
    box.textContent = '';
    
    // Kullanıcının girdiği sayıyı sıfırla
    document.getElementById("userInput").value = '';
    
    document.querySelector('button').disabled = false;
  }