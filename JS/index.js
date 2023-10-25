const $form = document.querySelector('#form1');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData($form); 

    try {
        const response = await fetch($form.action, { 
            method: $form.method, 
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            $form.reset(); 
            alert('Gracias por contactarnos, te escribiremos pronto');
        } else {

    }
    } catch (error) {
        console.error(error);
    }
}

