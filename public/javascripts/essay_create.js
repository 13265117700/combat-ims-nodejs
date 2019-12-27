const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#essaySubmit').on('click',this.essaySubmit);
    $('#userExit').on('click',this.userExit);
  },

  essaySubmit:function(){
    let title = $('#essayTitle').val();
    let essay_id = $('#essayId').val();
    let content = $('#essayContent').val();
    let user_id = $('#userId').val();
    console.log(title,essay_id,content,user_id)
    if(!title || !essay_id || !user_id || !content){
      alert('请输入参数!')
      return
    }

    $.ajax({
      url:'/admin/essay_create',
      data:{title,essay_id,user_id,content},
      type:'POST',
      beforeSend: function() {
        $("#essaySubmit").attr("disabled",true);
      },
      success:function(data){
        if(data.code === 200){
          alert('新建成功!')
          location.href = '/admin/essay'
        }else{
          data.message
        }
      },
      error:function(err){
        console.log(err)
      },
      complete: function() {
        $("#essaySubmit").attr("disabled",false);
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

PAGE.init()