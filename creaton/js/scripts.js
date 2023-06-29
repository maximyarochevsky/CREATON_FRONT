window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  document.querySelectorAll('.my-class').forEach((elem) => {
    elem.onmouseenter = elem.onmouseleave = (e) => {
          const tolerance = 10;
      const left = 0;
      const right = elem.clientWidth;
      let x = e.pageX - elem.offsetLeft;
      if (x - tolerance < left) x = left;
      if (x + tolerance > right) x = right;
      elem.style.setProperty('--x', `${ x }px`);
    }
  });

  function openTab(tabNumber) {
    // Скрыть все блоки с контентом вкладок
    var tabContents = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }

    // Удалить класс "active" у всех вкладок
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }

    // Отобразить выбранный блок с контентом вкладки
    var selectedTabContent = document.getElementById("tab" + tabNumber);
    selectedTabContent.style.display = "block";

    // Добавить класс "active" к выбранной вкладке
    var selectedTab = document.getElementsByClassName("tab")[tabNumber - 1];
    selectedTab.classList.add("active");
  }

  window.addEventListener("DOMContentLoaded", function() {
    // Установить первую вкладку активной и отобразить соответствующий контент
    var firstTab = document.getElementsByClassName("tab")[0];
    firstTab.classList.add("active");
    var firstTabContent = document.getElementById("tab1");
    firstTabContent.style.display = "block";
  });