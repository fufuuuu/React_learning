import React,{ Component } from 'react'
import find from 'lodash/find';
import { Icon } from 'react-materialize';
import PRODUCTS from '../../../Data';

const product = find(PRODUCTS, ['id', 1]);

class Star extends Component{
  constructor (props) {
    super(props)
    this.state = {
      index : props.star
     }
  }
  handlestar(ind){
    this.setState({
      index : ind
    })
  }

  render() {
    return(
      <div className="product-review">
        <div className="stars">
          <a onClick={this.handlestar.bind(this,1)}><Icon small id="add-icon" >{this.state.index > 0 ? 'star' : 'star_border'}</Icon></a>
          <a onClick={this.handlestar.bind(this,2)}><Icon small id="add-icon" >{this.state.index > 1 ? 'star' : 'star_border'}</Icon></a>
          <a onClick={this.handlestar.bind(this,3)}><Icon small id="add-icon" >{this.state.index > 2 ? 'star' : 'star_border'}</Icon></a>
          <a onClick={this.handlestar.bind(this,4)}><Icon small id="add-icon" >{this.state.index > 3 ? 'star' : 'star_border'}</Icon></a>
          <a onClick={this.handlestar.bind(this,5)}><Icon small id="add-icon" >{this.state.index > 4 ? 'star' : 'star_border'}</Icon></a>
        </div>
      </div>
    )
  }
}

export default Star;