import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { Page1, StateProps, DispatchProps } from '../components/Page1';
import { State } from '../reducers';
import { increment, decrement } from '../actions';

function mapStateToProps(state: State): StateProps {
    if (!state.location) {
        throw new Error('invalid location');
    }

    const { login } = state.location.params as any;
    if (!login) {
        throw new Error('invalid login');
    }

    return { login, count: state.page1.count };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps{
    return {
        onIncrement: (value: number) => dispatch(increment(value)),
        onDecrement: (value: number) => dispatch(decrement(value))
    };
}  

export const Page1Container = connect<StateProps, DispatchProps, {}, State>(
    mapStateToProps,
    mapDispatchToProps
)(Page1);