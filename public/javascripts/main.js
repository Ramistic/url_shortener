dataURL = {};

$('#urlSubmit').on('click', function(){
    if($('#longURL').val() === ""){
        alert('It\'s empty you fool!')
    } else {
        var shortURLExample = Math.random().toString(36).slice(2,8);
        $('#shortURL').val('localhost:3000/link/' + shortURLExample);
        dataURL = {
          longURL: $('#longURL').val(),
          shortURL: shortURLExample
        };
        console.log(dataURL);
        $.ajax('/', {
            method: "POST",
            data: dataURL,
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log('error: ' + error)
            }
        })
    }
});