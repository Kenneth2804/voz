document.addEventListener('DOMContentLoaded', ()=>{

const startBtn = document.getElementById('start-btn');
const textP = document.getElementById('text');

let speechRecognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
let speechSynthesis = window.speechSynthesis;

startBtn.addEventListener('click', ()=> {
	speechRecognition.start();
})

speechRecognition.onresult = (event) =>{
	const speechToText = event.results[0][0].transcript;
	textP.textContent = `Dijiste: ${speechToText}`
	speakBack(speechToText)
};

function speakBack(text) {
	const speech = new SpeechSynthesisUtterance(`Escuché que dijiste ${text}`);
	speechSynthesis.speak(speech)
}

})