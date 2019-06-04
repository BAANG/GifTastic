


$(document).on("click", "button", function() { // On click event listener for <button> tags
    var topic = $(this).attr("data-topic");
    console.log(topic)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=5FzCS8nECS5DZZ0WLDqTc8yZ7NZSLg82&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        console.log(response);
        
        var results = response.data;
        
        for (var i = 0; i < results.length; i++) {
            
            var gifDiv = $('<div>')
            
            var p =  $('<p>')
            $(p).text(results[i].rating)
            
            var gifImage = $('<img>')
            gifImage.attr("src", results[i].images.fixed_height.url)
            
            $(gifDiv).append(p)
            $(gifDiv).append(gifImage)
            
            $("#gifPlace").prepend(gifDiv)
        }
    });
});


    
$(document).ready(function() { // On document load...

})
