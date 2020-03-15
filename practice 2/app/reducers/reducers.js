import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initState = {
    frontNum: 0, // 被加數、被減數、被乘數、被除數
    backNum: 0, // 加數、減數、乘數、除數
    countType: null, // 運算方式
};

// 按下等於後的計算
const calculateNumber = (state) => {
    let answer = 0;
    switch (state.countType) {
    case actionTypes.ADD:
        answer = state.frontNum + state.backNum;
        break;
    case actionTypes.SUB:
        answer = state.frontNum - state.backNum;
        break;
    case actionTypes.MULTI:
        answer = state.frontNum * state.backNum;
        break;
    case actionTypes.DIVI:
        answer = state.frontNum / state.backNum;
        break;
    default:
        answer = 0;
    }
    return answer;
};
const calculator = (state = initState, action) => {
    switch (action.type) {
    // 輸入數字
    case actionTypes.NUM:
        return Object.assign({}, state, {
            backNum: state.backNum * 10 + action.num,
        });
    // 輸入加減乘除
    case actionTypes.ADD:
    case actionTypes.SUB:
    case actionTypes.MULTI:
    case actionTypes.DIVI:
        return {
            frontNum: state.backNum,
            backNum: 0,
            countType: action.type,
        };
    // 重置數字
    case actionTypes.RESET:
        return Object.assign({}, state, {
            frontNum: 0,
            backNum: 0,
            countType: null,
        });
    // 按下等於
    case actionTypes.CALCULATE:
        return Object.assign({}, state, {
            frontNum: 0,
            backNum: calculateNumber(state),
            countType: null,
        });
    default:
        return state;
    }
};

const calculateReducer = combineReducers({
    calculator,
});

export default calculateReducer;
