function doGet() {
    var spreadsheetId = '1C7sPwPIAZenla6IvTyg5XXqilnU7sbWH6vl5l06FOXk'; // Replace with your Google Sheets ID
    var sheetName = 'Sheet1'; // Replace with your sheet name
    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var jsonData = [];
  
    // Convert data to JSON format
    for (var i = 1; i < data.length; i++) {
      var row = {};
      for (var j = 0; j < headers.length; j++) {
        row[headers[j]] = data[i][j];
      }
      jsonData.push(row);
    }
  
    // Output JSON
    return ContentService.createTextOutput(JSON.stringify(jsonData))
      .setMimeType(ContentService.MimeType.JSON);
  }