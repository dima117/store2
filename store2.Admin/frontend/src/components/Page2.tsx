import * as React from 'react';

import { MyAPI, MyAPIModels } from '../api/lib/myAPI';

interface Page2State {
  items: MyAPIModels.Xxx[];
}

export class Page2 extends React.Component<{}, Page2State> {
  state: Page2State = {
    items: []
  };

  public componentDidMount() {
    const client = new MyAPI({ baseUri: 'https://localhost:5001' });

    client.doStuff().then(res => {
      this.setState({ items: res });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>page 2</h1>
        <ol>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {index}. {item.name} {item.surname}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
