import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface StateProps {
    login: string;
    count: number;
}

export interface DispatchProps {
    onIncrement: (value: number) => void;
    onDecrement: (value: number) => void;
}

export class Page1 extends React.Component<StateProps & DispatchProps> {

    onClickBtnInc = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.target instanceof HTMLButtonElement) {
            const value = Number(e.target.dataset.value);
            this.props.onIncrement(value);
        }
    }

    onClickBtnDec = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.target instanceof HTMLButtonElement) {
            const value = Number(e.target.dataset.value);
            this.props.onDecrement(value);
        }
    }

    render() {
        const { login, count } = this.props;

        return <>
            <Helmet title={`p1 - ${login}`}>
                <meta charSet="utf-8" />
                <meta name="description" content="Test page with login and counter" />
            </Helmet>
            <h1>page 1</h1>
            <p>login: {login}</p>
            <p>counter: {count}</p>
            <p>
                <button onClick={this.onClickBtnInc} data-value="1">+1</button>
                <button onClick={this.onClickBtnInc} data-value="10">+10</button>
                <button onClick={this.onClickBtnDec} data-value="10">-10</button>
                <button onClick={this.onClickBtnDec} data-value="1">-1</button>
            </p>
        </>;
    }
}