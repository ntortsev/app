import React, { useEffect, useState } from 'react';

function App() {
  const buttonsList = [
    'AC',
    '+/-',
    '%',
    '<=',
    '7',
    '8',
    '9',
    '÷',
    '4',
    '5',
    '6',
    '×',
    '1',
    '2',
    '3',
    '-',
    ',',
    '0',
    '=',
    '+',
  ];

  const [result, setResult] = useState(0);

  const [displayValue, setDisplayValue] = useState('0');
  const [arrDisplayValue, setArrDisplayValue] = useState(['0']);

  console.log(arrDisplayValue);
  useEffect(() => {
    setDisplayValue(arrDisplayValue.join(''));
  }, [arrDisplayValue]);

  const checkSymbol = (button) => {
    switch (button) {
      case 'AC':
        setArrDisplayValue(['0']);
        break;

      case '+/-':
        if (arrDisplayValue[arrDisplayValue.length - 1] === '+') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '-']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '-') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '+']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1]) {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '+']);
        } else {
          setArrDisplayValue([...arrDisplayValue]);
        }
        break;

      case '%':
        setArrDisplayValue([...arrDisplayValue, '%']);
        break;
      case '<=':
        setArrDisplayValue([...arrDisplayValue.slice(0, -1)]);
        break;
      case '7':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['7']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '7']);
        }
        break;
      case '8':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['8']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '8']);
        }
        break;
      case '9':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['9']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '9']);
        }
        break;
      case '÷':
        if (arrDisplayValue[arrDisplayValue.length - 1] === '÷') {
          setArrDisplayValue([...arrDisplayValue]);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '+') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '÷']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '-') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '÷']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '×') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '÷']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '÷']);
        }
        break;
      case '4':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['4']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '4']);
        }
        break;
      case '5':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['5']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '5']);
        }
        break;
      case '6':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['6']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '6']);
        }
        break;
      case '×':
        if (arrDisplayValue[arrDisplayValue.length - 1] === '×') {
          setArrDisplayValue([...arrDisplayValue]);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '+') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '×']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '-') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '×']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '÷') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '×']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '×']);
        }
        break;
      case '1':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['1']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '1']);
        }
        break;
      case '2':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['2']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '2']);
        }
        break;
      case '3':
        if (arrDisplayValue[0] === '0') {
          setArrDisplayValue(['3']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '3']);
        }
        break;
      case '-':
        if (arrDisplayValue[arrDisplayValue.length - 1] === '-') {
          setArrDisplayValue([...arrDisplayValue]);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '+') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '-']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '÷') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '-']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '×') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '-']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '-']);
        }
        break;
      case ',':
        if (arrDisplayValue[arrDisplayValue.length - 1] === ',') {
          setArrDisplayValue([...arrDisplayValue]);
        } else {
          setArrDisplayValue([...arrDisplayValue, ',']);
        }

        break;
      case '0':
        setArrDisplayValue([...arrDisplayValue, '0']);
        break;
      case '=':
        let concatinate = simplifyArray(arrDisplayValue);
        let res = calculate(concatinate);
        if (String(res).includes('.')) {
          setResult(calculate(concatinate).toFixed(2));
        } else {
          setResult(calculate(concatinate));
        }

        break;
      case '+':
        if (arrDisplayValue[arrDisplayValue.length - 1] === '+') {
          setArrDisplayValue([...arrDisplayValue]);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '-') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '+']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '÷') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '+']);
        } else if (arrDisplayValue[arrDisplayValue.length - 1] === '×') {
          setArrDisplayValue([...arrDisplayValue.slice(0, -1), '+']);
        } else {
          setArrDisplayValue([...arrDisplayValue, '+']);
        }
        break;

      default:
        console.log('даже не представляю что должно произойти');
    }
  };

  function calculate(arr) {
    let result = 0;
    let operator = '';

    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        switch (operator) {
          case '+':
            result += parseInt(arr[i]);
            break;
          case '-':
            result -= parseInt(arr[i]);
            break;
          case '×':
            result *= parseInt(arr[i]);
            break;
          case '÷':
            result /= parseInt(arr[i]);
            break;
          default:
            result = parseInt(arr[i]);
        }
      } else {
        operator = arr[i];
      }
    }

    return result;
  }

  function simplifyArray(arr) {
    let results = [];
    let numStr = '';

    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) || Number(arr[i]) === 0) {
        numStr += arr[i];
      } else {
        if (numStr !== '') {
          results.push(numStr);
          numStr = '';
        }
        results.push(arr[i]);
      }
    }

    if (numStr !== '') {
      results.push(numStr);
    }

    return results;
  }

  return (
    <div className="calc">
      <input className="calc__expression" type="text" value={displayValue} readOnly={true} />
      <input className="calc__result" type="text" value={result} readOnly={true} />
      <ul className="calc__list">
        {buttonsList.map((button, i) => (
          <li key={i}>
            <button onClick={() => checkSymbol(button)}>{button}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
