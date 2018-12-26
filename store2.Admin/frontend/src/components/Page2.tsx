import * as React from 'react';

import { MyAPIModels } from '../api/lib/myAPI';

export interface StateProps {
  items: MyAPIModels.Xxx[];
  error?: string;
}

export interface DispatchProps {
  onInit: () => void;
}

export class Page2 extends React.Component<StateProps & DispatchProps> {
  public componentDidMount() {
    this.props.onInit();
  }

  renderError() {
    const { error } = this.props;

    return error ? <div>{error}</div> : null;
  }

  renderList() {
    const { items } = this.props;

    if (!items.length) return null;

    return <ol>
      {items.map((item, index) => (
        <li key={index}>
          {item.name} {item.surname}
        </li>
      ))}
    </ol>;
  }

  render() {
    return (
      <div className="App">
        <h1>page 2</h1>
        {this.renderError()}
        {this.renderList()}
      </div>
    );
  }
}
