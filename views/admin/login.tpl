<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <link rel="stylesheet" href="/stylesheets/login.css">
</head>
<body>
  <div class="wrapper">
    <header class="page-header">
      <nav class="header-wrapper">
        <a href="/" class="header-logo">
          <img src="/images/mercedes_logo.jpg" alt="logo" class="logo">
        </a>
      </nav>
    </header>
    <div class="page-body">
      <div class="form-title">
        <span>登录</span>
      </div>
      <div class="form-wrapper">
        <div class="form-item">
          <input id="userPhone" type="text" placeholder="请输入手机号码"" onfocus="this.placeholder=''" onblur="this.placeholder='请输入手机号码'" class="form-input">
        </div>
        <div class="form-item">
          <input id="userPassword" type="text" placeholder="请输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" class="form-input">
        </div>
        <div class="form-item">
          <button id="loginSubmit" class="form-button">登录</button>
        </div>
      </div>
    </div>
    <footer class="page-footer">
      <span class="description">IMS-极客学院练习</span>
    </footer>
  </div>

  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/login.js"></script>
</body>
</html>