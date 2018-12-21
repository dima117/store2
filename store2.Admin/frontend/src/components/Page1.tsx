import * as React from 'react';

export interface StateProps {
    login: string;
    count: number;
}

export interface DispatchProps {}

export class Page1 extends React.Component<StateProps & DispatchProps> {
    render() {
        const { login, count } = this.props;

        return <>
            <h1>page 1</h1>
            <p>login: {login}</p>
            <p>counter: {count}</p>
        </>;
    }
}