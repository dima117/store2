import * as React from 'react';

export interface Page1StateProps {
    login: string;
}

export interface Page1DispatchProps {}

interface Page1Props extends Page1StateProps, Page1DispatchProps {}

export class Page1 extends React.Component<Page1Props> {
    render() {
        return <>
            <div>page 1</div>
            <div>login: {this.props.login}</div>
        </>;
    }
}