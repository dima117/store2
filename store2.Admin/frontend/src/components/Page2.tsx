import * as React from 'react';
import { Helmet } from 'react-helmet';

import { MyAPIModels } from '../api/lib/myAPI';

export interface StateProps {
  pages: MyAPIModels.PageListItemDto[];
  error?: string;
}

export class Page2 extends React.Component<StateProps> {

  renderError() {
    const { error } = this.props;

    return error ? <div>{error}</div> : null;
  }

  renderList() {
    const { pages } = this.props;

    if (!pages.length) return null;

    return (
      <ol>
        {pages.map((page, index) => (
          <li key={index}>
            {page.title} ({page.code})
          </li>
        ))}
      </ol>
    );
  }

  render() {
    return (
      <div className="App">
        <Helmet title={`p2 - test data from backend`}>
          <meta charSet="utf-8" />
          <meta name="description" content="Test page with login and counter" />
        </Helmet>
        <h1>page 2</h1>
        {this.renderError()}
        {this.renderList()}
      </div>
    );
  }
}
