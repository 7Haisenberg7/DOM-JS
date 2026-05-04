
//1
const paragraph =document.querySelector('.test-text')
paragraph.innerHTML = "Привет, <b>мир</b>! Меня зовут Егор.";
paragraph.style.background = "lightblue"
paragraph.style.Color = "blue"
paragraph.style.border = "2px solid blue"


//2
const emailField = document.querySelector('#email');
const checkbox = document.querySelectorAll('#remember');
const submitButton=document.querySelector('#btn');
emailField.Value="mail@mail.ru";
emailField.disabled = true;
checkbox.checked=true;
submitButton.textContent="Войти";


//3

const link = document.createElement('a');
link.textContent = 'Перейти на сайт';
link.href = 'https://midis.ru/';
link.target = '_blank';
link.style.borderRadius= '100px'
link.style.display = 'inline-block';
link.style.marginTop = '200px';
link.style.padding = '10px 20px';
link.style.color = 'white';
link.style.backgroundColor = 'blue';
link.style.fontSize = '20px';
link.style.textDecoration = 'none';
link.onmouseenter = function() {
    link.style.backgroundColor = 'darkblue';  
    link.style.fontSize = '24px';           
};
link.onmouseleave = function() {
    link.style.backgroundColor = 'blue';   
    link.style.fontSize = '20px';             
};
const container = document.getElementById('container');
container.appendChild(link);

   