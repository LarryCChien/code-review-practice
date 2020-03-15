import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NumberBlock = ({ num }) => (<div className="calculate__view">{num}</div>);

// 回傳需要顯示的資料。
const mapStateToProps = state => ({
    num: state.calculator.backNum,
});

NumberBlock.propTypes = {
    num: PropTypes.number.isRequired,
};

const ViewNumber = connect(
    mapStateToProps,
)(NumberBlock);

export default ViewNumber;
