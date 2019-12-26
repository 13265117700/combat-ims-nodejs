{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="content-control">
    <a href="/admin/classify">返回</a>
  </div>
  <div class="form-section">
    <div class="form-item">
      <input id="classifyName" type="text" class="form-input" placeholder="请输入分类名称" onfocus="this.placeholder=''" onblur="this.placeholder='请输入分类名称'" >
    </div>
    <div class="form-item">
      <button id="classifySubmit" class="form-button">添加</button>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/classify_create.js"></script>
{% endblock %}