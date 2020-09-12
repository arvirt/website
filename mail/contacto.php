<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@arvirt.com";
    $email_subject = "CONTACTO ARVIRT.COM";
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        echo false;
        died('Error con los datos enviados en el formulario.');       
    }

    $name = $_POST['name']; // required
    $subject = $_POST['subject']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required
 

    $email_message = "Hola Arvirt, un futuro cliente quiere saber de ti, los detalles se encuentran a continuación.\n\n";
   
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Nombre: ".clean_string($name)."\n";
    $email_message .= "Correo: ".clean_string($email)."\n";
    $email_message .= "Asunto: ".clean_string($subject)."\n";
    $email_message .= "Empresa: ".clean_string($_REQUEST["company"])."\n";
    $email_message .= "-------------------------------------- \n";
    $email_message .= "Mensaje: ".clean_string($message)."\n";
 
// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();

if(@mail($email_to, $email_subject, $email_message, $headers)){
	
	echo true;
	
}

else{
    echo false;
}
 
}
else {
    echo false;
}
?>
