<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  {% block css %}
  <link rel="stylesheet" href="/stylesheets/index.css">
  {% endblock %}
</head>
<body>
<div class="wrapper">
    <header class="page-header">
      <div class="header-wrapper">
        <a href="/" class="header-logo">
          <img src="/images/mercedes_logo.jpg" alt="logo" class="logo">
        </a>
        <button class="page-login"><a href="/admin/login">登录</a></button>
      </div>
    </header>
    <div class="page-body">
      <nav class="body-nav">
        <ul class="nav-list">
          <li class="nav-item"><a href="/">全部文章</a></li>
          {% for val in classify %}
          <li class="nav-item"><a href="/index/{{val.id}}/paging">{{val.name}}</a></li>
          {% endfor %}
        </ul>
      </nav>
      <div class="essay-container">
        {% block content %}
        {% endblock %}
      </div>
    </div>
    <footer class="page-footer">
      <span class="description">IMS-极客学院练习</span>
    </footer>
  </div>
 
  {% block js %}
  {% endblock %}
</body>
</html>