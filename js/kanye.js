const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayLoad(data))
    
}
const displayLoad = (quote)=>{
    const blockQuote = document.getElementById('quote')
    blockQuote.innerHTML = quote.quote
}

loadQuote();