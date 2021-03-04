# CLOCK 是最好理解生命周期的的一个事例  

I will explore some important function in lifecycle of component such as 'constructor','componentwillmount','componentdidmount','componentwillunmount'.  
See what have they done in a lifecycle.  

In general, all initialization of the component's own state is done in the constructor  

Now we start from an app about making a clock.  


# Firstly,it`s a static webpage.  
```
class Clock extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date()
    }
  }
  render () {
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}
```
Component launches, such as Ajax data pulls, timer launches, etc., can be placed in ComponentWillMount  
# A timer can update the date
```
class Clock extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date()
    }
  }
  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }
  ...
}
```
We use setInterval at ComponentWillMount to start a timer that updates the date in the page every second so that the page can move.  

# An important problem
Remember to unmount the component! Multiple hides and displays cause React.js to rebuild and destroy the Clock component, rebuilding a timer with each construction. The timer is not cleared when the component is destroyed, so you will see more and more errors. And because of the closure nature of JavaScript, this can lead to serious memory leaks.  
We can see the warning in console.  

```

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    at Clock (http://localhost:3000/static/js/main.chunk.js:28:5)

```

This is where **ComponentWillunMount** comes in handy, and its role is to do the cleanup when the component is destroyed.