document.getElementById("save").addEventListener("click", function () {

    const title = document.getElementById("title").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const dateInput = document.getElementById("date").value;

    if (title === "" || desc === "" || dateInput === "") return;

    const parts = dateInput.split("-");
    const date = parts[2] + "." + parts[1] + "." + parts[0];

    document.getElementById("output").innerHTML = `
        <p>Zadanie: ${title}</p>
        <p>Opis: ${desc}</p>
        <p>Data: ${date}</p>
    `;
});