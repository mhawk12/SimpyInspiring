//get body color and set it to body_color
chrome.storage.sync.get(["body_color"], (result) => {
    let body_color = result.body_color;
    if (body_color !== undefined) {
        document.getElementById("body").className = body_color;
    }
});

//get quote text color and set it to h1_color element
chrome.storage.sync.get(["h1_color"], (result) => {
    let h1_color = result.h1_color;
    if (h1_color !== undefined) {
        document.getElementById("quote").className = h1_color;
    }
});

//set body color to black on selecting black from settings menu
//set quote color to white on selecting black from settings menu
document.getElementById("changeBackgroundColorToBlack").onclick = () => {
    chrome.storage.sync.set({ ["body_color"]: "body_black" });
    chrome.storage.sync.set({ ["h1_color"]: "h1_white" });
    document.getElementById("body").className = "body_black";
    document.getElementById("quote").className = "h1_white";
}

// set body color to white on selecting white from settings menu
//set quote color to black on selecting white form the settings menu
document.getElementById("changeBackgroundColorToWhite").onclick = () => {
    chrome.storage.sync.set({ "body_color": "body_white" });
    chrome.storage.sync.set({ "h1_color": "h1_black" });
    document.getElementById("body").className = "body_white";
    document.getElementById("quote").className = "h1_black";
}

