document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").onsubmit = e => {
        e.preventDefault();
        
        const dateInput = document.querySelector("#date").value;
        const descriptionInput = document.querySelector("#description").value;

        if(dateInput !== "" && descriptionInput !== "") {
            const dataDiv = document.createElement("div");
            dataDiv.setAttribute("id", "data");
            dataDiv.classList.add("mt-16", "mb-8", "bg-white");
            
            const dateP = document.createElement("p");
            dateP.textContent = `Date : ${dateInput}`;
            dateP.classList.add("mt-4");
            
            const descriptionP = document.createElement("p");
            descriptionP.textContent = `Description : ${descriptionInput}`;
            descriptionP.classList.add("mb-4");
            
            const br = document.createElement("br");

            const validateButton = document.createElement("button");
            validateButton.classList.add("px-4", "py-2", "rounded-lg", "bg-green-600", "text-white", "font-semibold", "hover:bg-green-800", "hover:cursor-pointer", "active:bg-green-900", "shadow-xl")
            validateButton.textContent = "Check";

            const vButtonDiv = document.createElement("div");
            vButtonDiv.classList.add("flex", "justify-center");

            document.querySelector("#forAppend").appendChild(dataDiv);
            dataDiv.appendChild(dateP);
            dataDiv.appendChild(br);
            dataDiv.appendChild(descriptionP);
            dataDiv.appendChild(vButtonDiv);
            vButtonDiv.appendChild(validateButton);

            validateButton.onclick = () => {
                const parentDiv = dateP.parentElement;

                dateP.classList.add("line-through");
                descriptionP.classList.add("line-through");
                parentDiv.classList.add("opacity-50");
                validateButton.classList.add("hidden");
            }
        } else {
            console.error("Veuillez remplir tout les champs.");
        }
    }
})
