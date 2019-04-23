import * as React from 'react';

import { Layout } from './components/Layout/Layout';
import { Page1Container } from './containers/Page1Container';
import { Page2Container } from './containers/Page2Container';
import { initStore } from './services/store';

import { Provider, connect } from 'react-redux';
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

import { RouterLocation } from 'tmp-react-router';
import { State } from './reducers';

interface RouterOwnProps {
    render: (location: RouterLocation | null) => React.ReactNode;
}

interface RouterStateProps {
    location: RouterLocation | null;
}

function mapRouterStateToProps(
    state: State,
    ownProps: RouterOwnProps
): RouterStateProps {
    return { location: state.location };
}

class Router extends React.Component<RouterStateProps & RouterOwnProps> {
    render() {
        return this.props.render(this.props.location);
    }
}

const ConnectedRouter = connect<RouterStateProps, {}, RouterOwnProps, State>(
    mapRouterStateToProps
)(Router);

class App extends React.Component {
    public render() {
        const store = initStore();

        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store}>
                    <div className="App">
                        <Layout>
                            <ConnectedRouter
                                render={(location: RouterLocation | null) => {
                                    if (!location) {
                                        return null;
                                    }

                                    switch (location.key) {
                                        case 'PAGE1':
                                            return <Page1Container />;
                                        case 'PAGE2':
                                            return <Page2Container />;
                                        default:
                                            return (
                                                <>404: {location.pathname}</>
                                            );
                                    }
                                }}
                            />
                        </Layout>
                    </div>
                </Provider>
            </JssProvider>
        );
    }
}

export default App;
