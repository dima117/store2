import { connect } from 'react-redux';

import { Page2, StateProps } from '../components/Page2';
import { State } from '../reducers';

function mapStateToProps(state: State): StateProps {
    return { 
        pages: state.page2.pages,
        error: state.page2.error
    };
}

export const Page2Container = connect<StateProps, {}, {}, State>(
    mapStateToProps
)(Page2);