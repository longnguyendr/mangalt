$(function () {
    $('#name').keyup(function (e) { 
        var newValue= $("#name").val();
        $.ajax({
            type: "POST",
            url: "/howdy",
            data: JSON.stringify({name: newValue}),
            contentType: 'application/json; charset=utf-8'
        }).done(
            function(data) {
                $('#greeting').text(data.greeting);
            }
        );    
    });
})