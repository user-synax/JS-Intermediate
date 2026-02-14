const GetNoteInput = document.getElementById("noteInput")
const AddNoteButton = document.getElementById("addNote")
const GetNoteUL = document.getElementById("noteUl")

const GetUpdateWindow = document.getElementById("update-card")
const GetNoteTextarea = document.getElementById("noteText")
const GetNoteCardId = document.getElementById("note-card-id")
const GetUpdateButton = document.getElementById("upd-btn")
const GetDeleteButton = document.getElementById("del-btn")
const GetCloseButton = document.getElementById("close-btn")

const FullDate = new Date()
const Hour = FullDate.getHours()
const Minute = FullDate.getMinutes()
const Second = FullDate.getSeconds()


/* ----------------- Validate Note, Store And Display on DOM ---------------- */

const ValidateNote = () => {
    if (GetNoteInput.value.trim() == '') {
        alert("Please enter Something")
        return
    }
    saveNoteToLocalstorage()
}

const saveNoteToLocalstorage = () => {
    let AllNotes = JSON.parse(localStorage.getItem("notes")) || []
    const NoteInput = GetNoteInput.value.trim()
    const NoteID = Math.floor(Math.random() * 9999)
    const newNote = {
        id: NoteID,
        note: NoteInput,
        time: `${Hour}:${Minute}:${Second}`
    }
    AllNotes.unshift(newNote)
    localStorage.setItem("notes", JSON.stringify(AllNotes))
    location.reload()
}

const ShowNotes = () => {
    let AllNotes = JSON.parse(localStorage.getItem("notes")) || []

    let T = AllNotes.map(t => {
        return `<div class="note-card">
        <i>${t.id}</i>
        <h1>${t.note}</h1>
        <p>${t.time}</p>
        </div>`
    }).join("")
    GetNoteUL.innerHTML = T
}

window.addEventListener("load", ShowNotes)

GetNoteInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        ValidateNote()
    }
})
AddNoteButton.addEventListener("click", ValidateNote)

/* ------------------------ Update Note Window Logic ------------------------ */

GetNoteUL.addEventListener("click", (e) => {
    const card = e.target.closest(".note-card");
    if (!card) return;
    const NoteId = card.querySelector("i")
    const Note = card.querySelector("h1")
    GetUpdateWindow.style.display = 'flex'
    GetNoteTextarea.textContent = Note.textContent
    GetNoteCardId.textContent = NoteId.textContent
});

let activeUpdateId = null;
GetUpdateButton.addEventListener("click", () => {

    if (!activeUpdateId) return;

    const newText = GetNoteTextarea.value.trim();
    if (!newText) return;

    let AllNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = AllNotes.map(note =>
        note.id === activeUpdateId
            ? {
                ...note,
                note: newText,
                time: `Updated: ${new Date().toLocaleTimeString()}`
            }
            : note
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    GetUpdateWindow.style.display = "none";
    activeUpdateId = null;

    // location.reload();
});

GetDeleteButton.addEventListener("click", (e) => {
    const card = e.target.closest(".updateCard");
    if (!card) return;
    const DelNoteId = Number(card.querySelector("h1").textContent);
    let AllNotes = JSON.parse(localStorage.getItem("notes")) || []
    let Filtered = AllNotes.filter(note => note.id !== DelNoteId)
    localStorage.setItem("notes", JSON.stringify(Filtered))
    GetUpdateWindow.style.display = 'none'
    location.reload()
})

GetUpdateButton.addEventListener("click", () => {
    GetUpdateWindow.style.display = 'none'
})

GetCloseButton.addEventListener("click", () => {
    GetUpdateWindow.style.display = 'none'
})
