import _ from 'lodash'
import printMe from './print'
import './index.css'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button')

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me'
  btn.onclick = printMe

  element.classList.add('hello')

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());