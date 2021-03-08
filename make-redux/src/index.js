
let appState = {
  title: {
    text: 'Redux example',
    color: 'red'
  },
  content: {
    text: 'Redux example`s content is here!',
    color: 'blue'
  }
}

//生产这种 state 和 dispatch 的集合
function createStore (state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  return { getState, dispatch, subscribe }
}


function renderApp(appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}
// 渲染title部分
function renderTitle(title) {
  const TitleDom = document.getElementById('title')
  TitleDom.innerHTML = title.text
  TitleDom.style.color = title.color
}

//渲染content部分
function renderContent(content) {
  const ContentDom = document.getElementById('content')
  ContentDom.innerHTML = content.text
  ContentDom.style.color = content.color
}

// 监听数据变化
function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState()))

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
renderApp(store.getState()) // 把新的数据渲染到页面上