const spans = document.getElementsByClassName("editable");
const inputField = document.getElementById("input")
const copyButton = document.getElementById("copy");
const paragraphs = document.getElementsByTagName("p");

inputField.oninput = function() {
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = this.value;
    }
    document.title = `GNU/${this.value} Copypasta`;
}

copyButton.onclick = function() {
    let text = "";
    for (let i = 0; i < paragraphs.length; i++) {
        text += paragraphs[i].textContent;
        if (i < paragraphs.length - 1) text += "\n\n";
    }
    navigator.clipboard.writeText(text);
}
