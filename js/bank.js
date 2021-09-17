document.getElementById('login-submit').addEventListener('click', function() {
    // console.log('button kaj korce');
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if (userEmail == 'rakib@gmail.com' && userPassword == 'rakib') {
        window.location.href = "banking.html";
    } 

})


