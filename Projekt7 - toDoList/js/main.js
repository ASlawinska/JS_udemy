let $toDoInput; // zmienna globalna, miejsce do wpisania treści zadani
let $alertInfo; // info o zadaniach/braku tekstu
let $addBtn; // przycisk dodania tekstu
let $ulList;// lista zadań
let $newTask// nowe zadanie
let $toolsPanel // div przechowujacy przyciski

let $popup // pobranie popub
let $popupInfo; // alert w popup
let $editedToDo; //edytowany to do
let $popupInput; // tekst wpisywany do inputa w popupie
let $addPopupBtn; // zawtierdz w popup
let $closeToDoBtn; //przycisk zamykanie w popupie


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
    $popup =document.querySelector('.popup')
    $$popupInfo =document.querySelector('.popupInfo')
    $popupInput =document.querySelector('.popupInput')
    $addPopupBtn =document.querySelector('.accept')
    $closeToDoBtn =document.querySelector('.cancel')
};
// pobieramy nasłuchiwanie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeToDoBtn.addEventListener('click', closePopup);
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
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);
    
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT'
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
}
const checkClick = (e) => {

    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.closest('button').classList.toggle('completed')
    } else if (e.target.closest('button').className === 'edit'){ editTask();

    }else if (e.target.closest('button').className === 'delete') {
        console.log('delete');

    }
}

const editTask = () =>{
    $popup.style.display = 'flex'
}
const closePopup = () => {
    $popup.style.display = 'none'
}
document.addEventListener("DOMContentLoaded", main)// czekamy na czytanie się całej strony 