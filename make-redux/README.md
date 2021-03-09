# redux 学习笔记
- 纯函数  
一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。  
- 函数的返回结果只依赖于它的参数。
- 函数执行过程里面没有副作用。

# 优化性能
我们修改 stateChanger，让它修改数据的时候，并不会直接修改原来的数据 state，而是产生上述的共享结构的对象：
```
function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state // 没有修改，返回原来的对象
  }
}
```

# 再次优化，将 `appState` 和 `stateChanger` 可以合并到一起去
```
function stateChanger (state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}
```

createStore 内部的 state 不再通过参数传入，而是一个局部变量 let state = null。createStore 的最后会手动调用一次 dispatch({})，dispatch 内部会调用 stateChanger，这时候的 state 是 null，所以这次的 dispatch 其实就是初始化数据了。createStore 内部第一次的 dispatch 导致 state 初始化完成，后续外部的 dispatch 就是修改数据的行为了。  

我们给 stateChanger 这个玩意起一个通用的名字：reducer，不要问为什么，它就是个名字而已，修改 createStore 的参数名字：  
```

function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

```

这是一个最终形态的 createStore，它接受的参数叫 reducer，reducer 是一个函数，细心的朋友会发现，它其实是一个纯函数（Pure Function）。  

# reducer
createStore 接受一个叫 reducer 的函数作为参数，这个函数规定是一个纯函数，它接受两个参数，一个是 state，一个是 action。  

如果没有传入 state 或者 state 是 null，那么它就会返回一个初始化的数据。如果有传入 state 的话，就会根据 action 来“修改“数据，但其实它没有、也规定不能修改 state，而是要通过上节所说的把修改路径的对象都复制一遍，然后产生一个新的对象返回。如果它不能识别你的 action，它就不会产生新的数据，而是（在 default 内部）把 state 原封不动地返回。  
reducer 是不允许有副作用的。你不能在里面操作 DOM，也不能发 Ajax 请求，更不能直接修改 state，它要做的仅仅是 —— 初始化和计算新的 state。  
```
// 定一个 reducer
function reducer (state, action) {
  /* 初始化 state 和 switch case */
}
// 生成 store
const store = createStore(reducer)
// 监听数据变化重新渲染页面
store.subscribe(() => renderApp(store.getState()))
// 首次渲染页面
renderApp(store.getState())
// 后面可以随意 dispatch 了，页面自动更新
store.dispatch(...)
```