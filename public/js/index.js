

$.ajax({
    url:'/user.action',
    method: 'get',
    success:function(arr){
       
        var liStr = arr.map(function(ele){
            return '<h2>'+ele+'</h2>'
        }).join('');

        $('#root').html(liStr); 
    },
    error:function(error){
        console.log(error)
    }
})

$.ajax({
    url:'/list.action',
    method: 'get',
    success:function(arr){
        var liStr = arr.map(function(ele){
            return '<li>'+ele+'</li>'
        }).join('');

        $('#shop').html(liStr); 
    },
    error:function(error){
        console.log(error)
    }
})