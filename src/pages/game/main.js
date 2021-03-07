onload = function(){
    var parent = document.getElementById("shuffle");
    var frag = document.createDocumentFragment();
    var rand = document.getElementById("rnum");
    var btnSend = document.getElementById("btnSend");
    var operator = document.getElementById("operator");

    voices.forEach(voice => {
      if (voice.lang == "pt-BR") {
        speakText.voice = voice;
      }
    });
    speakText.rate = 1;
    speakText.pitch = 1;

    if(operation == 0){
      rand.value = Math.floor(9* Math.random()+1);
      btnSend.setAttribute('onclick', 'addition()');
      operator.src="../../../assets/plus.svg";
      speakText.text = "Coloque dois números que somados dão" + rand.value;
      speechSynthesis.speak(speakText);
    } else if(operation == 1){
      rand.value = Math.floor(9* Math.random());
      btnSend.setAttribute('onclick', 'subtraction()');
      operator.setAttribute('src', '../../../assets/minus.svg');
      speakText.text = "Coloque dois números que subtraídos dão" + rand.value;
      speechSynthesis.speak(speakText);

    }

    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

var operation = Math.floor(2* Math.random());
const speakText = new SpeechSynthesisUtterance();

let voices = [];

const getVoices = () => {
  voices = speechSynthesis.getVoices();
};

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = getVoices;
}

function addition(){
	var s1 = document.getElementById("fnum").value;
 	var s2 = document.getElementById("snum").value;
  var s3 = parseInt(s1) + parseInt(s2);
  var s4 = document.getElementById("rnum").value;
  
  var preText = "O resultado de ";
 if (s3 == s4) {
  preText = preText.concat(s1, " mais ", s2, " é igual a ", s4, ". Parabéns!");
  speakText.text = preText;
  speechSynthesis.speak(speakText);
  setTimeout(reload, 5000);
} else {
  preText = preText.concat(s1, " mais ", s2, " não é igual a ", s4, ". Tente novamente!");
  speakText.text = preText;
  speechSynthesis.speak(speakText);
}
}

function reload(){
  location.reload();
}

function subtraction(){
	var s1 = document.getElementById("fnum").value;
 	var s2 = document.getElementById("snum").value;
  var s3 = Math.abs(parseInt(s1) - parseInt(s2));
  var s4 = document.getElementById("rnum").value;
  
  var preText = "O resultado de ";
 if (s3 == s4) {
  preText = preText.concat(s1, " menos ", s2, " é igual a ", s4, ". Parabéns!");
  speakText.text = preText;
  speechSynthesis.speak(speakText);
  setTimeout(reload, 5000);
} else {
  preText = preText.concat(s1, " menos ", s2, " não é igual a ", s4, ". Tente novamente!");
  speakText.text = preText;
  speechSynthesis.speak(speakText);
}
}

function erase(t) {
		document.getElementById(t).value = "";
}

function add_value(value) {

	if(document.getElementById("fnum").value == ""){
      document.getElementById("fnum").value = value;
      if(operation == 0){
      var preText = value + " mais";
      } else if(operation == 1){
      var preText = value + " menos";
      }
      speakText.text = preText;
      speechSynthesis.speak(speakText);
    } else if (document.getElementById("snum").value == "") {
      document.getElementById("snum").value = value;
      speakText.text = value;
      speechSynthesis.speak(speakText);
    }
}