import * as React from 'react';

import { Layout } from './components/Layout/Layout';
import { Page1Container } from './containers/Page1Container';
import { Page2Container } from './containers/Page2Container';
import { initStore } from './services/store';

import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point'
});

class App extends React.Component {
  public render() {
    const store = initStore();

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
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
      </JssProvider>
    );
  }
}

export default App;
