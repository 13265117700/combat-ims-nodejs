const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#loginSubmit').on('click',this.loginSubmit);
  },

  loginSubmit:function(){
    let phone= $('#userPhone').val();
    let password = $('#userPassword').val();

    if(!phone || !password){
      alert('请输入参数!')
      return
    }

    $.ajax({
      url:'/admin/login',
      data:{phone,password},
      type:'POST',
      beforeSend: function() {
        $("#loginSubmit").attr("disabled",true);
      },
      success:function(data){
        if(data.code === 200){
          alert('登陆成功!')
          location.href = '/admin/essay'
        }else{
          data.message
        }
      },
      error:function(err){
        console.log(err)
      },
      complete: function() {
        $("#loginSubmit").attr("disabled",false);
      }
    })
    console.log(phone,password)
  }
}

PAGE.init()