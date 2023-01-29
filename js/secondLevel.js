function renderSecondLevel(container) {
  const a = document.createElement("div");

  container.appendChild(a);
  window.application.level=(renderSecondLevel);
}
window.application.blocks["secondLevel"] = renderSecondLevel;

//отрисуем наш экран- выведем, то что выше на экран первой страницы
function renderSecondLevelScreen() {
  const h1 = document.createElement("h1");
  h1.textContent = "Второй уровень";
  h1.classList.add("title");

  const div = document.createElement("div");
  div.classList.add("first");

  window.application.renderBlock("secondLevel", div);

  APP_CONTAINER.appendChild(h1);
  APP_CONTAINER.appendChild(div);
}

window.application.screens["secondLevel"] = renderSecondLevelScreen; //Отрисовывает внутри себя блок
