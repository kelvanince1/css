let spreadsheet = document.getElementById('spreadsheet');

let table = document.createElement('table');
let tableBody = document.createElement('tbody');
let tr = document.createElement('tr');
let td = document.createElement('td');

table.appendChild(tableBody);

tableBody.appendChild(tr);

for (let i = 0; i < 20; i++) {
  let input = document.createElement("input");
  input.type = "text";
  let th = document.createElement('th');
  th.width = '45';
  th.appendChild(input);
  tr.appendChild(th)
}

for (let i = 0; i < 20; i++) {
  let tr = document.createElement('tr');
  for (let j = 0; j < 20; j++) {
    let input = document.createElement("input");
    input.type = "text";
    let td = document.createElement('td');
    td.appendChild(input);
    tr.appendChild(td);
  }
  tr.id = i;
  tableBody.appendChild(tr);
}
spreadsheet.appendChild(table);
