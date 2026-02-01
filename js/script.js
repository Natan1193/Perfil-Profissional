const button = document.createElement("button");
button.textContent = "Mostrar mais";

const about = document.getElementById("aboutMe");
const text = about.querySelector("p");

let expanded = false;

about.appendChild(button);

button.addEventListener("click", () => {
    expanded = !expanded;

    if (expanded) {
        text.textContent += " Estou constantemente estudando e desenvolvendo projetos para evoluir minhas habilidades.";
        button.textContent = "Mostrar menos";
    } else {
        text.textContent = text.textContent.replace(
            " Estou constantemente estudando e desenvolvendo projetos para evoluir minhas habilidades.",
            ""           
        );
        button.textContent = "Mostrar mais";
    }
})