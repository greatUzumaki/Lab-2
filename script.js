// Проверка выбора
function CreateTable() {
  if (document.getElementById('zapas').checked) ZapasTable();
  else if (document.getElementById('objem').checked) ObjemTable();
  else alert('Выберите множество!');
}

// Заполнение первой таблицы
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

  let Arr = [z1, z2, z3, z4, z5, z6, z7, z8, z9, z10];

  Arr = RaznZapas(Arr);
  Arr = Arr.map((subArr) => subArr.map((x) => Number(x)));
  console.log(Arr);

  let max = Max(Arr);
  console.log(max);

  Arr = Arr.map((subArr) => subArr.map((x) => FuncS(x, max).toFixed(3)));
  console.log(Arr);

  GenerateTable(Arr);
}

// Разность
function RaznZapas(arr) {
  let newArr = [[]];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr.length; j++) {
      let res = arr[i] - arr[j];
      newArr[i][j] = res.toFixed(2);
    }
  }
  return newArr;
}

function FuncS(x, max) {
  let sred = max / 2;
  if (x < 0) return 0;
  else if (x >= 0 && x <= sred) return 2 * (x / max) * (x / max);
  else if (x >= sred && x <= max)
    return 1 - 2 * ((((x - max) / (max - 0)) * (x - max)) / (max - 0));
  else return 1;
}

// Заполнение второй таблицы
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

  let Arr = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];

  Arr = RaznObjem(Arr);
  Arr = Arr.map((subArr) => subArr.map((x) => Number(x)));
  console.log(Arr);

  let max = Max(Arr);
  console.log(max);

  Arr = Arr.map((subArr) => subArr.map((x) => FuncT(x, max).toFixed(3)));
  console.log(Arr);

  GenerateTable(Arr);
}

// Разность
function RaznObjem(arr) {
  let newArr = [[]];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr.length; j++) {
      let res = arr[i] - arr[j];
      res = Math.abs(res);
      newArr[i][j] = res.toFixed(2);
    }
  }
  return newArr;
}

function FuncT(x, max) {
  if (x < -1.57) return 0;
  else if (x >= -1.57 && x <= 0) return (x + 1.57) / 1.57;
  //спросит про эту строчку у Дыптан, у нас же нет минусов. И спросить про то что нет нолей во 2 таблице
  else if (x >= 0 && x <= 1.57) return (1.57 - x) / 1.57;
  else return 0;
}

// Макс элемент
function Max(Arr) {
  let max = Arr[0][0];
  for (let i = 0; i < Arr.length; i++) {
    for (let j = 0; j < Arr.length; j++) {
      if (Arr[i][j] > max) {
        max = Arr[i][j];
      }
    }
  }
  return max;
}

// Генерация таблицы
function GenerateTable(arr) {
  let html = '<table border="1">';

  html += '<tr><td></td>';
  for (let i = 0; i < 10; i++) {
    html += `<td class="mesto">x${i + 1}</td>`;
  }
  html += '</tr>';

  for (let i = 0; i < 10; i++) {
    html += `<tr><td class="mesto">x${i + 1}</td>`;
    for (let j = 0; j < 10; j++) {
      html += `<td>${arr[i][j]}</td>`;
    }
    html += '</tr>';
  }

  html += '</table>';

  document.getElementById('content').innerHTML = html;
}

// Удаление таблицы
function KillTable() {
  document.getElementById('content').innerHTML = '';
}
