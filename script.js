var queryURL = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=dac408cb31584307b54bf94d83582e21';

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

  // console.log(response);

  for (let i = 0; i < response.articles.length; i++) {
    // console.log(response.articles[i].source);
    // console.log(response.articles[i].title);
    // console.log(response.articles[i].author);
    // console.log(response.articles[i].description);
    // console.log(response.articles[i].url);
    // console.log(response.articles[i].publishedAt);
  }
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
  console.log(searchTerm);
  console.log(requestedNumber);
  console.log(startYearSearch);
  console.log(endYearSearch + "");
}

$("#submit").on("click", getData);