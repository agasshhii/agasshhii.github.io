
document.getElementById('notes-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let note = document.getElementById('book-note').value;
    if (note) {

      let notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
      

      displayNotes();
      document.getElementById('book-note').value = ''; // Clear the textarea
      document.getElementById('note-message').textContent = 'Note saved successfully!';
    } else {
      document.getElementById('note-message').textContent = 'Please enter a note!';
    }
  });
  
  // Display saved notes
  function displayNotes() {
    let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    let notesList = document.getElementById('saved-notes');
    notesList.innerHTML = '';
    savedNotes.forEach(function(note) {
      let li = document.createElement('li');
      li.textContent = note;
      notesList.appendChild(li);
    });
  }
  

  window.onload = displayNotes;
  