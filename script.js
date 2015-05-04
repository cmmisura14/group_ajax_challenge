/**
 * Created by codymisura on 5/1/15.
 */
$(document).ready(function(){

    var username;
    var image;
    var projects;
    var githubPage;

    function searchCallback(results){

        username = results.name;
        image = results.avatar_url;
        projects = results.repos_url;
        githubPage = "https://github.com/users/" + $("#searchField").val();

        $("#result").append("<p class='lead'><a href='" + githubPage + "'>Name: " + username + "</a></p><img class ='profilePic' src='" + image + "'>");


    }
   function search(query){
       $.ajax({
           type: 'GET',
           url: 'https://api.github.com/users/' + encodeURI(query) + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
           crossDomain: true,
           Accept: "application/vnd.github.v3+json",
           dataType: 'JSON',
           complete : function (response) {
               console.log('ajax complete');
           },
           success : function (data) {
               console.log(data);
               searchCallback(data);
           },
           error: function (xhr, status) {
               alert('Error: ' + status);
           }
       });
   }



    $(".btn").on("click", function(){
        $("#result").empty();
        var userSearch = $("#searchField").val();
        $("#searchField").val('');

        search(userSearch);
    });
});