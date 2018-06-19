$.ajax({
    url: '/api/getjson',
    success: function(rs) {
        rs = JSON.parse(rs);
        console.log(rs)
        var content = $('#tem').html();
        var tempiler = Handlebars.compile(content);
        var html = tempiler(rs);
        $('#list').html(html)
    }
})