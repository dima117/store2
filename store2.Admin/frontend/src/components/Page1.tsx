import * as React from 'react';

import {RouteComponentProps} from 'react-router-dom';

interface Page1RouteProps {
    login?: string;
}

interface Page1Props extends RouteComponentProps<Page1RouteProps> {

}

export class Page1 extends React.Component<Page1Props> {
    render() {
        return <>
            <div>page 1</div>
            <div>login: {this.props.match.params.login}</div>
        </>;
    }
}