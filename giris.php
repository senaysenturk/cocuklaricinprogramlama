<?php include('veritabani.php') ?>
<!DOCTYPE html>
<html>
<head>
    <title>< Ç İ P > | Çocuklar için Programlama</title>

    <link rel="manifest" href="site.webmanifest">
    <link rel="shortcut icon" type="image/png" href="img/icon.png"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/style.css">
    <link href="http://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" type="text/css">
</head>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['login'])) { //kullanıcı girişi
        require 'veritabani.php';

    } elseif (isset($_POST['register'])) { //kullanıcı kaydı oluşturma

        require 'veritabani.php';

    }
}
?>
<body>
<div id="particles-js">
    <div class="btext">
        <header role="banner" class="pageHeader">
                <nav role="navigation" class="naviHead">
                    <div class="layout"><a href="index.php">
                            <div class="logo">ÇİP</div>
                        </a><a href="#" id="navTrigger1">Menu</a>
                        <div class="header-menu-menu">
                            <ul id="menu-menu-glowne" class="menu">
                                <li id="menu-item-4" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4"><a
                                            href="index.php"><span data-hover="Anasayfa">Anasayfa</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

        <div class="form">

            <ul class="tab-group">
                <li class="tab"><a href="#signup">Kayıt Ol</a></li>
                <li class="tab active"><a href="#login">Giriş Yap</a></li>
            </ul>

            <div class="tab-content">

                <div id="login">
                    <h1>Hoşgeldiniz!</h1>

                    <form action="giris.php" method="post" autocomplete="off">

                        <div class="field-wrap">
                            <label>
                                Email <span class="req">*</span>
                            </label>
                            <input type="email" required autocomplete="off" name="email"/>
                        </div>

                        <div class="field-wrap">
                            <label>
                                Parola <span class="req">*</span>
                            </label>
                            <input type="password" required autocomplete="off" name="password"/>
                        </div>

                        <button class="button button-block" name="login">GİRİŞ YAP</button>

                    </form>

                </div>

                <div id="signup">

                    <form action="giris.php" method="post" autocomplete="off">

                        <div class="top-row">
                            <div class="field-wrap">
                                <label>
                                    Ad<span class="req">*</span>
                                </label>
                                <input type="text" required autocomplete="off" name='firstname'/>
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Soyad<span class="req">*</span>
                                </label>
                                <input type="text" required autocomplete="off" name='lastname'/>
                            </div>
                        </div>

                        <div class="field-wrap">
                            <label>
                                Email<span class="req">*</span>
                            </label>
                            <input type="email" required autocomplete="off" name='email'/>
                        </div>

                        <div class="field-wrap">
                            <label>
                                Parola Oluştur<span class="req">*</span>
                            </label>
                            <input type="password" required autocomplete="off" name='password'/>
                        </div>

                        <button type="submit" class="button button-block" name="register">Kayıt Ol</button>
                    </form>
                </div>
              </div>
           </div> 
        </header>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<script>
    particlesJS.load('particles-js', 'particles.json',
        function () {
            console.log('JSON yükleniyor...')
        })
</script>

<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

<script src="js/index.js"></script>

</body>
</html>
