import logo from './logo.svg';
import './App.css';


  var string1 = '안녕하세요.';
  var string2 = '반갑습니다.';
  var greeting = `${string1} ${string2}`;
  var product = { name:'도서', price: '4200원'};
  var message = `제품 ${product.name}의 가격은 ${product.name}입니다.`;
  var multiLine = `문자열 1
  문자열 2`;
  var value1 = 1;
  var value2 = 2;
  var boolValue = false;
  var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
  var operator2 = `${boolValue ? '참' : '거짓'}입니다.`;


function App() {
  return (
    <div>
      <text>1) 'string1 + string2': {greeting}</text>
      <br/>
      <text>2) 'product': {message}</text>
      <br/>
      <text>3) multiLine: {multiLine}</text>
      <br/>
      <text>4) operator1: {operator1}</text>
      <br/>
      <text>5) operator2: {operator2}</text>
    </div>
  );
}

export default App;
