import { connect } from 'react-redux';
import { Page1, Page1StateProps, Page1DispatchProps } from '../components/Page1';
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../reducers';
import { Dispatch } from 'redux';

interface Page1RouteProps {
    login?: string;
}

interface OwnProps extends RouteComponentProps<Page1RouteProps> {}

function mapStateToProps(state: State, ownProps: OwnProps): Page1StateProps {
    const { login } = ownProps.match.params;

    if (!login) {
        throw new Error();
    }

    return { login };
}

function mapDispatchToProps(dispatch: Dispatch): Page1DispatchProps{
    return {};
}  

export const Page1Container = connect<Page1StateProps, Page1DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Page1);