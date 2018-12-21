import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { Page1, StateProps, DispatchProps } from '../components/Page1';
import { State } from '../reducers';

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
    return {};
}  

export const Page1Container = connect<StateProps, DispatchProps, OwnProps, State>(
    mapStateToProps,
    mapDispatchToProps
)(Page1);