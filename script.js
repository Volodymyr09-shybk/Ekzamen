document.getElementById("save").addEventListener("click", function () {
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("desc");

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === "" || desc === "") return;

    const now = new Date();
    const date = now.toLocaleDateString("pl-PL");

    const task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <p><strong>Zadanie:</strong> ${title}</p>
        <p>${desc}</p>
        <p><strong>Data:</strong> ${date}</p>
    `;

    document.getElementById("output").appendChild(task);

    // очищення форми
    titleInput.value = "";
    descInput.value = "";
});