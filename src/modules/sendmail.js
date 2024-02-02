(function () {
    const form = document.querySelector('.form');
    
    const userFullName = document.querySelector('#userFullName');
    const userEmail = document.querySelector('#userEmail');
    const userSubject = document.querySelector('#userSubject');
    const userMessage = document.querySelector('#userMessage');

    const userInputs = document.querySelectorAll('.form__input, .form__textarea');
    const userInputsArr = [...userInputs];

    function sendEmail() {
        const bodyMessage = `
            <p>Full Name: ${userFullName.value}</p>
            <p>Email: ${userEmail.value}</p>
            <p>Message: ${userMessage.value}</p>
        `;

        Email.send({
            SecureToken: "bd39ee86-85e9-401e-b0b6-4cb1c4d396fd",
            To: 'ubi00179@gmail.com',
            From: 'ubi00179@gmail.com',
            Subject: userSubject.value,
            Body: bodyMessage
        }).then(
            message => {
                if (message == 'OK') {
                    Swal.fire({
                        title: "Sucess!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                }
            }
        );
    }

    function checkInputs() {
        let isValid = true;

        userInputsArr.map(input => {
            const label = input.previousElementSibling;

            label.classList.remove('form__label--error');
            input.classList.remove('form__input--error');

            if(input.value === '') {
                label.classList.add('form__label--error');
                input.classList.add('form__input--error');

                isValid = false;
            }
        });

        return isValid;
    }

    function clearInputs() {
        userInputsArr.map(input => input.value = '');
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (!checkInputs()) return;

        sendEmail();
        clearInputs();
    });
})()