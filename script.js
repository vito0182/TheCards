var cont = 0;
var text = String("your text goes here");
var textAr = text.split(" ");

var card2 = document.getElementById("card2");

document.querySelectorAll(".card__inner").forEach(card => {
  card.addEventListener("click", function () {
    card.classList.toggle('flip');
    displayText();
    cont++;
  });
});

function displayText(){
  if (cont > textAr.length - 1) {
    cont = 1;
  }
  if (cont % 2 != 0) {
    document.getElementById("text_front").innerHTML = textAr[cont];
  } else {
    document.getElementById("text_back").innerHTML = textAr[cont];
  }
}



  
