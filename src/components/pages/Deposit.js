import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from '../../actions/balanceActions';
const Deposit = () =>{
    const balance = useSelector(state => state.balanceReducer.balance);
    const loan = useSelector(state => state.loanReducer.loan);
    const loading = useSelector(state => state.balanceReducer.loading);
    const dispatch = useDispatch();

    const onDepositeHandle = () =>{
        dispatch(balanceActions.depositAsync());
    }

    const applyLoanHandle = () =>{
        dispatch({type: "APPLY"})
    }

    return (
        <div className = "container">
            <h1>Deposit</h1>
            {
                loading ? <h3>Saving Balance...</h3> :  <h3>Current Balance: {balance} </h3>
            }
           
            <button className="btn btn-success" onClick = {onDepositeHandle}>Deposit @50</button>
            <hr />
            <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
            <button className="btn btn-warning" disable ={loan ? true : false} onClick = {applyLoanHandle}>Apply Loan</button>
        </div>
    )
}

export default Deposit;