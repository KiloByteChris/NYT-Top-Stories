// API Key: c64d0a52048b48ec8c6f20d3f4930160
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// add the API key to the URL
url += '?' + jQuery.param({
  'api-key': "RLaf4nOMnhGskphnPKqEQoYGLsMuO4Cg"
});
jQuery(document).ready(function(){
    // GET data from the API
    jQuery.ajax({
        url: url,
        method: 'GET',
    }).done(function(data) {
        console.log(data);
        // select the div where the infomrtion will be displayed
        var artSection = jQuery('.nyt-top-stories-container');
        /*
            Function takes the nyt data and builds a string to display the infromation
        */
        function displayNYTData(i, data) {
            var displayString = "<article class='nytArticle'>";
            // Check for an image by checking the length of the multi media array inside the data
            if(data.results[i].multimedia.length > 0) {
                displayString += "<img class='nytImg' src="+ data.results[i].multimedia[3].url +" />";
            }else{
                displayString += "<p class='noImageFound'>Image Not Available</p>";
            }
            displayString += "<h3 class='nytMainHeader'><a href="+ data.results[i].url +">"+data.results[i].title +" </a></h3>";
            displayString += "<p class='abstract'>"+ data.results[i].abstract +"</p>";
            displayString += "<h4 class='byLine'>"+ data.results[i].byline +"</h4>";
            displayString += "<div class='clearDiv'></div>";
            displayString += "</article>";
            artSection.append(displayString);
        }
        for (var i=0 ; i<10 ; i++) {
            displayNYTData(i, data);
        }
    }).fail(function(err) {
        throw err;
    });
}); // end document ready
