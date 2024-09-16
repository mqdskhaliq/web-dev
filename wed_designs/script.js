function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName(
    "Sheet1"
  );
  var email = e.parameter.Email;
  sheet.appendRow([email]);
  return ContentService.createTextOutput("Success");
}
