/*1 - Выбирать элементы на странице */
//1.1 - Выбрать элемент по id
let header = document.getElementById('title');
console.log(header);
//1.2 - Выбрать ОДИН элемент по селектору
const container = document.querySelector('.container');
console.log(container);
//1.3 - Выбрать НЕСКОЛЬКО элементов по селектору
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

/*2 - Работа с контентом  */
console.log(header.textContent);//извлекаем текст без тегов
console.log(header.innerHTML); //извлекаем и текст и теги
console.log(header.outerHTML); //извлекаем сам элемент+текст и теги
console.log(header.innerText);//извлекаем текст без тегов
console.log(header.outerText);//извлекаем текст без тегов

//изменить текст (теги воспринимаються как текст)
header.textContent = 'Новый заголовок <i class="bi bi-vector-pen"></i>';
//меняем html (теги воспринимаються как теги)
header.innerHTML = 'Новый заголовок <i class="bi bi-vector-pen"></i>';
//полностью перезаписываем и содержимое и сам тег
header.outerHTML = '<h3>Новый заголовок <i class="bi bi-vector-pen"></i></h3>';

/*3 - Работа с классами (с атрибутом class) */
const h2 = document.querySelector('h2');
//добавление классов
h2.classList.add('big');
h2.classList.add('red');
h2.classList.add('title');
//удаление классов
h2.classList.remove('big');
//проверить есть ли класс у элемента
console.log(h2.classList.contains('big'));
//"переключатель" классов
for (let elem of paragraphs){
  //  elem.classList.toggle('text');
    if(elem.classList.contains('text')){
        elem.classList.remove('text');
    } else {
        elem.classList.add('text');
    }
}

/*4 - Работа со стилями (атрибут style) */
const btn = document.querySelector('input[type=submit]');
console.log(btn);
//добавление стилей
btn.style.color = 'red';
btn.style.background = 'yellow';
btn.style.fontSize = '24px';
btn.style.border = '1px solid red';

/*5 - Работа с атрибутами */
let link = document.querySelector('li:nth-child(1) a');
console.log(link);
//считываем атрибут
console.log(link.getAttribute('href'));
//установить/изменить атрибут
link.setAttribute('href', 'https://midis.ru/');
link.setAttribute('target', '_blank');
//удалить атрибут
btn.removeAttribute('style');

/*6 - Создание нового элемента(тега) */
const block = document.createElement('div');
block.classList.add('block');
block.innerHTML = "новый блок";
container.append(block);

const image = document.createElement('img');
image.setAttribute('src','img/1.png');
image.alt = 'стул'; //еще один способ задать атрибут
image.style.width='50px';
// container.append(image); //добавить элемент в конец конетнера
//container.prepend(image); //добавить элемент в начало контейнера
//container.before(image); //добавить элемент перед контейнером
container.after(image); //добавить элемент после контейнером

/*7 - выбор потомков элементов */
//выбираем все параграфы
const lorems = document.querySelectorAll('p');
console.log(lorems)
//выбираем только дочерние параграф
const content = document.querySelector('.content');
const loremsInContent = content.querySelectorAll('p');
console.log(loremsInContent);

/*8 - выбор предков */
let form = btn.closest('form'); //поиск ближайшего предка по селектору
form.style.border = '2px dotted orange';

/* 9 - Обработка событий (клик по кнопки) */
btn.addEventListener('click',function(event){
    event.preventDefault();//отменяем поведение по умолчанию - обновление страницы
    const body = document.querySelector('body');
    body.style.background = 'darkblue';
    body.style.color = 'white';
    const pass = document.querySelector('input[type=password]').value;
    console.log(pass);
});