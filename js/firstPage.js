function renderFirstBlock(container) {
  const selectBtn = document.createElement("div");
  selectBtn.setAttribute("id", "selected");
  selectBtn.classList.add("selectBtn");

  //радиокнопки:
  const label1 = document.createElement("label");
  label1.setAttribute("for", "radio1");
  label1.textContent = "1";
  label1.classList.add("btn", "btn1");
  selectBtn.appendChild(label1);
  const level1 = document.createElement("input");
  level1.setAttribute("type", "radio");
  level1.setAttribute("name", "level");
  level1.setAttribute("id", "radio1");
  level1.classList.add("radio-button");
  label1.appendChild(level1);

  const label2 = document.createElement("label");
  label2.setAttribute("for", "radio2");
  label2.textContent = "2";
  label2.classList.add("btn", "btn1");
  selectBtn.appendChild(label2);
  const level2 = document.createElement("input");
  level2.setAttribute("type", "radio");
  level2.setAttribute("name", "level");
  level2.setAttribute("id", "radio2");
  level2.classList.add("radio-button");
  label2.appendChild(level2);

  const label3 = document.createElement("label");
  label3.setAttribute("for", "radio3");
  label3.textContent = "3";
  label3.classList.add("btn", "btn1");
  selectBtn.appendChild(label3);
  const level3 = document.createElement("input");
  level3.setAttribute("type", "radio");
  level3.setAttribute("name", "level");
  level3.setAttribute("id", "radio3");
  level3.classList.add("radio-button");
  label3.appendChild(level3);

  const btnStart = document.createElement("button");
  btnStart.textContent = "Start";
  btnStart.classList.add("btn-green", "btn-start");


  btnStart.addEventListener("click", (event) => {
    event.preventDefault();
    const selected = document.querySelectorAll(".radio-button");
    selected.forEach(i => {
        switch (true) {
                  case level1.checked:
                    console.log("Экран игры. 1 уровень");
                    break;
                  case level2.checked:
                    console.log("Экран игры. 2 уровень");
                    break;
                  case level3.checked:
                    console.log("Экран игры. 3 уровень");
                    break;
                  default:
                    console.log("выбор не сделан");
                    break;
                }
    });
});
  container.appendChild(selectBtn);
  container.appendChild(btnStart);
}
window.application.blocks["firstPage"] = renderFirstBlock;





//отрисуем наш экран- выведем, то что выше на экран первой страницы
function renderFirstScreen() {
  const h1 = document.createElement("h1");
  h1.textContent = "Выбери сложность";
  h1.classList.add("title");

  const div = document.createElement("div");
  div.classList.add("first");

  window.application.renderBlock("firstPage", div);

  APP_CONTAINER.appendChild(h1);
  APP_CONTAINER.appendChild(div);
}

window.application.screens["firstPage"] = renderFirstScreen; //Отрисовывает внутри себя блок авторизации
window.application.renderScreen("firstPage");
