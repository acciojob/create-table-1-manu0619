function insert_Row() {
    // Get the table element by its ID
    let table = document.getElementById('sampleTable');
    
    // Create a new row element
    let newRow = document.createElement('tr');
    
    // Create the first cell and set its content
    let cell1 = document.createElement('td');
    cell1.innerHTML = 'New Cell1';
    
    // Create the second cell and set its content
    let cell2 = document.createElement('td');
    cell2.innerHTML = 'New Cell2';
    
    // Append the cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    
    // Insert the new row at the top of the table
    table.insertBefore(newRow, table.firstChild);
}
