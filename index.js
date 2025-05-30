  const typedText = document.getElementById("typed-text");
  const phrases = ["a Web Designer", "a Programmer"];
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, letterIndex);

    typedText.textContent = currentText;

    if (!isDeleting) {
      letterIndex++;
      if (letterIndex > currentPhrase.length) {
        isDeleting = true;
      }
    } else {
      letterIndex--;
      if (letterIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(typeLoop, 150); // constant speed
  }

  window.onload = typeLoop;
//HTML
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

//css
  function openModal(cssModal) {
    document.getElementById(cssModal).style.display = 'block';
  }

  function closeModal(cssModal) {
    document.getElementById(cssModal).style.display = 'none';
  }
// javascript
 function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}


  // Optional: Close modal on outside click
  window.onclick = function(event) {
    const modal = document.getElementById('cssModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }


  function openModal(otherModal) {
    document.getElementById(otherModal).style.display = 'block';
  }

  function closeModal(otherModal) {
    document.getElementById(otherModal).style.display = 'none';
  }

  // Optional: Close modal on outside click
  window.onclick = function(event) {
    const modal = document.getElementById('otherModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }



  //contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxcwuaEDnwQN9T2bhwWXY25d-9E4f-6oWCsHcI1x198USpQmhCQ7F_fmIRzZIhU96ER/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
function myFunction(){
    alert("Thank you! Your message has been submitted.")
}

