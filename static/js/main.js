$(document).ready(function(){
  var $loginForm = $('#login-form');
  $loginForm.on('submit', login);
  $loginForm.find('input').on('input', removeErrors);
});

function removeErrors(event){
  $(event.target).parent().removeClass('has-error');
}

function login(event){
  event.preventDefault();
  var $loginForm = $(event.target).first();
  var $login = $loginForm.find('input[name="login"]');
  var $passw = $loginForm.find('input[name="password"]');

  var login = $login.val();
  var passw = $passw.val();

  var valid = true;

  if (login.length == 0){
    $login.parent().addClass('has-error');
    valid = false;
  }

  if (passw.length == 0){
    $passw.parent().addClass('has-error');
    valid = false;
  }

  if (valid == false){
    return;
  }

  // Need implement promise that check login on server-side and
  // return true if login sucess, or false in user send invalid
  // credentials.
  loginRequest(login, passw);
}

function loginRequest(login, password){

};
