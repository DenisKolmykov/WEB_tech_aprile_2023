function get_email(){
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var input_user_email = document.getElementById('user_email').value;
    var valid = re.test(input_user_email);
    if (valid){
        alert('Вы ввели email: '+ input_user_email+'  \n\n! ОТПРАВЛЕНО УСПЕШНО !\nОжидайте ответа');
    }
    else{
        alert('!!! email адрес не введен или введен не корректно.\n!!! повторите ввод !!!');
    }
    document.getElementById('user_email').value=null;
}