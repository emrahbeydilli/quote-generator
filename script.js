const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn= document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


let apiQuotes = [];

// Show New Quote
const newQuote = () => {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    // Check if Author filed is blank and replace it with unknown
    if (!quote.author) {
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = quote.author;
    }
    // Check quote lenght to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get Quotes From API
const getQuotes = async () => {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
    }
}

// Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listener
newQuoteBtn.addEventListener("click",newQuote);
twitterBtn.addEventListener("click",tweetQuote);


// On Load
window.addEventListener("load",getQuotes);