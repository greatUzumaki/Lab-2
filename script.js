// Проверка выбора
const CreateTable = () => {
  if (document.getElementById('zapas').checked) ZapasTable();
  else if (document.getElementById('objem').checked) ObjemTable();
  else alert('Выберите множество!');
};

// Заполнение первой таблицы
function ZapasTable() {
  let Arr = [];
  for (let i = 1; i < 11; i++) {
    Arr.push(Number(document.getElementById(`z${i}`).value));
  }

  Arr = RaznZapas(Arr);
  Arr = Arr.map((subArr) => subArr.map((x) => Number(x)));
  console.log(Arr);

  let max = Max(Arr);
  console.log(max);

  Arr = Arr.map((subArr) => subArr.map((x) => FuncS(x, max).toFixed(3)));
  console.log(Arr);

  GenerateTable(Arr);

  Svoistva(Arr);
}

// Разность
const RaznZapas = (arr) => {
  let newArr = [[]];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr.length; j++) {
      let res = arr[i] - arr[j];
      newArr[i][j] = res.toFixed(3);
    }
  }
  return newArr;
};

const FuncS = (x, max) => {
  let sred = max / 2;
  if (x < 0) return 0;
  else if (x >= 0 && x <= sred) return 2 * (x / max) * (x / max);
  else if (x >= sred && x <= max)
    return 1 - 2 * ((((x - max) / (max - 0)) * (x - max)) / (max - 0));
  else return 1;
};

// Заполнение второй таблицы
function ObjemTable() {
  let Arr = [];
  for (let i = 1; i < 11; i++) {
    Arr.push(Number(document.getElementById(`d${i}`).value));
  }

  Arr = RaznObjem(Arr);
  Arr = Arr.map((subArr) => subArr.map((x) => Number(x)));
  console.log(Arr);

  let max = Max(Arr);
  console.log(max);

  Arr = Arr.map((subArr) => subArr.map((x) => FuncT(x, max).toFixed(3)));
  console.log(Arr);

  GenerateTable(Arr);

  Svoistva(Arr);
}

// Разность
const RaznObjem = (arr) => {
  let newArr = [[]];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr.length; j++) {
      let res = arr[i] - arr[j];
      res = Math.abs(res);
      newArr[i][j] = res.toFixed(3);
    }
  }
  return newArr;
};

const FuncT = (x, max) => {
  //спросит про эту строчку у Дыптан, у нас же нет минусов. И спросить про то что нет нолей во 2 таблице
  if (x >= 0 && x <= max) return (max - x) / max;
  else return 0;
};

// Макс элемент
const Max = (Arr) => {
  let max = Arr[0][0];
  for (let i = 0; i < Arr.length; i++) {
    for (let j = 0; j < Arr.length; j++) {
      if (Arr[i][j] > max) {
        max = Arr[i][j];
      }
    }
  }
  return max.toFixed(3);
};

// Генерация таблицы
const GenerateTable = (arr) => {
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
};

// Удаление таблицы
const KillTable = () => {
  document.getElementById('content').innerHTML = '';
  for (let i = 1; i < 8; i++) {
    document.getElementById(`svoistvo${i}`).innerHTML = '';
  }
};

// Свойства
const Svoistva = (arr) => {
  refl = true;
  strongRefl = true;
  strongAntiRefl = true;
  simm = true;
  antiSimm = true;
  aSimm = true;
  tranz = true;
  strongLinear = true;
  weakLinear = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] != 1) {
      refl = false;
      break;
    }
  }

  if (refl) {
    strongAntiRefl = false;
    outerLoop: for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i != j) {
          if (arr[i][j] == 1) {
            strongRefl = false;
            break outerLoop;
          }
        }
      }
    }
  } else {
    strongRefl = false;
    outerLoop: for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i != j) {
          if (arr[i][j] == 0) {
            strongAntiRefl = false;
            break outerLoop;
          }
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] != arr[j][i]) {
        simm = false;
      }

      if (i != j) {
        if (arr[i][j] != 0 || arr[j][i] != 0) {
          antiSimm = false;
        }
      }

      if (arr[i][j] != 0 || arr[j][i] != 0) {
        aSimm = false;
      }
    }
  }

  minArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (!(arr[i][k] >= arr[i][j] && arr[i][k] >= arr[j][k])) {
          tranz = false;
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!(arr[i][j] == 1 || arr[j][i] == 1)) {
        strongLinear = false;
      }
      if (!(arr[i][j] > 0 || arr[j][i] > 0)) {
        weakLinear = false;
      }
    }
  }

  document.getElementById('svoistvo1').innerHTML = refl
    ? strongRefl
      ? 'Сильно'
      : 'Слабо'
    : 'Нет';
  document.getElementById('svoistvo2').innerHTML = !refl
    ? strongAntiRefl
      ? 'Сильно'
      : 'Слабо'
    : 'Нет';
  document.getElementById('svoistvo3').innerHTML = simm ? 'Да' : 'Нет';
  document.getElementById('svoistvo4').innerHTML = antiSimm ? 'Да' : 'Нет';
  document.getElementById('svoistvo5').innerHTML = aSimm ? 'Да' : 'Нет';
  document.getElementById('svoistvo6').innerHTML = strongLinear
    ? 'Сильная'
    : weakLinear
    ? 'Слабая'
    : 'Нет';
  document.getElementById('svoistvo7').innerHTML = tranz ? 'Да' : 'Нет';
};
