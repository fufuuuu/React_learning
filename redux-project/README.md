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

connect 现在是接受一个参数 mapStateToProps，然后返回一个函数，这个返回的函数才是高阶组件。它会接受一个组件作为参数，然后用 Connect 把组件包装以后再返回。  

既然可以通过connect来传递mapstatetoprops来告诉他如何获取，整合状态，我们也可以想到，可以给他传递另外的一个参数来告诉他我们的组件要如何来触发dispatch。我们把这个参数叫 mapDispatchToProps  

```
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
```

可以看出结果会返回一个对象，这个对象内容会同样被 connect 当作是 props 参数传给被包装的组件。  
### 可以在返回的对象内部定义一些函数，这些函数会用到 dispatch 来触发特定的 action ###

# 组件复用
组件划分为 Dumb 和 Smart 组件，约定俗成地把它们分别放到 components 和 containers 目录下。  

Dumb 基本只做一件事情 —— 根据 props 进行渲染。而 Smart 则是负责应用的逻辑、数据，把所有相关的 Dumb（Smart）组件组合起来，通过 props 控制它们。  

Smart 组件可以使用 Smart、Dumb 组件；而 Dumb 组件最好只使用 Dumb 组件，否则它的复用性就会丧失。  

要根据应用场景不同划分组件，如果一个组件并不需要太强的复用性，直接让它成为 Smart 即可；否则就让它成为 Dumb 组件。  

还有一点要注意，Smart 组件并不意味着完全不能复用，Smart 组件的复用性是依赖场景的，在特定的应用场景下是当然是可以复用 Smart 的。而 Dumb 则是可以跨应用场景复用，Smart 和 Dumb 都可以复用，只是程度、场景不一样。  

