
const api_url = "https://type.fit/api/quotes";

async function getquote(url) {
    try {
        const response = await fetch(url);
        var data = await response.json();
        // console.log(data);

        document.getElementById("qoute").innerText = data.content;
        document.getElementById("author").innerText = data.author;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        document.getElementById("qoute").innerText = "Failed to load quote.";
        document.getElementById("author").innerText = "";
    }
}

function tick() {
    alert("Tick button clicked!");
}
document.addEventListener("DOMContentLoaded", () => {
    getquote(api_url);
});
