import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { Page1, StateProps, DispatchProps } from '../components/Page1';
import { State } from '../reducers';
import { increment, decrement } from '../actions';

interface RouteProps {
    login?: string;
}

interface OwnProps extends RouteComponentProps<RouteProps> {

}

function mapStateToProps(state: State, ownProps: OwnProps): StateProps {
    const { login } = ownProps.match.params;

    if (!login) {
        throw new Error();
    }

    return { login, count: state.page1.count };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps{
    return {
        onIncrement: (value: number) => dispatch(increment(value)),
        onDecrement: (value: number) => dispatch(decrement(value))
    };
}  

export const Page1Container = connect<StateProps, DispatchProps, OwnProps, State>(
    mapStateToProps,
    mapDispatchToProps
)(Page1);