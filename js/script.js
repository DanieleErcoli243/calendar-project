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
    });


    // ciclo for per creare dinamicamente altri div
    for(let i = 0; i < firstDayOfMonth; i++) {
        calendarElmnt.appendChild(document.createElement("div"));
    }

    // faccio un ciclo sui giorni

    for(let day = 1; day < totalDays; day++) {
        // creo una stringa con la data
        const dateStr = `${string(day).padStart(2, '0')}-${string(month+1).padStart(2, '0')}-${straing(year)}`;
        // istanzio una variabile per la cella
        const cell = document.createElement("div");
        // le attribuisco una classe
        cell.className = "day";

        //stabilisco le condizioni per attribuire una classe alla cella
        if (day === totalDays.getDate() && month === totalDays.getMonth() && totalDays.getFullYear()) {
            cell.classList.add('today');
        }
        
        // istanzio un'altra variabile per creare dei div
        const dateElmnt = document.createElement('div');

        // attribuisco loro una classe
        dateElmnt.className = 'date-number';
        // li riempio col contenuto
        dateElmnt.textContent = day;
        // li appendo alle celle
        cell.appendChild(dateElmnt);

    }
}

// seleziono gli elementi dal DOM
const calendarElmnt = document.getElementById('calendar');
const monthYearElmnt = document.getElementById('month-year');
const modalElmnt = document.getElementById('event-modal');

// istanzio una variabile per la data odierna

let currentDate = new Date();
