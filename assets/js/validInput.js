// Select Elements
const nameInput = document.querySelector("#nome");

const emailInput = document.querySelector("#email");
const labelEmail = document.querySelector("#labelEmail");

const textarea = document.querySelector("#mensagem");
const labelTextarea = document.querySelector("#labelTextarea");

// Function
const validInputLabel = (elValue, label) => {
  if (label === labelEmail) {
    if (elValue !== "") {
      label.classList.add("animeInputLabel");
    } else {
      label.classList.remove("animeInputLabel");
    }
  } else {
    if (elValue !== "") {
      label.classList.add("animeInputLabelTextarea");
    } else {
      label.classList.remove("animeInputLabelTextarea");
    }
  }
};

const validNumbersInput = (text) => {
  return text.replace(/[^\D]/g, "");
};

// Event at function
emailInput.addEventListener("input", () => {
  validInputLabel(emailInput.value, labelEmail);
});

textarea.addEventListener("input", () => {
  validInputLabel(textarea.value, labelTextarea);
});

nameInput.addEventListener("input", () => {
  let newNameInput = validNumbersInput(nameInput.value);
  nameInput.value = newNameInput;
});
