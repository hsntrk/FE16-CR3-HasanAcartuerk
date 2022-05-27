var morVeÖtesi = 140;
var duman = 20;
var gripin = 249;

var kurban = 140;
var sebnemFerah = 20;
var aylinAslim = 249;

var manga = 140;
var aydilge = 20;
var cilekes = 249;

var fest_day_1 = morVeÖtesi + kurban + manga;
var fest_day_2 = duman + sebnemFerah + aydilge;
var fest_day_3 = gripin + aylinAslim + cilekes;

{ 
    let morVeÖtesi = "Mor ve Ötesi";
    let kurban = "Kurban";
    let manga = "Manga";

    // First Sentence
    console.log ("On the first day of the festival, I was lucky to watch bands " + morVeÖtesi +", " +kurban + " "+ "and " + manga +".");

    let duman = "Duman";
    let sebnemFerah = "Sebnem Ferah";
    let aydilge = "Aydilge";

    // Second Sentence
    console.log ("Then I watched the bands " + duman +", " +sebnemFerah + " "+ "and " + aydilge + " on the second day and it cost me " + fest_day_2 +" $ in total that day.");

    let gripin = "Gripin";
    let aylinAslim = "Aylin Aslim";
    let cilekes = "Cilekes";

    // Third Sentence
    console.log ("I was a bit tired on the third day but it was so much worth it to watch the bands " + gripin +", " +aylinAslim + " "+ "and " + cilekes + " and i spent " + fest_day_3 +" $ for the three days of the festival.");
}

var totalCost = fest_day_1 + fest_day_2 + fest_day_3
// 30 % discount of Total Cost 
var discount = totalCost * 0.3

// Fourth Sentence
console.log ("If I had booked the concert with enough time in advance, it would have cost me a total of " + totalCost +" $ " + "and I would have saved " + Math.round(discount) + " $ .");


