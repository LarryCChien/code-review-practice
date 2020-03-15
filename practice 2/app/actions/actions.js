import * as actionTypes from './actionTypes';

export const addNumber = () => ({ type: actionTypes.ADD });

export const subNumber = () => ({ type: actionTypes.SUB });

export const multiNumber = () => ({ type: actionTypes.MULTI });

export const diviNumber = () => ({ type: actionTypes.DIVI });

export const resetNumber = () => ({ type: actionTypes.RESET });

export const countNumber = () => ({ type: actionTypes.CALCULATE });

export const inputNumber = num => ({ type: actionTypes.NUM, num });
