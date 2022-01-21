
const calendar = document.querySelectorAll('.calendar');
const daysDiv = document.createElement('div')
daysDiv.classList.add('hidden')



function makeInput(){
    calendar.forEach(element => {
        const input = document.createElement('input');
        element.appendChild(input)
        input.addEventListener('click', ()=> {
            showCalendar()
        })
    })
}
makeInput();
makeCalendar();

function showCalendar(){
    daysDiv.classList.remove('hidden')
}

function makeCalendar(){
    for(let i = 1; i < 32; i++){
        const day = document.createElement('div');
        day.textContent = i;
        daysDiv.classList.add('calendar-div')
        calendar.forEach(element => {
            daysDiv.classList.add('hidden')
            element.appendChild(daysDiv);
            daysDiv.appendChild(day)
            day.style.cursor = 'pointer'
        })
    }
}

// makeCalendar()

