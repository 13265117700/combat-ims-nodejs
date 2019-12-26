{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="content-control">
    <a href="/admin/user">返回</a>
  </div>
  <div class="form-section">
    <div class="form-item">
      <input  id="userName" type="text" class="form-input" placeholder="姓名" onfocus="this.placeholder=''" onblur="this.placeholder='姓名'" >
    </div>
    <div class="form-item">
      <input id="userPhone" type="text" class="form-input" placeholder="电话" onfocus="this.placeholder=''" onblur="this.placeholder='电话'" >
    </div>
    <div class="form-item">
      <input id="userPassword" type="text" class="form-input" placeholder="密码" onfocus="this.placeholder=''" onblur="this.placeholder='密码'" >
    </div>
    <div class="form-item">
      <select id="userRole" class="form-input">
        <option value="0">请选择角色</option>
        <option value="1" {% if user.role == 1 %} eslected {% endif %}>用户管理员</option>
        <option value="2" {% if user.role == 2 %} eslected {% endif %}>文章管理员</option>
      </select>
    </div>
    <div class="form-item">
      <button id="userSubmit" class="form-button">添加</button>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/user_create.js"></script>
{% endblock %}