import "./styles.css";
import { createDropdown } from "./dropdownFactory";

// The following logic creates buttons to test the dropdown
const containerElements = document.querySelectorAll("div.container");

containerElements.forEach((container) => {
  // Create button to trigger dropdown
  const button = document.createElement("button");
  button.textContent = "Click me!";

  // Create array of menu options
  const menuOptions = [];
  const editOption = document.createElement("button");
  editOption.textContent = "Edit";
  editOption.classList = "edit";
  menuOptions.push(editOption);
  const renameOption = document.createElement("button");
  renameOption.textContent = "Rename";
  renameOption.classList = "rename";
  menuOptions.push(renameOption);
  const deleteOption = document.createElement("button");
  deleteOption.textContent = "Delete";
  deleteOption.classList = "delete";
  menuOptions.push(deleteOption);

  // Example of creating a dropdown
  const dropdown = createDropdown(button, menuOptions);
  container.appendChild(dropdown);
});

// Change center text each time a menu option is pressed

const centerText = document.querySelector(".text");

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    centerText.textContent = "Edit has been pressed";
  }
  if (event.target.classList.contains("rename")) {
    centerText.textContent = "Rename has been pressed";
  }
  if (event.target.classList.contains("delete")) {
    centerText.textContent = "Delete has been pressed";
  }
});
