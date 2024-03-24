
function scrapeData() {
  var sheet = SpreadsheetApp.openById('1C7sPwPIAZenla6IvTyg5XXqilnU7sbWH6vl5l06FOXk/edit#gid=1274340613').getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  var scrapedData = "";
  for (var i = 0; i < data.length; i++) {
    scrapedData += data[i].join(", ") + "\n"; // Format data as per your requirement
  }
  
  return scrapedData;
}