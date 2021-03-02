# React 组件
react组件使用 `render()` 接收输入的数据并返回需要展示的内容，展示的内容由react元素构成。  

1.创建一个继承于React.Componente的class
2.创建render()方法并实现  
```
class Welcome extends React.Component {
  render() {
    return <div>Welcome</div>;
  }
}
```
**自定义组件名称必须以大写字母开头**  

# 组件数据管理
React元素会将 JSX 所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为 “props”。
组件有两个重要的属性props 和 state。
 `this.props` 通常出现在组件使用外部数据。
`this.state` 和 `this.setState()` 通常用于组件维护内部数据。
组件的props属性是**只读的**，它们总是在整个应用中从父组件传递到子组件。子组件永远不能将 prop 送回父组件。**这有助于维护单向数据流。即组件不能修改自身的props。**
组件的state属性是私有的，并且完全受控于当前组件。随用户操作、网络响应或者其他变化而需要动态更新UI的可以通过更新其state来实现。

**修改this.state需要通过this.setState()方法，不要直接修改this.state**
state的更新可能是异步的
state的更新会被合并

当组件的状态发生变化时，组件会再次调用render()方法重新渲染。

# React组件生命周期
`分为三个阶段：挂载阶段、更新阶段和卸载阶段`
#### 挂载阶段：组件即将开始被添加到DOM阶段。(初始化阶段)
- 设置组件的默认属性
```
static defaultProps = {
    name: 'sls',
    age:23
};
//or
Counter.defaltProps={name:'default name'}
```

- 设置组件的初始化形态
```
constructor() {
    super();
    this.state = {number: 0}
}
```

- componentWillMount()
`组件即将被渲染到页面之前触发，此时可以进行开启定时器、向服务器发送请求等操作`

- render()
`组件渲染`

- componentDidMount()
`组件已经被渲染到页面中后触发：此时页面中有了真正的DOM的元素，可以进行DOM相关的操作`

##### 更新阶段：一旦组件被添加到DOM，它只有在 props 或state发生变化时才可能更新和重新渲染。(运行中阶段)
- componentWillRecieveProps()
`组件接收到属性时触发`

- shouldComponentUpdate()
```
当组件接收到新属性，或者组件的状态发生改变时触发。组件首次渲染时并不会触发
shouldComponentUpdate(newProps, newState) {
    if (newProps.number < 5) return true;
    return false
}
//该钩子函数可以接收到两个参数，新的属性和状态，返回true/false来控制组件是否需要更新。
```
一般通过该函数用来优化性能：  
当一个React项目需要更新一个小组件时，很可能需要父组件更新自己的状态。而一个父组件的重新更新会造成它旗下所有的子组件重新执行render()方法，形成新的虚拟DOM，再用diff算法对新旧虚拟DOM进行结构和属性的比较，决定组件是否需要重新渲染
无疑这样的操作会造成很多的性能浪费，所以我们开发者可以根据项目的业务逻辑，在shouldComponentUpdate()中加入条件判断，从而优化性能
例如React中的就提供了一个PureComponent的类，当我们的组件继承于它时，组件更新时就会默认先比较新旧属性和状态，从而决定组件是否更新。值得注意的是，PureComponent进行的是浅比较，所以组件状态或属性改变时，都需要返回一个新的对象或数组

- componentWillUpdate()
组件即将被更新时触发

- componentDidUpdate()
组件被更新完成后触发。页面中产生了新的DOM的元素，可以进行DOM操作

#### 卸载阶段：组件被销毁并从 DOM 中删除。这是组件生命周期的最后阶段。(销毁阶段)
- componentWillUnmount
组件被销毁时触发。这里我们可以进行一些清理操作，例如清理定时器，取消Redux的订阅事件等等。

> 可以深入了解一下hooks组件  [hooks和react生命周期的关系](https://segmentfault.com/a/1190000019900931)

一些重要的生命周期方法(钩子函数)：
1. componentWillMount() – 在渲染之前执行，在客户端和服务器端都会执行。
2. componentDidMount() – 仅在第一次渲染后在客户端执行。
3. componentWillReceiveProps() – 当从父类接收到 props 并且在调用另一个渲染器之前调用。
4. shouldComponentUpdate() – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false。
5. componentWillUpdate() – 在 DOM 中进行渲染之前调用。
6. componentDidUpdate() – 在渲染发生后立即调用。
7. componentWillUnmount() – 从 DOM 卸载组件后调用。用于清理内存空间。

# React生命周期


# React组件事件处理

React元素同html标签元素一样，可以响应事件，语法要求：
1. react事件的命名采用小驼峰
2. 传入一个函数作为事件处理函数
3. 需要显示调用 prevent default 方法来阻止默认行为
4. 在JavaScript中，类的方法默认不会绑定this，所以如果直接在react元素的响应事件方法中访问this，得到的值是undefined。因此，需要通过bind绑定  
详见index.html代码文件中button的调用  