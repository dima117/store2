import * as React from 'react';
import { Helmet } from 'react-helmet';
import { cn } from '@bem-react/classname';

import Button from '@material-ui/core/Button';

const cnPage1 = cn('Page1');

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
        if (e.currentTarget instanceof HTMLButtonElement) {
            const value = Number(e.currentTarget.dataset.value);
            this.props.onIncrement(value);
        }
    }

    onClickBtnDec = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget instanceof HTMLButtonElement) {
            const value = Number(e.currentTarget.dataset.value);
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
                <Button className={cnPage1('Button')} variant="contained" color="primary" onClick={this.onClickBtnInc} data-value="1">+1</Button>
                <Button className={cnPage1('Button')} variant="contained" color="secondary" onClick={this.onClickBtnInc} data-value="10">+1</Button>
                <Button className={cnPage1('Button')} variant="contained" color="default" onClick={this.onClickBtnDec} data-value="10">-10</Button>
                <Button className={cnPage1('Button')} variant="contained" color="inherit" onClick={this.onClickBtnDec} data-value="1">-1</Button>
            </p>
        </>;
    }
}