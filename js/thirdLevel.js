function renderThirdLevel(container) {
  const a = document.createElement("div");

  container.appendChild(a);
  window.application.level=(renderThirdLevel);
}
window.application.blocks["thirdLevel"] = renderThirdLevel;

//отрисуем наш экран- выведем, то что выше на экран первой страницы
function renderThirdLevelScreen() {
  const h1 = document.createElement("h1");
  h1.textContent = "Третий уровень";
  h1.classList.add("title");

  const div = document.createElement("div");
  div.classList.add("first");

  window.application.renderBlock("thirdLevel", div);

  APP_CONTAINER.appendChild(h1);
  APP_CONTAINER.appendChild(div);
}

window.application.screens["thirdLevel"] = renderThirdLevelScreen; //Отрисовывает внутри себя блок
