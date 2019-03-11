import React, {PureComponent} from "react";
import ReactDOM from "react-dom";

//-	React.createElement
const divElement = React.createElement
('div', null,
 React.createElement('h1', null, 'Hello,')
);

ReactDOM.render(divElement, document.getElementById('app'));


//-	React.Component

const Temp = (props) => {
    return (<div>{props.val}</div>)
}

class Welcome extends React.Component {
    state = {
        val: 1
    }
    render() {
      return (
      <div classname="app-2">
        <Temp val={this.state.val}/>
        <h1> Zarina</h1>
      </div>
      );
    }
  }

  const app = document.getElementById('app-2');

  ReactDOM.render(<Welcome/>, app-2);

//pureComponent

class Season extends React.PureComponent {  
  render() {
    return <h1>Season</h1>
  }
}

Spring = () => {
  return <h1>Spring</h1>;
}