// handle form submission and play audio
function handleNameSubmission() {
    const nameForm = document.createElement('form');
    const nameInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const audioPlayer = document.createElement('audio');

    // set up form elements
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your name';
    submitButton.textContent = 'Enter';

    // set up audio element
    audioPlayer.className = 'ya-hey';
    audioPlayer.src = 'ya-hey.mp3';

    // append elements to form
    nameForm.appendChild(nameInput);
    nameForm.appendChild(submitButton);

    // create container for form and greeting
    const container = document.createElement('div');
    container.id = 'name-container';
    document.body.appendChild(container);

    // append form to container
    container.appendChild(nameForm);

    // create pause button
    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause Audio';
    pauseButton.id = 'pause-button';
    pauseButton.style.display = 'none'; // initially hidden

    // add pause button to container
    container.appendChild(pauseButton);

    // event listener for pause button
    pauseButton.addEventListener('click', function() {
        if (!audioPlayer.paused) {
            audioPlayer.pause();
            pauseButton.textContent = 'Resume Audio';
        } else {
            audioPlayer.play();
            pauseButton.textContent = 'Pause Audio';
        }
    });

    // event listener for form submission
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        if (name) {
            // hide form
            nameForm.style.display = 'none';
            
            // create and display greeting
            const greeting = document.createElement('h1');
            greeting.textContent = `Hello, ${name}!`;
            container.appendChild(greeting);

            // play audio
            container.appendChild(audioPlayer);
            audioPlayer.play();

            // show pause button
            pauseButton.style.display = 'block';
        }
    });
}

// call function when dom is loaded
document.addEventListener('DOMContentLoaded', handleNameSubmission);
