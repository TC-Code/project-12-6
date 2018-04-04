$(function() {
  var url = "https://restcountries.eu/rest/v2/name/";
  var countriesList = $("#countries");

  $("#search").on("click", searchCountries);

  function searchCountries() {
    var countryName = $("#country-name").val();
    if (!countryName.length) countryName = "Poland";
    $.ajax({
      url: url + countryName,
      method: "GET",
      success: showCountriesList
    });
  }

  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
      $("<div>")
        .appendTo(countriesList)
        .addClass("country");
      $("<div>")
        .appendTo(".country")
        .addClass("flag-box");
      $("<img>")
        .attr("src", item.flag)
        .attr("alt", "flag")
        .appendTo(".flag-box")
        .addClass("flag");
      $("<div>")
        .text(item.name)
        .appendTo(".country")
        .addClass("country-name");

      $("<div>")
        .appendTo(countriesList)
        .addClass("capital");
      $("<div>")
        .text("Capital")
        .appendTo(".capital")
        .addClass("list-item");
      $("<div>")
        .text(item.capital)
        .appendTo(".capital")
        .addClass("information");

      $("<div>")
        .appendTo(countriesList)
        .addClass("region");
      $("<div>")
        .text("Region")
        .appendTo(".region")
        .addClass("list-item");
      $("<div>")
        .text(item.region)
        .appendTo(".region")
        .addClass("information");

      $("<div>")
        .appendTo(countriesList)
        .addClass("population");
      $("<div>")
        .text("Population")
        .appendTo(".population")
        .addClass("list-item");
      $("<div>")
        .text(item.population)
        .appendTo(".population")
        .addClass("information");

      $("<div>")
        .appendTo(countriesList)
        .addClass("languages");
      $("<div>")
        .text("Language(s)")
        .appendTo(".languages")
        .addClass("list-item");
      $("<div>")
        .text(item.languages[0].name)
        .appendTo(".languages")
        .addClass("information");

      $("<div>")
        .appendTo(countriesList)
        .addClass("currency");
      $("<div>")
        .text("Currency")
        .appendTo(".currency")
        .addClass("list-item");
      $("<div>")
        .text(item.currencies[0].name)
        .appendTo(".currency")
        .addClass("information");
    });
  }
});
