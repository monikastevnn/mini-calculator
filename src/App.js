import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      number1:null, 
      number2:null,
      operate:null,
      result:null
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const number1=parseInt(this.refs.number1.value);
    const number2=parseInt(this.refs.number2.value);
    const operate=this.refs.operate.value;

    var result;
    switch(operate){
      case'+': result=number1+number2;
      break;
      case'-': result=number1-number2;
      break;
      case'*': result=number1*number2;
      break;
      case'/': result=number1/number2;
      break;
    }
    this.setState({number1,number2,operate,result});
    

  }

  renderresult(){
    const{number1,number2,operate,result}=this.state;
    if(this.state.result){
      return(
        <div>
        <br/>
        <p className="success">Result: {number1,number2,operate,result}</p>
        </div>
        );
    }
  }
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>

      <label>Input Number:</label>
      <input type="number" ref="number1" className="control"/>
      <input type="number" ref="number2" className="control"/>
      <br/>

      <label>Operate:</label>
      <select ref="operate" className="control">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
      </select><br/>

      <button className="resultbtn">COUNT</button>
      </form>
      {this.renderresult()}
      </div>
    );
  }
}

ReactDOM.render(
<App/>,
document.getElementById('root')
);

export default App;
