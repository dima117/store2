import * as React from 'react';

import { MyAPI, MyAPIModels } from './api/lib/myAPI';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';

import { BrowserRouter, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <div className="App">
          <Route path="/p1/:login" component={Page1} />
          <Route path="/p2" component={Page2} />
          <div className="App-intro">
            {this.state.items.map((item, index) => (
              <p className="App-item" key={index}>
                {index}. {item.name} {item.surname}
              </p>
            ))}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
