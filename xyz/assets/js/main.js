$(document).ready(function(){


var word1 = [
	"ZOOM CALL!",
	"TOILET!",
	"WIRES!",
  "ROOF!",
  "PHONE!",
  "BANDWAGON!"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "CAREFUL",
  "MINDFUL",
  "VIGILANT",
  "SMART",
  "CRITICAL",
  "SILLY"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "EAT.",
  "SAY.",
  "HEAR.",
  "LICK.",
  "SMOKE",
  "SCREAM"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];


$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".word4" ).html(randomWord4);
$( ".word5" ).html(randomWord5);
$( ".word6" ).html(randomWord6);

});