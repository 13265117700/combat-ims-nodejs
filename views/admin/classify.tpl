{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="content-control">
    <a href="/admin/classify_create">添加分类</a>
  </div>
  <div class="content-table">
    <table class="table-container">
      <tr>
        <th>ID</th>
        <th>分类名称</th>
        <th>操作</th>
      </tr>
      {% for val in classifys %}
      <tr>
        <td>{{val.id}}</td>
        <td>{{val.name}}</td>
        <td><button id="classifyDelete" data-index="{{val.id}}" class="delete">删除</button></td>
      </tr>
      {% endfor %}
    </table>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/classify.js"></script>
{% endblock %}