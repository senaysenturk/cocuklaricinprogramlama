<?php
session_start();

$firstname = "";
$lastname = "";
$email    = "";
$errors = array(); 

// Veritabanı bağlantısı
$db = mysqli_connect('localhost', 'root', '123', 'accounts');
$db->set_charset("utf8");

// Kullanıcı Kaydı
if (isset($_POST['register'])) {
  
  //formdan verilerin alınması
  $firstname = mysqli_real_escape_string($db, $_POST['firstname']);
  $lastname = mysqli_real_escape_string($db, $_POST['lastname']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password = mysqli_real_escape_string($db, $_POST['password']);
  


  $user_check_query = "SELECT * FROM users WHERE firstname='$firstname' AND lastname='$lastname' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { // email daha önce veritabanına kayıt edilmişse
        if ($user['email'] === $email) {
      array_push($errors, "Bu email hesabı ile daha önceden kayıt olunmuş!");
    }
  }

  // Hata yoksa kullanıcı kaydının yapılması
  if (count($errors) == 0) {
  	$password = md5($password_1);//kullanıcı parolasının şifrelenerek veritabanına kayıt edilmesi

  	$query = "INSERT INTO users (firstname,lastname, email, password) 
  			  VALUES('$firstname','$lastname', '$email', '$password')";
  	mysqli_query($db, $query);
  	$_SESSION['firstname'] = $firstname;
    $_SESSION['lastname'] = $lastname;
  	$_SESSION['success'] = "Kayıt yaptınız";
  	header('location: giris.php');
  }
}


// Kullanıcı girişi
if (isset($_POST['login'])) {
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password = mysqli_real_escape_string($db, $_POST['password']);

    $password = md5($password);
    $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $results = mysqli_query($db, $query);
    if (mysqli_num_rows($results) == 1) {
      $_SESSION['email'] = $email;
      $_SESSION['success'] = "Giriş yaptınız";
      header('location: giris.php');
    }else {
      array_push($errors, "Şifrenizi veya email adresinizi eksik veya yanlış girdiniz!");
    }
}


//Kullanıcının hesaptan çıkışı

if(isset($_POST['logout'])){
  session_destroy();
  header('location:giris.php');
}
?>
