{% extends './layout.tpl' %}

{% block content %}
  {% for index in essay %}
  <div class="essay-item" onclick="window.location.href='/index/{{index.id}}/essay'">
    <span class="essay-item-number">{{index.id}}</span>
    <div class="essay-item-text">
      <p class="essay-title">{{index.title}}</p>
      <p class="essay-time">{{index.created_time_display}}</p>
    </div>
  </div>
  {% endfor %}
{% endblock %}