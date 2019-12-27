{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="content-control">
    <a href="/admin/essay">返回</a>
  </div>
  <div class="form-section">
    <div class="form-item">
      <input id="essayTitle" type="text" class="form-input" placeholder="请输入标题" onfocus="this.placeholder=''" onblur="this.placeholder='请输入标题'" value="{{essay.title}}">
    </div>
    <div class="form-item">
      <select  id="essayId" class="form-input">
        <option value="0">请选择分类</option>
        {% for item in classify %}
        <option value="{{ item.id }}" {% if item.id == essay.essay_id %} selected="selected" {% endif %}>{{ item.name }}</option>
        {% endfor %}
      </select>
    </div>
    <div class="form-item">
      <select  id="userId" class="form-input">
        {% for val in users %}
        <option value="{{ val.id }}" {% if val.id == essay.user_id %} selected="selected" {% endif %}>{{ val.name }}</option>
        {% endfor %}
      </select>
    </div>
    <div class="form-item">
      <textarea id="essayContent" class="form-textarea" placeholder="文章内容" onfocus="this.placeholder=''" onblur="this.placeholder='文章内容'">{{essay.content}}</textarea>
    </div>
    <div class="form-item">
      <button id="essaySubmit" class="form-button">保存</button>
      <input id="essayIndex"  type="text" hidden value="{{essay.id}}"/>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.4.1.js"></script>
  <script src="/javascripts/essay_edit.js"></script>
{% endblock %}