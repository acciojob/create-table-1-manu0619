function insert_Row() {
  // Get the table element by its ID
  let table = document.getElementById('sampleTable');
  
  // Create a new row element
  let newRow = document.createElement('tr');
  
  // Create the first cell and set its content
  let cell1 = document.createElement('td');
  cell1.textContent = 'New Cell1'; // Set text content directly
  
  // Create the second cell and set its content
  let cell2 = document.createElement('td');
  cell2.textContent = 'New Cell2'; // Set text content directly
  
  // Append the cells to the new row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  
  // Insert the new row at the top of the table
  table.tBodies[0].insertBefore(newRow, table.rows[0]); // Ensures it's inserted as the first row
}
