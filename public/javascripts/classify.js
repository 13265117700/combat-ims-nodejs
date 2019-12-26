const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('.table-container').on('click','#classifyDelete',this.classifyDelete);
    $('#userExit').on('click',this.userExit);
  },

  classifyDelete:function(){
    let index = $(this).data('index');
    console.log(index)
    $.ajax({
      url:'/admin/classify',
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