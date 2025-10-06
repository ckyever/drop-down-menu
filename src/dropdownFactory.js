import "./dropdown_style.css";

export const createDropdown = (button, optionButtons) => {
  const dropdown = document.createElement("div");
  const menu = document.createElement("ul");
  menu.classList = "dropdown-menu hidden";

  for (const option of optionButtons) {
    const listItem = document.createElement("li");
    listItem.classList = "menu-option";
    listItem.appendChild(option);
    menu.appendChild(listItem);
  }

  dropdown.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-button")) {
      const dropdownMenu =
        event.currentTarget.querySelector("ul.dropdown-menu");
      console.log(dropdownMenu);
      dropdownMenu.classList.toggle("hidden");
    }
  });

  button.classList.add("dropdown-button");
  dropdown.appendChild(button);
  dropdown.appendChild(menu);

  return dropdown;
};
