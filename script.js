// 1 - выбирать элементы на странице 
// 1.1 - выбрать элемент по айди
let header = document.getElementById('title');
console.log(header);
// 1.2 - выбрать ОДИН элемент по селектору
const container = document.querySelector('.container');
console.log(container);
// 1.3 - выбрать НЕСКОЛЬКО элементов по селектору
const paragraphs = document.querySelectorAll('ul li');
console.log(paragraphs);

// 2 - работа с контентом(содержанием)
 console.log(header.textContent);  //Извлекаем текст без тегов
console.log(header.innerHTML); //извлекаем и текст и теги
console.log(header.outerHTML); // извлекаем сам элемент+текст и теги
console.log(header.innerText);  //Извлекаем текст без тегов
console.log(header.outerHTML); //Извлекаем текст без тегов

// изменить текст (теги воспринимаются как текст)
header.textContent='новый заголовок <i class="bi bi-rocket-fill"></i>';
// меняем HTML (теги воспринимаются как теги)
header.innerHTML='новый заголовок <i class="bi bi-rocket-fill"></i>';
// Полностью перезаписываем и содержимое и сам тег  
header.outerHTML='<h3>новый заголовок <i class="bi bi-rocket-fill"></i><h3>';

// 3 раздел - работа с классами (с атрибутом class)
const h2=document.querySelector('h2');
// 3.1 добавление классов 
h2.classList.add('big');
h2.classList.add('red');
// удаление классов
h2.classList.remove('big')
// проверить есть ли класс у эементов
console.log(h2.classList.contains('red'));
// переключатель классов
for(let elem of paragraphs){
    // elem.classList.toggle('text');
    if(elem.classList.contains('text')){
        elem.classList.remove('text');
    }
    else{
        elem.classList.add('text');
    }

}
// 4- работа со стилями (атрибут style)
const btn = document.querySelector('input[type=submit]')
console.log(btn);
// добавление стилей 
btn.style.color="red";
btn.style.background="yellow";
btn.style.fontsize="24px";
btn.style.border="1px solid red";


// 5 работа с атрибутами
let link = document.querySelector('li:nth-child(1) a')
console.log(link);
// считываем атрибут
console.log(link.getAttribute('href'));
// установить/изменить атрибут
link.setAttribute('href', 'http://icons.getbootstrap.com/icons/rocket-fill/');
link.setAttribute('target', 'blank')
// удалить атрибут
btn.removeAttribute('style');
// 6 - создание нового элемента (тега)
const block = document.createElement('div');
block.classList.add('block');
block.innerHTML= "новый блок";
container.append(block);

const image = document.createElement('img');
image.setAttribute('src' , 'img/2.jpg');
image.alt='стул'; //еще один способ задать атрибут
image.style.width='50px'
container.append(image);
// 7 - выбор потомков элементов
// выбираем все параметры
const lorems=document.querySelectorAll('p');
console.log(lorems);
// выбираем только дочерний параграф
const content = document.querySelector('.content');
const loremsInContent=content.querySelectorAll('p');
console.log(loremsInContent);

// 8- выбор предков
let form= btn.closest('form');  //поиск ближайщего предка по селектору
form.style.border= "2px dotted orange";

// 9 - обработка событий(клик по кнопке)
btn.addEventListener('click', function(event){
    event.preventDefault();  // отменяем поведение по умолчанию- обновление страницы
    console.log('click');
    const body = document.querySelector('body');
    body.style.background='darkblue';
    body.style.color='white';
    const pass = document.querySelector('input [type=password]');
    console.log(pass);
});

//10 -удаление тегов
//- живая коллекция
const texts =document.querySelector('content').childNodes;
console.log(texts);
const p1=document.querySelector('p'); //выбираем первый параграф в элементе
p1.outerHTML=""; //удаляем тег - первый параграф 
console.log(paragraphs);
console.log(texts);