const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");


form.addEventListener('submit',e=>{

    e.preventDefault();/*reload the page*/
    checkInput();
});

function checkInput()
{

    const usernamevalue = username.ariaValueMax.trim();
    const emailvalue = email.ariaValueMax.trim();
    const passwordvalue = password.ariaValueMax.trim();
    const password2value = password2.ariaValueMax.trim();



    if(usernamevalue === ''){
        setError(username, 'username cannot be blank');
    }
    else{
        setSuccess(username);
    }


    if(emailvalue === ''){
        setError(email, 'email cannot be blank');
    }
        else if(!isEmail(emailvalue)){
            setError(email,'not a valid email');
        }
        else{
            setSuccess(email);
        }

        if(passwordvalue === '')
        {
            setError(password, 'passoword cannot be blank');
        }
        else{
            setSuccess(password);
        }


        if(password2value === '')
        {
            setError(password2, 'passoword cannot be blank');
        }
        else if(password2Value == password2Value)
        {
            setError(password2,'passowrd2 does not match')
        }
        else{
            setSuccess(password2);
        }
    

    }
        function setError(input,message){
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = 'form-control error';
            small.innerText = message;
        }

        function setSuccess(input){
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }



function isEmail(email){
    return /*condition paste*/ 
}

