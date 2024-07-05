document.getElementById('openFormButton').addEventListener('click', function() {
    document.getElementById('formPopup').style.display = 'flex';
});

document.getElementById('closeFormButton').addEventListener('click', function() {
    document.getElementById('formPopup').style.display = 'none';
});

// document.getElementById('popupForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let formData = new FormData(this);
    
//     fetch('submit_form.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert(data);
//         document.getElementById('formPopup').style.display = 'none';
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });
