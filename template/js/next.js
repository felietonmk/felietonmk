$.getJSON(location.protocol + "//" + location.host + "/data/dates.json", function(x) {
  if(x["num"] - 1 <= id) $("#next").hide();
});