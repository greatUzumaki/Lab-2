function CreateTable() {
  if (document.getElementById('zapas').checked) ZapasTable();
  else if (document.getElementById('objem').checked) ObjemTable();
}

function ZapasTable() {
  let z1 = document.getElementById('z1').value;
  let z2 = document.getElementById('z2').value;
  let z3 = document.getElementById('z3').value;
  let z4 = document.getElementById('z4').value;
  let z5 = document.getElementById('z5').value;
  let z6 = document.getElementById('z6').value;
  let z7 = document.getElementById('z7').value;
  let z8 = document.getElementById('z8').value;
  let z9 = document.getElementById('z9').value;
  let z10 = document.getElementById('z10').value;

  let Arr1 = [z1, z2, z3, z4, z5, z6, z7, z8, z9, z10];
  let Arr2 = [z1, z2, z3, z4, z5, z6, z7, z8, z9, z10];

  GenerateTable(Arr1, Arr2);
}

function ObjemTable() {
  let d1 = document.getElementById('d1').value;
  let d2 = document.getElementById('d2').value;
  let d3 = document.getElementById('d3').value;
  let d4 = document.getElementById('d4').value;
  let d5 = document.getElementById('d5').value;
  let d6 = document.getElementById('d6').value;
  let d7 = document.getElementById('d7').value;
  let d8 = document.getElementById('d8').value;
  let d9 = document.getElementById('d9').value;
  let d10 = document.getElementById('d10').value;
}

function GenerateTable(arr1, arr2) {
  let html = '<table border="1">';

  for (let i = 0; i < arr1.length; i++) {
    html += '<tr><td>' + arr1[i] + '</td><td>' + arr2[i] + '</td></tr>';
  }

  html += '</table>';

  document.getElementById('content').innerHTML = html;
}
