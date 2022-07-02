const spans = document.getElementsByClassName("editable");
const inputField = document.getElementById("input")
const copyButton = document.getElementById("copy");
const uwuCheck = document.getElementById("uwu");

const normalSection = document.getElementById("normalpasta");
const normalParagraphs = normalSection.childNodes;

const uwuSection = document.getElementById("uwupasta");
const uwuParagraphs = uwuSection.childNodes;

inputField.oninput = function() {
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = this.value;
    }
    document.title = `GNU/${this.value} Copypasta`;
}

copyButton.onclick = function() {
    let text = "";
    if (uwuCheck.checked) {
        for (let i = 0; i < uwuParagraphs.length; i++) {
            text += uwuParagraphs[i].textContent;
            if (i < uwuParagraphs.length - 1) text += "\n\n";
        }
    } else {
        for (let i = 0; i < normalParagraphs.length; i++) {
            text += normalParagraphs[i].textContent;
            if (i < normalParagraphs.length - 1) text += "\n\n";
        }
    }
    navigator.clipboard.writeText(text);
}

uwuCheck.onchange = function() {
    if (this.checked) {
        normalSection.style.visibility = "hidden";
        normalSection.style.position = "absolute";

        uwuSection.style.visibility = "visible";
        uwuSection.style.position = "relative";
    } else {
        normalSection.style.visibility = "visible";
        normalSection.style.position = "relative";

        uwuSection.style.visibility = "hidden";
        uwuSection.style.position = "absolute";
    }
}

inputField.focus();