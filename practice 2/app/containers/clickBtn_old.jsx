import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import BtnFunc from '../components/button';

const ClickBtn = connect()(({ dispatch }) => (
    <div className="calculate__board">
        <div className="calculate__board--rows">
            <BtnFunc text={7} onClick={() => dispatch(actions.inputNumber(7))} />
            <BtnFunc text={8} onClick={() => dispatch(actions.inputNumber(8))} />
            <BtnFunc text={9} onClick={() => dispatch(actions.inputNumber(9))} />
            <BtnFunc text="+" onClick={() => dispatch(actions.addNumber())} />
        </div>
        <div className="calculate__board--rows">
            <BtnFunc text={4} onClick={() => dispatch(actions.inputNumber(4))} />
            <BtnFunc text={5} onClick={() => dispatch(actions.inputNumber(5))} />
            <BtnFunc text={6} onClick={() => dispatch(actions.inputNumber(6))} />
            <BtnFunc text="-" onClick={() => dispatch(actions.subNumber())} />
        </div>
        <div className="calculate__board--rows">
            <BtnFunc text={1} onClick={() => dispatch(actions.inputNumber(1))} />
            <BtnFunc text={2} onClick={() => dispatch(actions.inputNumber(2))} />
            <BtnFunc text={3} onClick={() => dispatch(actions.inputNumber(3))} />
            <BtnFunc text="X" onClick={() => dispatch(actions.multiNumber())} />
        </div>
        <div className="calculate__board--rows">
            <BtnFunc text={0} onClick={() => dispatch(actions.inputNumber(0))} />
            <BtnFunc text="C" onClick={() => dispatch(actions.resetNumber())} />
            <BtnFunc text="=" onClick={() => dispatch(actions.countNumber())} />
            <BtnFunc text="/" onClick={() => dispatch(actions.diviNumber())} />
        </div>
    </div>
));

export default ClickBtn;
