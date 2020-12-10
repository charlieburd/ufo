//import the data from data.js
const tableData = data;

//reference the HTML table using d2
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear existing data
    tbody.html("");

    //loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tobudy.append("tr");
        
        //loop though each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {

        });

    });
}