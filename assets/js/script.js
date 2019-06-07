$("#search-gif").on("click", function() { // Clears search input value on click
    $(this).val("");
});

$("#add-gif").on("click", function(event) { // On click event listener for add gif button
    // prevent form from submitting
    event.preventDefault();

    var searchTerm = $("#search-gif").val().trim();
    console.log(searchTerm);

    var newButton = $("<button>")
    newButton.addClass("btn btn-info gifBtn");
    newButton.attr("data-topic", searchTerm);
    newButton.text(searchTerm);

    $("#button-place").after(newButton);

    $("#search-gif").val("");
});


$(document).on("click", "button", function() { // On click event listener for <button> tags
    var topic = $(this).attr("data-topic");
    console.log(topic)
    
    if (this.classList.contains("trending")) {
        queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=5FzCS8nECS5DZZ0WLDqTc8yZ7NZSLg82&limit=12"
    } else {
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=5FzCS8nECS5DZZ0WLDqTc8yZ7NZSLg82&limit=12";
    }
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        console.log(response);
        
        var results = response.data;
        
        for (var i = 0; i < results.length; i++) {
            
            var gifDiv = $('<div>')

            var rating = results[i].rating
            
            var p =  $('<p>')
            $(p).text("Rating: " + rating.toUpperCase())
            
            var gifImage = $('<img class="giphy">')
            gifImage.attr("data-state", "still")
            gifImage.attr("src", results[i].images.fixed_height_still.url)
            gifImage.attr("data-animate", results[i].images.fixed_height.url)
            gifImage.attr("data-still", results[i].images.fixed_height_still.url)
            
            $(gifDiv).addClass("col-lg-4 col-sm-6 col-xs-12")
            $(gifDiv).append(p)
            $(gifDiv).append(gifImage)
            
            $("#gifPlace").prepend(gifDiv)

        }
    });
});

$(document).on("click", ".giphy", function() { //Event listner for GIFs --CLICK TO ANIMATE--
    var state = $(this).attr('data-state');
    console.log(state);

    if (state === 'still') {
        var animate = $(this).attr('data-animate');
        $(this).attr('src', animate);
        state = 'animate';
      }
});


    
$(document).ready(function() { // On document load...
    // TODO: Create functional dynamic button generator
});
