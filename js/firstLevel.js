function renderFirstLevel(container) {
  const a = document.createElement("div");

  container.appendChild(a);
  window.application.level=(renderFirstLevel);
}
window.application.blocks["firstLevel"] = renderFirstLevel;

//отрисуем наш экран- выведем, то что выше на экран 
function renderFirstLevelScreen() {
  const h1 = document.createElement("h1");
  h1.textContent = "первый уровень";
  h1.classList.add("title");

  const div = document.createElement("div");
  div.classList.add("first");

  window.application.renderBlock("firstLevel", div);

  APP_CONTAINER.appendChild(h1);
  APP_CONTAINER.appendChild(div);
}

window.application.screens["firstLevel"] = renderFirstLevelScreen; //Отрисовывает внутри себя блок
