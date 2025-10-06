import "./styles.css";

const containerElements = document.querySelectorAll("div.container");

containerElements.forEach((container) => {
  // Create button to trigger dropdown
  const button = document.createElement("button");
  button.textContent = "Click me!";

  // Create array of menu options
  const menuOptions = [];
  const editOption = document.createElement("button");
  editOption.textContent = "Edit";
  menuOptions.push(editOption);
  const renameOption = document.createElement("button");
  renameOption.textContent = "Rename";
  menuOptions.push(renameOption);
  const deleteOption = document.createElement("button");
  deleteOption.textContent = "Delete";
  menuOptions.push(deleteOption);
});
