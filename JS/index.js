const $form = document.querySelector('#form1');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // Ensure that you are passing the correct HTML form element to FormData.
    const form = new FormData($form); // Change 'this' to '$form'.

    try {
        const response = await fetch($form.action, { // Change 'this.action' to '$form.action'.
            method: $form.method, // Change 'this.method' to '$form.method'.
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            $form.reset(); // Change 'this.reset()' to '$form.reset()'.
            alert('Gracias por contactarnos, te escribiremos pronto');
        } else {
            // Handle the case when the response is not OK (e.g., error handling).
        }
    } catch (error) {
        // Handle errors that may occur during the fetch operation.
        console.error(error);
    }
}

