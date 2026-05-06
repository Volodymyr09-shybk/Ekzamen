document.getElementById("save").addEventListener("click", function () {

    const title = document.getElementById("title").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const dateInput = document.getElementById("date").value;

    if (title === "" || desc === "" || dateInput === "") return;

    const parts = dateInput.split("-");
    const date = parts[2] + "." + parts[1] + "." + parts[0];

    const output = document.getElementById("output");

    const div = document.createElement("div");
    div.className = "task fade";

    div.innerHTML = `
        <p>Zadanie: ${title}</p>
        <p>Opis: ${desc}</p>
        <p>Data: ${date}</p>
        <hr>
    `;

    output.appendChild(div);

    setTimeout(() => {
        div.classList.add("show");
    }, 10);

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("date").value = "";
});