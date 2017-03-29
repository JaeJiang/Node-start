

$.ajax({
    url:'/user.action',
    method: 'get',
    success:function(data){
        $('#root').html(data); 
    },
    error:function(error){
        console.log(error)
    }
})