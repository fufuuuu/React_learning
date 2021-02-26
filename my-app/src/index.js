import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}. </h2>;
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class Square extends React.Component {
  //利用state来实现记忆的功能
  constructor(props) {
    super(props);
    this.state= {
      value: null,  //初始化value
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//define Clock Component
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
//mount : 钩子函数
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }

  tick() {
    this.setState(
      {date: new Date()}
    );
  }
  render() {
    return (
      <div>
        <FormattedDate date ={this.state.date} />
      </div>
    )
  }

}

//0.0  疑惑点：组件构建手法类似于闭包？？？
class Game extends React.Component {

  render() {
    return (
      //调用模块从这里开始！！！
      <div className="game">
        <Clock />
        <ShoppingList name='Mark'/>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// 渲染生成dom树

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
