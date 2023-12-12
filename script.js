    const quote = document.getElementById('quote')
    const author = document.getElementById('author')
    const api_url = 'https://api.quotable.io/random';

    async function getQuote(url){
        const response = await fetch(url);
        var data = await response.json();

        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    }
    
    getQuote(api_url)

    function tweet(){
        window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + "  __  by  " + author.innerHTML, "Tweet Window", "width=700, height=300")
    };

    // copy Function


    function copyQuote() {
        const textToCopy = quote.textContent || quote.innerText;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text successfully copied to clipboard');
            })
            .catch(err => {
                console.error('Unable to copy text to clipboard', err);
            });
    }


    //  Sound Function 


   function listenQuote() {
    const speech = new SpeechSynthesisUtterance();
    const textToRead = quote.textContent || quote.innerText;

    speech.text = textToRead;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1; // Adjust pitch to make it deeper if needed

    window.speechSynthesis.speak(speech);

    // Optionally, you can log a message when the speech starts
    console.log('Reading quote aloud:', textToRead);
}