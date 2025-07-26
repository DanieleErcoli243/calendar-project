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
    const firstDayOfMonth = new Date(1,month, year).getDay();
    // mostro il mese e l'anno
    monthYearElmnt.textContent = date.toLocaleString('it', {
        month: 'long',
        year: 'numeric'
    }

    );

    // creo un array coi giorni della settimana
    const weekdays = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];
    // faccio un ciclo sull'array dei giorni per creare dinamicamente un div per ogni giorno
    weekdays.forEach(day => {
        const dayElmnt = document.createElement("div");
        // do una classe all'elemento 
        dayElmnt.className = "day-name";
        // lo riempio
        dayElmnt.textContent = day;
        // lo appendo
        calendarElmnt.appendChild(dayElmnt);
    })
}

// seleziono gli elementi dal DOM
const calendarElmnt = document.getElementById('calendar');
const monthYearElmnt = document.getElementById('month-year');
const modalElmnt = document.getElementById('event-modal');

// istanzio una variabile per la data odierna

let currentDate = new Date();
