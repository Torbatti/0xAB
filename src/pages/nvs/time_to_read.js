const footnote = document.querySelector("#footnote-label");
if (footnote != null){
    footnote.innerHTML = "پانویسه ها";
}

function readingTime() {
    const text = document.getElementById("content").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("zaman-khandan").innerText = time <= 10 ? "کمتر از ۱۰" :time.toString();
}
readingTime();
