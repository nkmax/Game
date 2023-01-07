function renderFirstBlock(container) {
    const selectBtn = document.createElement('div');
    selectBtn.classList.add('selectBtn');
    
    const button1 = document.createElement('button');
    button1.textContent = '1';
    button1.classList.add('btn','btn1');
    selectBtn.appendChild(button1);

    const button2 = document.createElement('button');
    button2.textContent = '2';
    button2.classList.add('btn','btn2');
    selectBtn.appendChild(button2);

    const button3 = document.createElement('button');
    button3.textContent = '3';
    button3.classList.add('btn','btn3');
    selectBtn.appendChild(button3);

    const btnStart = document.createElement('button');
    btnStart.textContent = 'Start';
    btnStart.classList.add('btn-green', 'btn-start');

    container.appendChild(selectBtn);
    container.appendChild(btnStart);
}
window.application.blocks['firstPage'] = renderFirstBlock; 




//отрисуем наш экран- выведем, то что выше на экран первой страницы
function renderFirstScreen() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Выбери сложность';
    h1.classList.add('title');

    const div = document.createElement('div');
    div.classList.add('first');

    window.application.renderBlock('firstPage', div);

    APP_CONTAINER.appendChild(h1);
    APP_CONTAINER.appendChild(div);
}

window.application.screens['firstPage'] = renderFirstScreen;//Отрисовывает внутри себя блок авторизации
window.application.renderScreen('firstPage');
