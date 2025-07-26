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

        // faccio un ciclo per filtrare sugli eventi
        const eventToday = events.filter(e => e.date === dateStr);
        // creo un contenitore per l'evento
        const eventBox = document.createElement("div");
        // gli do una classe
        eventBox.className = "events";

        // rendere gli eventi
        events.forEach(event => {
            // creo un elemento per l'evento
            const e = document.createElement("div");
            // gli do una classe
            e.className = "event";

            // creo un elemento per il corso
            const courseElmnt = document.createElement("div");
            // gli do una classe
            courseElmnt.className = "course";
            // aggiungo un contenuto testuale
            courseElmnt.textContent = event.title.split(" - ")[0];
            
            // creo un elemento per l'insegnante
            const instructorElmnt = document.createElement("div");
            // gli do una classe
            instructorElmnt.className = "instructor";
            // aggiungo un contenuto testuale
            instructorElmnt.textContent = event.title.split(" - ")[1];
           
            // creo un elemento per il tempo
            const timeElmnt = document.createElement("div");
            // gli do una classe
            timeElmnt.className = "time";
            // aggiungo un contenuto testuale
            timeElmnt.textContent = event.start.time + " - " + event.end_time();

            // appendo gli elementi creati all'elemento evento
            e.appendChild(courseElmnt);
            e.appendChild(instructorElmnt);
            e.appendChild(timeElmnt);

            // appendo l'elemento evento al contenitore
            eventBox.appendChild(e);
        });

        // overlay dei bottoni
        const overlay = document.createElement("div");
        overlay.className = 'overlay';

        // creo i bottoni
        const addBtn = document.createElement("button");
        // aggiungo una classe ai bottoni
        addBtn.className = 'overlay-btn';
        // gli cambio il testo
        addBtn.textContent = 'Add';
        // stabilisco cosa fargli fare al click
        addBtn.onclick = e => {
            // impedisco il funzionamento naturale
            e.preventDefault();
            // invoco la funzione che mi serve
            openModalToAdd(dateStr);
        };

        // appendo i bottoni all'overlay
        overlay.appendChild(addBtn);

        if(eventToday.length > 0) {
            const editBtn = document.createElement("button");
        // aggiungo una classe ai bottoni
        editBtn.className = 'overlay-btn';
        // gli cambio il testo
        editBtn.textContent = 'Edit';
        // stabilisco cosa fargli fare al click
        editBtn.onclick = e => {
            // impedisco il funzionamento naturale
            e.preventDefault();
            // invoco la funzione che mi serve
            openModalToEdit(eventToday);
        };

        // appendo il bottone all'overlay
        overlay.appendChild(editBtn);
        }

        // appendo gli elementi alle celle e le celle al calendario
        cell.appendChild(overlay);
        cell.appendChild(eventBox);
        calendarElmnt.appendChild(cell)
    }
}

// creo una funzione che apre la modale per l'aggiunta

const openModalToAdd = dateStr => {
    // recupero l'elemento del modulo e ne cambio il valore
    document.getElementById('form-action').value= "Add";
    document.getElementById('event-id').value= "";
    document.getElementById('delete-event-id').value= "";
    document.getElementById('course-name').value= "";
    document.getElementById('instructor-name').value= "";
    document.getElementById('start-date').value= "dateStr";
    document.getElementById('end-date').value= "dateStr";
    document.getElementById('start-time').value= "09:00";
    document.getElementById('end-time').value= "10:00";

    // recupero il selettore di eventi e il suo contenitore
    const selector = document.getElementById('event-selector');
    const wrapper = document.getElementById('event-selector-wrapper');

    // stabilisco la condizione per cambiare il display del contenitore
    if(selector && wrapper) {
        selector.innerHTML = '';
        wrapper.style.display = 'none';
    }
    
    // cambio il display alla modale per mostrarla
    modalElmnt.style.display = 'flex';
}

// creo una funzione che apre la modale per la modifica
const openModalToEdit = eventsOnDate => {
    document.getElementById('form-action').value= "edit";
    // cambio il display alla modale per mostrarla
    modalElmnt.style.display = 'flex';
    // recupero il selettore di eventi e il suo contenitore
    const selector = document.getElementById('event-selector');
    const wrapper = document.getElementById('event-selector-wrapper');
    // cambio il testo nel selettore
    selector.innerHTML = "<option disabled selected>Choose event...</option>";

    // faccio un ciclo sugli eventi
    eventsOnDate.forEach(e => {
        // creo un elemento option
        const option = document.createElement('option');
        // gli assegno un valore
        option.value = JSON.stringify(e);
        // e ne cambio il testo
        option.textContent = `${e.title} (${e.start} -> ${e.end})`;
        // appendo l'option al selettore
        selector.appendChild(option);

    });

    // stabilisco le condizioni per mostrare o meno il contenitore del selettore
    if(eventsOnDate.length > 1) {
        wrapper.style.display = 'block';
    } else {
        wrapper.style.display = 'none';

    }

    // invoco la funzione per gestire l'evento della selezione

    handleEventSelection(JSON.stringify(eventsOnDate[0]));

}

// scrivo la funzione per gestire gli eventi

const handleEventSelection = eventJSON => {
    // istanzio la variabile evento
    const event = JSON.parse(eventJSON);

    // assegno un valore agli identificativi degli eventi
    document.getElementById('event-id').value= event.id;
    document.getElementById('delete-event-id').value= event.id;

    // destrutturo il corso e l'insegnante
    const [course, instructor] = event.title.split(' - ').map(e => e.trim());
    // cambio il valore delle altre voci
    document.getElementById('course-name').value = course || "";
    document.getElementById('instructor-name').value = instructor || "";
    document.getElementById('start-date').value = event.start || "";
    document.getElementById('end-date').value = event.end || "";
    document.getElementById('start-time').value = event.start_time || "";
    document.getElementById('end-time').value = event.end_time || "";
}

// creo la funzione per chiudere la modale

const closeModal = () => {
    modalElmnt.style.display = 'none';
}



// seleziono gli elementi dal DOM
const calendarElmnt = document.getElementById('calendar');
const monthYearElmnt = document.getElementById('month-year');
const modalElmnt = document.getElementById('event-modal');

// istanzio una variabile per la data odierna

let currentDate = new Date();
