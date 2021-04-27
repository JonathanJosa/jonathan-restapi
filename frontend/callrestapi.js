var url = "http://localhost:3300/api/users";

function postUser() {
  console.log(url);

  var myName = $('#name').val();
  var myEmail = $('#email').val();
  var myAge = $('#age').val();
  var myComments = $('#comments').val();

  var myuser = {
    name: myName,
    email: myEmail,
    age: myAge,
    comments: myComments
  };

  console.log(myuser);

  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      console.log(data);
      $('#resultado').html(JSON.stringify(data.user));
    },
    data: JSON.stringify(myuser)
  });
}

function getAllUser() {
  console.log(url);

  $.getJSON(url, function(json){
    console.log(json);
    var userArray = json.user;

    var htmlTable = '<table>';

      htmlTable += '<td>' + 'ID'+ '</td>';
      htmlTable += '<td>' + 'Nombre' + '</td>';
      htmlTable += '<td>' + 'Email' + '</td>';
      htmlTable += '<td>' + 'Edad' + '</td>';
      htmlTable += '<td>' + 'Commentarios' + '</td>';

    userArray.forEach(item => {
      console.log(item);
      htmlTable += '<tr>';

        htmlTable += '<td>' + item.id + '</td>';
        htmlTable += '<td>' + item.name + '</td>';
        htmlTable += '<td>' + item.email + '</td>';
        htmlTable += '<td>' + item.age + '</td>';
        htmlTable += '<td>' + item.comments + '</td>';

      htmlTable += '</tr>';

    });
    htmlTable += '</table>';
    $('#resultado').html(htmlTable);

  });
}
