



document.addEventListener("DOMContentLoaded", function() {
  
    const selectField = document.getElementById("selectField");
    const selectText = document.getElementById("selectText");
    const list = document.getElementById("list");
    const arrowIcon = document.getElementById("arrowIcon");
    const options = document.querySelectorAll(".options");

    selectField.addEventListener("click", function() {
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            const text = this.querySelector("p").textContent;
            selectText.textContent = text;

   
            list.classList.add("hide");
            arrowIcon.classList.remove("rotate");
        });
    });

    document.addEventListener("click", function(event) {
        if (!selectField.contains(event.target)) {
            list.classList.add("hide");
            arrowIcon.classList.remove("rotate");
        }
    });
});

