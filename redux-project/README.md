# 生成项目文件redux-project
`create-react-app`
安装一个 React 提供的第三方库 prop-types  

`npm install --save prop-types`
安装好后在 src/ 目录下新增三个文件：Header.js、Content.js、ThemeSwitch.js。  
修改 src/Header.js  
```
import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Header extends Component {
  render () {
    return (
      <h1>React.js 小书</h1>
    )
  }
}
export default Header
```
修改 src/ThemeSwitch.js：  

```
import React, { Component } from 'react'
import PropTypes from 'prop-types'
class ThemeSwitch extends Component {
  render () {
    return (
      <div>
        <button>Red</button>
        <button>Blue</button>
      </div>
    )
  }
}
export default ThemeSwitch
```




