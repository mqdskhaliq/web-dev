// let notesContainer = document.querySelector("notes-container");
// let createBtn = document.querySelector(".btn");

// let notes = document.querySelectorAll(".input-box");

// createBtn = addEventListener("click", () => {
//   let inputBox = document.createElement("p");
//   let img = document.createElement("img");
//   inputBox.className = "input-box";
//   inputBox.setAttribute("contenteditable","true");
//   img.src = "images/delete.png ";
//   notesContainer.appendChild(inputBox);
// });

let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  let img = document.createElement("img");
  img.src = "images/delete.png";
  img.alt = "Delete";

  inputBox.appendChild(img); // Append img to inputBox if that's your intention
  notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.exeCommand("insertLineBreak");
    event.preventDefault();
  }
});
