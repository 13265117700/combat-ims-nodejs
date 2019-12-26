const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('.table-container').on('click','#userDelete', this.userDelete);
    $('#userExit').on('click',this.userExit);
  },

  userDelete:function(){
    let index = $(this).data('index');
    console.log(index,132)
    $.ajax({
      url:'/admin/user',
      data:{index},
      type:'DELETE',
      success:function(data){
        console.log(data)
        if(data.code === 200){
          alert('删除成功!')
          location.reload();
        }else{
          data.message
        }
      },
      error:function(err){
        console.log(err)
      },
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