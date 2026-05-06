 document.getElementById("save").addEventListener("click", function () {
    const title = document.getElementById("title").value.trim();
    const desc = document.getElementById("desc").value.trim();

    if (title === "" || desc === "") return;

    const now = new Date();
    const date = now.toLocaleDateString("pl-PL");

    document.getElementById("output").innerHTML = `
        <p>Opish zadanie: ${title}</p>
        <p>Data: ${date}</p>
    `;
});