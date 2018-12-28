import React, { Component } from 'react';
class ToDo extends Component {
  render() {
    return (
        <div className='App'>
      <li> A too-do will go here </li>
      <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
       </li>
    </div>
    );
  }
}

export default ToDo;
