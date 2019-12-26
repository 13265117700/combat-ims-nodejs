<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  {% block css %}
  <link rel="stylesheet" href="/stylesheets/admin_layout.css">
  {% endblock %}
</head>
<body>
  <div class="wrapper">
    <header class="page-header">
      <div class="header-wrapper">
        <div class="logo-container">
          <img src="/images/mercedes_logo.jpg" alt="logo" class="logo">
          <span>信息管理</span>
        </div>
        <nav class="page-nav">
          <ul>
            {% if userInfo.role == 1 %}
            <li>
              <a class="page-nav-item" href="/admin/user">用户管理</a>
            </li>
            <li>
              <a class="page-nav-item" href="/admin/classify">分类管理</a>
            </li>
            {% endif %}
            <li>
              <a class="page-nav-item" href="/admin/essay">文章管理</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="page-body">
      <div class="page-aside">
        <button id="userExit" class="page-exit">退出</button>
      </div>
      <div class="page-content">
        {% block content %}
        {% endblock %}
      </div>
      <div class="page-footer">Copyright © 2019 极客学院体验技术部出品</div>
    </div>
  </div>

  {% block js %}
  {% endblock %}
</body>
</html>