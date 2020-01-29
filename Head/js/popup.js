document.addEventListener('DOMContentLoaded', function () {
  /*----------------------- ПОЯВЛЕНИЕ ОКОНА С ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИЕЙ ПРИ НАВЕДЕНИ НА ЧАСТЬ КАРТЫ -----------------------*/

  const hoverOneMap = document.querySelector('.hover-rivne-region'),
    showPopupOne = document.querySelector('.map-popup_rivne-region');

  const hoverTwoMap = document.querySelector('.hover-kiev-region'),
    showPopupTwo = document.querySelector('.map-popup_kiev-region');

  const hoverThreeMap = document.querySelector('.hover-chernihiv-region'),
    showPopupThree = document.querySelector('.map-popup_chernihiv-region');

  const hoverFourMap = document.querySelector('.hover-ternopil-region'),
    showPopupFour = document.querySelector('.map-popup_ternopil-region');

  const hoverFiveMap = document.querySelector('.hover-kharkiv-region'),
    showPopupFive = document.querySelector('.map-popup_kharkiv-region');

  const hoverSixMap = document.querySelector('.hover-ivano-frankivsk'),
    showPopupSix = document.querySelector('.map-popup_ivano-frankivsk');

  const hoverSevenMap = document.querySelector('.hover-vinnytsia-region'),
    showPopupSeven = document.querySelector('.map-popup_vinnytsia-region');

  const hoverEightMap = document.querySelector('.hover-dnipropetrovsk-region'),
    showPopupEight = document.querySelector('.map-popup_dnipropetrovsk-region');

  const hoverNineMap = document.querySelector('.hover-odessa-region'),
    showPopupNine = document.querySelector('.map-popup_odessa-region');

  const hoverTenMap = document.querySelector('.hover-kherson-region'),
    showPopupTen = document.querySelector('.map-popup_kherson-region');

  const hoverElevenMap = document.querySelector('.hover-zaporozhye-region'),
    showPopupEleven = document.querySelector('.map-popup_zaporozhye-region');


  function hoverMap(area, popup) {
    area.addEventListener('mousemove', () => {
      popup.classList.add('show');
    });
    area.addEventListener('mouseout', () => {
      popup.classList.remove('show');
    });
  }
  hoverMap(hoverOneMap, showPopupOne);
  hoverMap(hoverTwoMap, showPopupTwo);
  hoverMap(hoverThreeMap, showPopupThree);
  hoverMap(hoverFourMap, showPopupFour);
  hoverMap(hoverFiveMap, showPopupFive);
  hoverMap(hoverSixMap, showPopupSix);
  hoverMap(hoverSevenMap, showPopupSeven);
  hoverMap(hoverEightMap, showPopupEight);
  hoverMap(hoverNineMap, showPopupNine);
  hoverMap(hoverTenMap, showPopupTen);
  hoverMap(hoverElevenMap, showPopupEleven);

  function hoverHandler(e) {
    this.querySelectorAll('.hover-opacity').forEach(n => {
      n.classList.toggle('hover', n !== e.target && this !== e.target);
    });
  }
  const map = document.querySelector('.status__map svg');
  map.addEventListener('mouseover', hoverHandler);
  map.addEventListener('mouseout', hoverHandler);




  /* -------------------------------ДРУГАЯ ВЕРСИЯ КОДА-OPACITY-------------------------------------- */

  //создаем переменные, перавя из которых - это блок, в которую вся карта завёрнута
  // let map = document.querySelector('.status__map');
  // //а вторая переменная - это классы, добавленные к каждому участку карты
  // let hover = document.querySelectorAll('.hover-opacity');


  // //создаётся функция для будущего переиспользования, куда передаём два аргумента. 
  // //Первая - это родитель, то есть вся блок в которую карта завёрнута. А второй аргумени эффект при наведении
  // function hoverMap(findingParent, hoverEffects) {
  //     //при наведении на блок с картой внутри, будет вешаться событие
  //     findingParent.addEventListener('mousemove', (event) => {
  //         //исходя из которого запускается цикл и перебираем все элементы внутри, так как без него работать не будет (можно было бы воспользоваться и перебирающим методом forEach(), но так проще)
  //         for (let i = 0; i < hoverEffects.length; i++) {
  //             //после чего у всех элементом понижается видимость opacity
  //             hoverEffects[i].style.opacity = '0.7';
  //         }
  //         //но на том элементе, на котором находится мышь ничего не происходит, он так и остаётся нормально виден
  //         event.target.style.opacity = '1';        
  //     });
  //     //событие вещается тогда, когда мышь уходишь от карты
  //     findingParent.addEventListener('mouseout', () => {
  //         //создаётся цикл, всё перебирается и все элементы возвращаются к обычному состоянию
  //         for (let i = 0; i < hoverEffects.length; i++) {
  //             hoverEffects[i].style.opacity = '1';
  //         }
  //     });
  // }
  // hoverMap(map, hover);


  /* -------------------------------ПРИ КЛИКЕ-------------------------------------- */

  // const allItemMap = document.querySelectorAll('.hover-opacity');
  // allItemMap.forEach(event => {
  //     event.addEventListener('click', function({target}) {
  //         let dataAttribute = target.getAttribute('data');

  //         document.querySelectorAll('.map-popup').forEach(item => {
  //             item.style.display = 'none';
  //         });
  //         document.querySelector(`.map-popup[data="${dataAttribute}"]`).style.display = 'block';
  //     });
  // });

});

