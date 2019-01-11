import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Page2, StateProps, DispatchProps } from '../components/Page2';
import { State } from '../reducers';
import { testRequest } from '../actions';

function mapStateToProps(state: State): StateProps {
    return { 
        pages: state.page2.pages,
        error: state.page2.error
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps{
    return {
        onInit: () => dispatch(testRequest())
    };
}  

export const Page2Container = connect<StateProps, DispatchProps, {}, State>(
    mapStateToProps,
    mapDispatchToProps
)(Page2);