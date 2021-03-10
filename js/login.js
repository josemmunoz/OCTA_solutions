function validar() {
  /*almacenar los valores de las cajas*/
  var mail, passwd, expresion;

  mail = document.getElementById("mail").value;
  passwd = document.getElementById("passwd").value;

  /*estructura correo electronico */

  expresion = /\w+@\w+\.+[a-z]/;

  /*************************************************************************/

  if (mail === "" || passwd === "") {
    alert("No hay nada introducido, vuelva a introducirlo");
    return false;
  } else if (mail.length > 50) {
    alert("Mail demasidado largo, inserte de nuevo uno corto");
    return false;
  } else if (!expresion.test(mail)) {
    alert("el correo no es valido.");
    return false;
  } else if (passwd.length < 4 || passwd.length > 8) {
    alert("error la contraseña no es valida Minimo 4 caracteres");
    return false;
  } 
}
/*========================================================================================================== */

function registrar() {
  /*almacenar los valores de las cajas*/
  var ruser, rmail, rpasswd, confirmpasswd, rexpresion;

  ruser = document.getElementById("ruser").value;
  rmail = document.getElementById("rmail").value;
  rpasswd = document.getElementById("rpasswd").value;
  confirmpasswd = document.getElementById("confirmpasswd").value;

  /*estructura correo electronico */

  rexpresion = /\w+@\w+\.+[a-z]/;

  /*************************************************************************/

  if (rmail === "" || rpasswd === "" || ruser === "" || confirmpasswd === "") {
    alert("No hay nada introducido, vuelva a introducirlo");
    return false;
  } else if (rmail.length > 50) {
    alert("Mail demasidado largo, inserte de nuevo uno corto");
    return false;
  } else if (!rexpresion.test(rmail)) {
    alert("el correo no es valido.");
    return false;
  } else if (rpasswd.length < 4 || rpasswd.length > 8) {
    alert("error la contraseña no es valida Minimo 4 caracteres");
    return false;
  }
}
