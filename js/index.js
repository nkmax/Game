const APP_CONTAINER = document.querySelector('.app'); //вынесем в глобальную переменную(часто используем)

window.application = {//глобальный объект 
    blocks:{},
    screens:{},
    timers: [],

    renderScreen: function(screenName) { //ф-я для отрисовки экрана
        //Сделаем очистку таймеров: ф-я остановит таймеры
        window.application.timers.forEach(id => {
          clearInterval(id);
        });
  
        if(window.application.screens[screenName]){
          APP_CONTAINER.innerHTML = ''; //очистим контейнер перед новой страницей
          window.application.screens[screenName]();// Отрисуем новый экран
        } else {
          console.log(`Экрана "${screenName}" не существует`);
        }
      },
      renderBlock: function(blockName, container) {//ф-я отрисовки блоков
          if(window.application.blocks[blockName]){
              window.application.blocks[blockName](container);
          } else {
            console.log(`Блока "${blockName}" не существует`);
          } 
      },
}