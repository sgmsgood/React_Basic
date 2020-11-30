import './App.css';

/*1. Spread operator */
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

/*2-1. Spread operator */
  var array1 = ['one', 'two'];
  var array2 = ['three', 'four'];
  const combined1 = [...array1, ...array2];
  const [first, second, three='empty', ...others1] = array1;

  function func(...args) { var [first, ...others1] = args; }

/*2-2. 객체 전개 연산자 사용 */
    var objectOne = { one: 1, two: 2, others2: 0 };
    var objectTwo = { three: 3, four: 4, others2: -1 };
  /* -------------------------------------------------- */
    var combined2 = {
      one: objectOne.one, 
      two: objectOne.two,
      three: objectTwo.three,
      four: objectTwo.four,
    };
  /* -------------------------------------------------- */
    var combined3 = Object.assign({}, objectOne, objectTwo);
    var combined4 = {
      ...objectOne,
      ...objectTwo,
    }
  /* -------------------------------------------------- */
    var combined5 = Object.assign({}, objectTwo, objectOne);
    var combined6 = {
      ...objectTwo,
      ...objectOne,
    }
  /* -------------------------------------------------- */  
    var others2 = Object.assign({}, combined2);
    delete others1.other2;
    var { other, ...other } = combined2;





function App() {
  return (
    <div>
      <div>
        <h3>1. Template string</h3>
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
      <br/>
      <div>
        <h3>2. Spread operator</h3>
        <text>1) combined: {combined1} </text>
        <br/>
        <text>2) 'first': {first}</text>
        <br/>
        <text>3) 'second': {second}</text>
        <br/>
        <text>4) 'three': {three}</text>
        <br/>
        <text>5) 'others': {others2}</text>
        <br/>
        <text>6) 'func': {func(array1)}</text>
      </div>
    </div>
  );
}

export default App;
