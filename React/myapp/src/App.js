import React, { Component } from 'react';
import { ReactDOM } from 'react';
import Person from './Component/Person';

// function App() {
//   // return (
//   //   <div>
//   //     <h1>Hello World</h1>
//   //     <p>
//   //       Men his start blast glorious by nor. Girls dear stalked tis from long
//   //       soon glare. Day break are in suffice.
//   //     </p>
//   //   </div>
//   // );

//   return React.createElement(
//     'div',
//     { className: 'App' },
//     React.createElement('h1', null, 'Hello World'),
//     <Person />
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person />
      </div>
    );
  }
}

export default App;
