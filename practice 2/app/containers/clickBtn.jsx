import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import BtnFunc from '../components/button';

const mapDispatchToProps = dispatch => ({
  input_Num: num => dispatch(actions.inputNumber(num)),
  add_Num: () => dispatch(actions.addNumber()),
  sub_Num: () => dispatch(actions.subNumber()),
  multi_Num: () => dispatch(actions.multiNumber()),
  divi_Num: () => dispatch(actions.diviNumber()),
  count_Num: () => dispatch(actions.countNumber()),
  reset_Num: () => dispatch(actions.resetNumber()),
});
const ClickBtn = connect(
  null, // 沒有傳入 mapStateToProps ，所以用 null。
  mapDispatchToProps,
)(({
  input_Num, add_Num, sub_Num, multi_Num, divi_Num, count_Num, reset_Num,
}) => (
    <div className="calculate__board">
        <div className="calculate__board--rows">
          <BtnFunc text={7} onClick={(e) => { e.preventDefault(); input_Num(7); }} />
          <BtnFunc text={8} onClick={(e) => { e.preventDefault(); input_Num(8); }} />
          <BtnFunc text={9} onClick={(e) => { e.preventDefault(); input_Num(9); }} />
          <BtnFunc text="+" onClick={(e) => { e.preventDefault(); add_Num(); }} />
        </div>
        <div className="calculate__board--rows">
          <BtnFunc text={4} onClick={(e) => { e.preventDefault(); input_Num(4); }} />
          <BtnFunc text={5} onClick={(e) => { e.preventDefault(); input_Num(5); }} />
          <BtnFunc text={6} onClick={(e) => { e.preventDefault(); input_Num(6); }} />
          <BtnFunc text="-" onClick={(e) => { e.preventDefault(); sub_Num(); }} />
        </div>
        <div className="calculate__board--rows">
          <BtnFunc text={1} onClick={(e) => { e.preventDefault(); input_Num(1); }} />
          <BtnFunc text={2} onClick={(e) => { e.preventDefault(); input_Num(2); }} />
          <BtnFunc text={3} onClick={(e) => { e.preventDefault(); input_Num(3); }} />
          <BtnFunc text="X" onClick={(e) => { e.preventDefault(); multi_Num(); }} />
        </div>
        <div className="calculate__board--rows">
          <BtnFunc text={0} onClick={(e) => { e.preventDefault(); input_Num(0); }} />
          <BtnFunc text="C" onClick={(e) => { e.preventDefault(); reset_Num(); }} />
          <BtnFunc text="=" onClick={(e) => { e.preventDefault(); count_Num(); }} />
          <BtnFunc text="/" onClick={(e) => { e.preventDefault(); divi_Num(); }} />
        </div>
    </div>
));

export default ClickBtn;
