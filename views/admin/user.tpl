{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="content-control">
    <a href="/admin/user_create">添加用户</a>
  </div>
  <div class="content-table">
    <table class="table-container">
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>角色</th>
        <th>创建时间</th>
        <th>设置</th>
        <th>操作</th>
      </tr>
      {% for val in users %}
      <tr>
        <td>{{val.name}}</td>
        <td>{{val.phone}}</td>
        <td>{{val.role_display}}</td>
        <td>{{val.created_time_display}}</td>
        <td><a href="/admin/user/{{val.id}}/edit">编辑</a></td>
        <td><button id="userDelete" data-index="{{val.id}}" class="delete">删除</button></td>
      </tr>
      {% endfor %}
    </table>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/user.js"></script>
{% endblock %}

