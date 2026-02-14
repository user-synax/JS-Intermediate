const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

// Load events on startup
document.addEventListener('DOMContentLoaded', displayEvents);

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Capture values
    const eventData = {
        id: Date.now(),
        type: document.getElementById('type').value,
        dateTime: document.getElementById('dateTime').value,
        location: document.getElementById('location').value,
        budget: document.getElementById('budget').value,
        planningType: document.getElementById('planningType').value,
        theme: document.getElementById('theme').value,
        decoration: document.getElementById('decoration').value,
        capacity: document.getElementById('capacity').value
    };

    saveEvent(eventData);
    eventForm.reset();
    displayEvents();
});

function saveEvent(event) {
    const events = JSON.parse(localStorage.getItem('myEvents') || '[]');
    events.push(event);
    localStorage.setItem('myEvents', JSON.stringify(events));
}

function displayEvents() {
    const events = JSON.parse(localStorage.getItem('myEvents') || '[]');
    eventList.innerHTML = events.map(ev => `
        <div class="event-card">
            <h3>${ev.type} - ${ev.theme}</h3>
            <p>📅 ${new Date(ev.dateTime).toLocaleString()}</p>
            <p>📍 ${ev.location}</p>
            <p>💰 Budget: $${ev.budget} | 👥 Cap: ${ev.capacity}</p>
            <p>🛠️ ${ev.planningType} (${ev.decoration} decor)</p>
            <button class="delete-btn" onclick="deleteEvent(${ev.id})">Delete</button>
        </div>
    `).join('');
}

function deleteEvent(id) {
    let events = JSON.parse(localStorage.getItem('myEvents'));
    events = events.filter(ev => ev.id !== id);
    localStorage.setItem('myEvents', JSON.stringify(events));
    displayEvents();
}