{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="content-control">
    <a href="/admin/essay">返回</a>
  </div>
  <div class="form-section">
    <div class="form-item">
      <!-- <p class="form-text">标题:</p> -->
      <input id="essayTitle" type="text" class="form-input" placeholder="请输入标题" onfocus="this.placeholder=''" onblur="this.placeholder='请输入标题'" >
    </div>
    <div class="form-item">
      <!-- <p class="form-text">分类:</p> -->
      <select  id="essayId" class="form-input">
        {% for item in classify %}
        <option value="{{ item.id }}" >{{ item.name }}</option>
        {% endfor %}
      </select>
    </div>
    <div class="form-item">
      <!-- <p class="form-text">管理员:</p> -->
      <select  id="userId" class="form-input">
        <option value="0">请选择管理员</option>
        <option value="1"{% if user.role == 1 %} selected {% endif %}>用户管理员</option>
        <option value="2"{% if user.role == 2 %} selected {% endif %}>文章管理员</option>
      </select>
    </div>
    <div class="form-item">
      <!-- <p class="form-text">内容:</p> -->
      <textarea id="essayContent" class="form-textarea" placeholder="文章内容" onfocus="this.placeholder=''" onblur="this.placeholder='文章内容'"></textarea>
    </div>
    <div class="form-item">
      <button id="essaySubmit" class="form-button">新建</button>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/essay_create.js"></script>
{% endblock %}