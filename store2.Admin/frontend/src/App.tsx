import * as React from 'react';

import { Layout } from './components/Layout/Layout';
import { Page1Container } from './containers/Page1Container';
import { Page2Container } from './containers/Page2Container';
import { initStore } from './services/store';

import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  public render() {
    const store = initStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Layout>
              <Route path="/p1/:login" component={Page1Container} />
              <Route path="/p2" component={Page2Container} />
            </Layout>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
