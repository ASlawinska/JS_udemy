let $toDoInput; // zmienna globalna, miejsce do wpisania treści zadani
let $alertInfo; // info o zadaniach/braku tekstu
let $addBtn; // przycisk dodania tekstu
let $ulList;// lista zadań
let $newTask// nowe zadanie
let $toolsPanel // div przechowujacy przyciski
let $completeBtn // btn check
let $editBtn // edit
let $deleteBtn // delete


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};
//pobieranie elementów
const prepareDOMElements = () => {
    $toDoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
    $toolsPanel =document.querySelector('.tools')
    $$completeBtn =document.querySelector('.complete')
    $editBtn =document.querySelector('.edit')
    $deleteBt =document.querySelector('.delete')
};
// pobieramy nasłuchiwanie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)

};

const addNewTask = () => {
    if ($toDoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $toDoInput.value;
        $ulList.appendChild($newTask);
        $toDoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    } else {
        $alertInfo.innerHTML = 'Wpisz tekst zadania'
    }}
const createToolsArea = () => {
    $toolsPanel = document.createElement('div');
    $toolsPanel.classList.add('tools');
    $newTask.appendChild($toolsPanel);
    
    $completeBtn = document.createElement('button');
    $completeBtn.classList.add('complete');
    $completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    
    $editBtn = document.createElement('button');
    $editBtn.classList.add('edit');
    $editBtn.innerText = 'EDIT'
    
    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    $toolsPanel.appendChild($completeBtn);
    $toolsPanel.appendChild($editBtn);
    $toolsPanel.appendChild($deleteBtn);
}

document.addEventListener("DOMContentLoaded", main)// czekamy aż nasza strona musi się wczytać.