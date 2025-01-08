let counter = 1; // Initialize a global counter

function insertRow() {
    // Get the table element by its ID
    let table = document.querySelector('#sampleTable');
    
    // Add a new row with incremented cell values using innerHTML
    table.innerHTML += `<tr><td>${counter}</td><td>${counter + 1}</td></tr>`;
    
    // Increment the counter by 2 for the next row
    counter += 2;
}
