var queryURL = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=dac408cb31584307b54bf94d83582e21';
var NYTData;
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

  NYTData = response;

console.log(NYTData)
});

  var searchTerm;
  var requestedNumber;
  var startYearSearch;
  var endYearSearch;

function getData() {
  searchTerm = $("#searchTerm").val();
  requestedNumber = $("#requestedNumber").val();
  startYearSearch = $("#startYearSearch").val();
  endYearSearch = $("#endYearSearch").val();

  event.preventDefault();
  var article;
  var description;
  for (let i = 0; i < requestedNumber; i++) {
    var titleH4 = $("<h4>");
    titleH4.text(NYTData.articles[i].title);
    $("#appended-articles").append(titleH4);
    var authorP = $("<p>")
    authorP.text(NYTData.articles[i].author)
    $("#appended-articles").append(authorP)

    NYTData.articles[i].source;
    NYTData.articles[i].title;
    NYTData.articles[i].author;
    NYTData.articles[i].description;
    NYTData.articles[i].url;
    NYTData.articles[i].publishedAt;
  }
  // console.log(searchTerm);
  // console.log(requestedNumber);
  // console.log(startYearSearch);
  // console.log(endYearSearch + "");

};

$("#submit").on("click", getData);

