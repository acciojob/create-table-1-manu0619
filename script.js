function insert_Row() {
  // Get the table element by its ID
  let table = document.querySelector("#sampleTable");

  // Add a new row with incremented cell values using innerHTML
  table.innerHTML =
    `<tr><td>New Cell1</td><td>New Cell2</td></tr>` + table.innerHTML;

  // Increment the counter by 2 for the next row
  //   counter += 2;
}
