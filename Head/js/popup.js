/*----------------------- ПОЯВЛЕНИЕ ОКОНА С ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИЕЙ ПРИ НАВЕДЕНИ НА ЧАСТЬ КАРТЫ -----------------------*/

//создание переменных. Первая из них - это часть карты на которую указатель наводится
let hoverDnepr      = document.querySelector('.hover-dnepropetrovsk'),
    //второй элемент это само окно, которое должно всплывать при наведении указателя на часть карты
    showPopupOne    = document.querySelector('.map-popup');

//тоже самое, что и первое, но здесь другие "координаты"
let hoverTestMap   = document.querySelector('.hover-test'),
    popupTestShow       = document.querySelector('.map-popup_two');

//создание функции и передача аргументов, для того, чтобы функцию использовать несколько раз
function hoverEffectMap(areaMaps, popupShow) {
    //при наведении на первый элемент, вешается событие
    areaMaps.addEventListener('mousemove', () => {
        //исходя из которого, через 900 миллисекунд 
        setTimeout(function() {
            //будет добавляться класс второму аргументу, которым здесь выступает сам попап
            popupShow.classList.add('show');
        }, 900)
    });
    //то же самое что и первое, но здесь наведением выступает сам попап для того, чтобы он не пропадало после наведения на него
    popupShow.addEventListener('mousemove', () => {
        setTimeout(function() {
            popupShow.classList.add('show');
        }, 900)
    });

    //то же самое, что и первая часть функции, но в отличии от первой, эта активируется при отеведении указателя мыши
    areaMaps.addEventListener('mouseout', () => {
        //и спустя 900 миллисекунд 
        setTimeout(function() {
            //с данного элемента удаляется класс
            popupShow.classList.remove('show');
        }, 900)
    });
    //то же самое, что и предыдущее, но аргументом выступает попап, для того
    popupShow.addEventListener('mouseout', () => {
        setTimeout(function() {
            //чтобы он пропадал, если мышь отводится от него
            popupShow.classList.remove('show');
        }, 900)
    });
}

//использование фунции.Первым аргументом передаётся переменная части карты, а вторым аргументом окно, которое открывается
hoverEffectMap(hoverDnepr, showPopupOne);
hoverEffectMap(hoverTestMap, popupTestShow);



/*----------------------- ИЗМИНЕНИЕ OPACITY ПРИ НАВЕДЕНИИ НА КАРТУ -----------------------*/

//создаем переменные, перавя из которых - это блок, в которую вся карта завёрнута
let map = document.querySelector('.status__map');
//а вторая переменная - это классы, добавленные к каждому участку карты
let hover = document.querySelectorAll('.hover-opacity');


//создаётся функция для будущего переиспользования, куда передаём два аргумента. 
//Первая - это родитель, то есть вся блок в которую карта завёрнута. А второй аргумени эффект при наведении
function hoverMap(findingParent, hoverEffects) {
    //при наведении на блок с картой внутри, будет вешаться событие
    findingParent.addEventListener('mousemove', (event) => {
        //исходя из которого запускается цикл и перебираем все элементы внутри, так как без него работать не будет (можно было бы воспользоваться и перебирающим методом forEach(), но так проще)
        for (let i = 0; i < hoverEffects.length; i++) {
            //после чего у всех элементом понижается видимость opacity
            hoverEffects[i].style.opacity = '0.7';
        }
        //но на том элементе, на котором находится мышь ничего не происходит, он так и остаётся нормально виден
        event.target.style.opacity = '1';        
    });
    //событие вещается тогда, когда мышь уходишь от карты
    findingParent.addEventListener('mouseout', () => {
        //создаётся цикл, всё перебирается и все элементы возвращаются к обычному состоянию
        for (let i = 0; i < hoverEffects.length; i++) {
            hoverEffects[i].style.opacity = '1';
        }
    });
}
hoverMap(map, hover);



/* -------------------------------ДРУГАЯ ВЕРСИЯ КОДА-OPACITY-------------------------------------- */

// function hoverHandler(e) {
//     this.querySelectorAll('.hover-opacity').forEach(n => {
//         n.classList.toggle('hover', n !== e.target && this !== e.target);
//     });
// }

// const map = document.querySelector('.status__map svg');
// map.addEventListener('mouseover', hoverHandler);
// map.addEventListener('mouseout', hoverHandler);
