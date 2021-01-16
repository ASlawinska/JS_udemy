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
let $idNumber = 0;
let $allTasks;


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
    $popup =document.querySelector('.popup');
    $$popupInfo =document.querySelector('.popupInfo');
    $popupInput =document.querySelector('.popupInput');
    $addPopupBtn =document.querySelector('.accept');
    $closeToDoBtn =document.querySelector('.cancel');
    $allTasks = $ulList.getElementsByTagName('li');//żywa kolekcja li pobrane zostana wszytskie 
};
// pobieramy nasłuchiwanie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeToDoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeToDo);
    $toDoInput.addEventListener('keyup', enterCheck);
};
//dodawanie zadań do listy
const addNewTask = () => {
    if ($toDoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $toDoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $ulList.appendChild($newTask);
        $toDoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    } else {
        $alertInfo.innerHTML = 'Wpisz tekst zadania'
    }}
// zatwierdzanie zadania enterem
const enterCheck = () => {
    if(event.keyCode === 13) {
        addNewTask();
    }
};
//Tworzenie przycisków edycji, gotowe i zamykania
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
// zarządzanie kliknięciami w przycisku 
const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) {
        console.log(e.target);
        e.target.closest('li').classList.toggle('completed')
        e.target.closest('button').classList.toggle('completed')
    } else if (e.target.closest('button').className === 'edit'){ editTask(e);

    }else if (e.target.closest('button').className === 'delete') {
        deleteTask(e);

    }
}
//eycja zadania
const editTask = (e) => {
    const oldToDo = e.target.closest('li').id;
    $editedToDo = document.getElementById(oldToDo);
    $popupInput.value = $editedToDo.firstChild.textContent;
    $popup.style.display = `flex`
}
// sprawdzamy czy popup jest pusty i zmieniamy treść zadania
const changeToDo = () => {
    if ($popupInput.value !== '') {
        $editedToDo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = 'Musisz podać jakąś treść.'
    }
}
//Zamykanie popupa
const closePopup = () => {
    $popup.style.display = 'none'
    $popupInfo.innerText = '';
}
//usuwanie zadania
const deleteTask = (e) => {
    const deleteToDo = e.target.closest('li');
    deleteToDo.remove();
    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'Brak zadań na liście'
    }
}
document.addEventListener("DOMContentLoaded", main)// czekamy na czytanie się całej strony 