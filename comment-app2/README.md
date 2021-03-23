# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 个人编写reducer习惯：
1. 定义action types
2. 编写reducer
3. 编写跟这个 reducer 相关的 action creators

# 文件放置位置
所有的 Dumb 组件都放在 components/ 目录下，所有的 Smart 的组件都放在 containers/ 目录下  

Dumb 组件就是 View（负责渲染），Smart 组件就是 Controller（Presenter），State 其实就有点类似 Model。  
该project为使用了react-redux构建的comment-app  
