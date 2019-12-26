const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#userSubmit').on('click',this.userSubmit);
    $('#userExit').on('click',this.userExit);
  },

  userSubmit:function(){
    let name = $('#userName').val();
    let phone = $('#userPhone').val();
    let password = $('#userPassword').val();
    let role = $('#userRole').val();
    let id = $('#userId').val();
    console.log(name,phone,password,role)
    if(!name || !phone || !password || !role){
      alert('请输入参数')
      return
    }

    $.ajax({
      url:'/admin/user/'+ id + '/edit',
      data:{name,phone,password,role},
      type:'PUT',
      beforeSend: function() {
        $("#userSubmit").attr("disabled",true);
      },
      success:function(data){
        if(data.code === 200){
          alert('编辑成功!')
          location.href = '/admin/user'
        }
      },
      error:function(err){
        console.log(err)
      },
      complete: function() {
        $("#userSubmit").attr("disabled",false);
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