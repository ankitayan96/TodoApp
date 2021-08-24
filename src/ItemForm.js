import React from 'react';
import "./App.css"

export class ItemForm extends React.Component {
   state = {
     text: '',
     new: true,
     done: false,
   };
 
   componentDidMount() {
     this.createNew();
   }
 
   createNew = () => {
     this.setState({
       text: '',
       new: true,
       done: false,
     }, () => {
       this.input.focus();
     });
   }
   
   onChange = e => {
     this.setState({ text: e.target.value });
   }
   
   onKeyPress = e => {
     const { onComplete } = this.props;
     
     if ( (e && e.which === 13) || e.keyCode === 13 ) {
       
       if ( this.state.text === '' ) {
         return false;
       }
       
       onComplete && typeof onComplete === 'function' && onComplete(this.state);
       this.createNew();
     }
   }
 
   render() {
      const { text } = this.state;
     
     return (
       <div className="item-form">
         <label htmlFor="newItem">New Item</label> {' '}
         <input
           id="newItem"
           type="text"
           ref={ el => { this.input = el; } }
           autofocus placeholder="Start typing..."
           value={ text }
           onChange={ this.onChange }
           onKeyPress={ this.onKeyPress } />
       </div>
     );
   }
 }
 