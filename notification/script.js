let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fas fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fas fa-circle-xmark"></i> Please fix the error!';
let invalidMsg =
  '<i class="fas fa-circle-exclamation"></i> Invalid input, check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }

  toastBox.appendChild(toast);
}
