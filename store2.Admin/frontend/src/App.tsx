import * as React from 'react';
import './App.css';

import { MyAPI, MyAPIModels } from './api/lib/myAPI';

class App extends React.Component<{}, { items: MyAPIModels.Xxx[] }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: []
    };
  }

  public componentDidMount() {
    const client = new MyAPI({ baseUri: 'https://localhost:5001' });

    client.doStuff().then(res => {
      this.setState({ items: res });
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">test</h1>
        </header>
        <div className="App-intro">{this.state.items.map((item, index) =>(
          <p className="App-item" key={index}>
            {index}. {item.name} {item.surname}
          </p>
        ))}</div>
      </div>
    );
  }
}

export default App;
