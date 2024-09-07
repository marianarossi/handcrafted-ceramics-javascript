document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting if validation fails
        event.preventDefault();

        // Clear previous error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        // Perform validation
        let isValid = true;

        // Validate full name
        const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
        if (nomeCompleto === '') {
            showError('nomeCompleto', 'Full name is required');
            isValid = false;
        }
        if(/\d/.test(nomeCompleto))
        {
            showError('nomeCompleto', 'No numbers allowed');
        }

        // Validate email
        const email = document.getElementById('email').value.trim();
        if (email === '' || !validateEmail(email)) {
            showError('email', 'A valid email is required');
            isValid = false;
        }

        // Validate birth date
        const dataNascimento = document.getElementById('dataNascimento').value.trim();
        if (dataNascimento === '') {
            showError('dataNascimento', 'Birth date is required');
            isValid = false;
        }

        // Validate CPF
        const cpf = document.getElementById('cpf').value.trim();
        if (cpf === '') {
            showError('cpf', 'CPF is required');
            isValid = false;
        }
        if (!/^\d+$/.test(cpf))
        {
            showError('cpf', 'Only numbers allowed');

        }

        // Validate RG
        const rg = document.getElementById('rg').value.trim();
        if (rg === '') {
            showError('rg', 'RG is required');
            isValid = false;
        }
        if (!/^\d+$/.test(rg))
            {
                showError('rg', 'Only numbers allowed');
    
            }

        // Validate cellphone
        const telefone = document.getElementById('telefone').value.trim();
        if (telefone === '') {
            showError('telefone', 'Cellphone is required');
            isValid = false;
        }
        if (!/^\d+$/.test(telefone))
            {
                showError('telefone', 'Only numbers allowed');
    
            }

        // Validate password
        const password = document.getElementById('password').value.trim();
        if (password === '') {
            showError('password', 'Password is required');
            isValid = false;
        } else if (password.length < 8) {
            showError('password', 'Password must be at least 8 characters long');
            isValid = false;
        }

        // Validate confirm password
        const password2 = document.getElementById('password2').value.trim();
        if (password2 === '') {
            showError('password2', 'Confirm password is required');
            isValid = false;
        } else if (password !== password2) {
            showError('password2', 'Passwords do not match');
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            form.submit();
        }
    });

    // Function to display error message
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        field.parentElement.appendChild(errorMessage);
    }

    // Simple email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
