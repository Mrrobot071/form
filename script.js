 const button = document.querySelector('button');

    const addLoading = () => {
      button.innerHTML = '<div class="loading"></div> Enviando...';
    }

    const removeLoading = () => {
      button.innerHTML = 'Enviar';
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      addLoading();

      const nome = document.querySelector('input[name=nome]').value;
      const email = document.querySelector('input[name=e-mail]').value;

      // Assuming you want to use fetch to send data
      fetch('https://api.sheetmonkey.io/form/jHPbPNfHKot1hTdGLyaay4', {
        method: 'POST',
        body: JSON.stringify({ nome, email }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Data saved:', data);
        removeLoading();
      })
      .catch(error => {
        console.error('Error:', error);
        removeLoading();
      });
    }