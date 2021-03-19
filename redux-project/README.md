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

# Dumb component(呆组件)
我们把这种组件叫做 Pure Component，因为它就像纯函数一样，可预测性非常强，对参数（props）以外的数据零依赖，也不产生副作用。写组件的时候尽量写 Dumb Component 会提高我们的组件的可复用性。  

我们可以通过高阶组件帮助我们从 context 取数据，也需要写 Dumb 组件帮助我们提高组件的复用性。所以我们尽量多地写 Dumb 组件，然后用高阶组件把它们包装一层，高阶组件和 context 打交道，把里面数据取出来通过 props 传给 Dumb 组件。  

这个高阶组件起名字叫 connect，因为它把 Dumb 组件和 context 连接（connect）起来了。  

# Connnect

connect 函数接受一个组件 WrappedComponent 作为参数，把这个组件包含在一个新的组件 Connect 里面，Connect 会去 context 里面取出 store。现在要把 store 里面的数据取出来通过 props 传给 WrappedComponent。  


