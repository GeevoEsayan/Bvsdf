// при клике по кнопке скрипт запустит код
button.onclick = function () {
    // если фон кнопки чёрный
    if (button.style.backgroundColor == 'black') {
      // изменим его на белый, а текст сделаем чёрным
      button.style.backgroundColor = 'white';
      button.style.color = 'black';
    } else {
      button.style.backgroundColor = 'black';
      button.style.color = 'white';
      // иначе сделаем фон чёрным, а текст белым
    }
  }