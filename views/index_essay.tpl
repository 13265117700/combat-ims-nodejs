{% extends './layout.tpl' %}

{% block content %}
  <div class="essay-content">
      <span class="essay-content-title">{{essay.title}}</span><br>
      <span class="essay-content-time">{{essay.created_time}}</span><br>
      <span class="essay-content-text">{{essay.content}}</span>
  </div>
{% endblock %}