// creo una funzione per la data
const renderCalendar = (date = new Date()) => {
    // svuoto l'elemento
    calendarElmnt.innerHTML = '';
    // istanzio delle variabili che contengano le parti della data
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    // istanzio una variabile per concatenare la data
    const totalDays = new Date(0, month+ 1, year).getDate();
    // istanzio una variabile per trovare il primo giorno del mese
}

// seleziono gli elementi dal DOM
const calendarElmnt = document.getElementById('calendar');
const monthYearElmnt = document.getElementById('month-year');
const modalElmnt = document.getElementById('event-modal');

// istanzio una variabile per la data odierna

let currentDate = new Date();
