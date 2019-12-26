const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#classifySubmit').on('click',this.classifySubmit);
    $('#userExit').on('click',this.userExit);
  },

  classifySubmit:function(){
    let name = $('#classifyName').val();
    if(!name){
      alert('请输入参数')
      return
    }
    
    $.ajax({
      url:'/admin/classify_create',
      data:{name},
      type:'POST',
      beforeSend: function() {
        $("#classifySubmit").attr("disabled",true);
      },
      success:function(data){
        console.log(data)
        if(data.code === 200){
          alert('添加成功')
          location.href = '/admin/classify'
        }else{
          data.message
        }
      },
      error:function(err){
        console.log(err)
      },
      complete: function() {
        $("#classifySubmit").attr("disabled",false);
      }
    })
  },
  userExit:function(){
    $.ajax({
      url:'/exit',
      type:'GET',
      success:function(data){
        if(data.code === 200){
          alert('退出成功!')
          location.href = '/admin/login'
        }
      },
      error:function(err){
        console.log(err)
      }
    })
  }
}

PAGE.init();