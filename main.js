SpeechRecognition = window.webkitSpeechRecognition
recognition = new SpeechRecognition()

function start()
{
    document.getElementById("speech").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event) 
{
    console.log(event)
    var Content = event.result[0][0].transcript
    console.log(Content)
    document.getElementById("speech").innerHTML = Content
}