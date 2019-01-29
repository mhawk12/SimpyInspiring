import * as quotes from '/quotes/quotes.js';

const quotesArray = quotes.getQuotes();
const quoteNo = Math.floor(Math.random() * quotesArray.length); //gives an integer between 0 and quotesArray(exclusive)
document.getElementById('quote_text').innerText = quotesArray[quoteNo].text;
document.getElementById('quote_from').innerText = ' - ' + quotesArray[quoteNo].from;

//get body color and set it to body_color
chrome.storage.sync.get('body_color', (result) => {
    let body_color = result.body_color;
    if (body_color !== undefined) {
        document.getElementById('body').className = body_color;
    }
});

//get quote text color and set it to quote_color element
chrome.storage.sync.get('quote_color', (result) => {
    let quote_color = result.quote_color;
    if (quote_color !== undefined) {
        document.getElementById('quote').className = quote_color;
    }
});

//set body color to black on selecting black from settings menu
//set quote color to white on selecting black from settings menu
document.getElementById('changeBackgroundColorToBlack').onclick = () => {
    chrome.storage.sync.set({ 'body_color': 'body_black' });
    chrome.storage.sync.set({ 'quote_color': 'quote_white' });
    document.getElementById('body').className = 'body_black';
    document.getElementById('quote').className = 'quote_white';
}

// set body color to white on selecting white from settings menu
//set quote color to black on selecting white form the settings menu
document.getElementById('changeBackgroundColorToWhite').onclick = () => {
    chrome.storage.sync.set({ 'body_color': 'body_white' });
    chrome.storage.sync.set({ 'quote_color': 'quote_black' });
    document.getElementById('body').className = 'body_white';
    document.getElementById('quote').className = 'quote_black';
}

