{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="content-control">
    <a href="/admin/essay_create">新建文章</a>
  </div>
  <div class="content-table">
    <table class="table-container">
      <tr>
        <th>index</th>
        <th>标题</th>
        <th>分类</th>
        <th>发布人员</th>
        <th>设置</th>
        <th>操作</th>
      </tr>
      {% for val in essays %}
      <tr>
        <td>{{val.id}}</td>
        <td class="description">{{val.title}}</td>
        <td>{{val.classify_name}}</td>
        <td>{{val.user_name}}</td>
        <td><a href="/admin/essay/{{val.id}}/edit">编辑</a></td>
        <td><button id="essayDelete" data-index="{{val.id}}" class="delete">删除</button></td>
      </tr>
      {% endfor %}
    </table>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/essay.js"></script>
{% endblock %}