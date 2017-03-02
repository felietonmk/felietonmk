$.getJSON(location.protocol + "//" + location.host + "/data/dates.json", function(x) {
  if(x["num"] <= id) $("#next").hide();
});