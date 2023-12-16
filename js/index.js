
function randomQuotes() {
    var authorName = [" ― Mae West " 
    , " ― Albert Einstein " 
    , " ― Pablo Picasso " 
    , " ― Che Guevarra "];

var authorQuote = [" “You only live once, but if you do it right, once is enough.” " 
, " “Life is like riding a bicycle. To keep your balance, you must keep moving.” " 
, " “Everything you can imagine is real.” " 
, " “I don't care if I fall as long as someone else picks up my gun and keeps on shooting.” "];

var num = Math.floor( Math.random() * authorName.length );

var quoteRandom = document.getElementById("quoteRandom").innerHTML = authorQuote[num];
var authorOf = document.getElementById("authorOf").innerHTML = authorName[num];
}

