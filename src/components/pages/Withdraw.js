import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Withdraw = () =>{
    const balance = useSelector(state => state.balanceReducer.balance);
    const loan = useSelector(state => state.loanReducer.loan);
    const dispatch = useDispatch();
    const onWithDrawHandle = () =>{
        dispatch({type:"WITHDRAW", payload:10})
    }
    const applyLoanHandle = () =>{
        dispatch({type:"APPLY"});
    }
    return (
        <div className = "container">
            <h1>WithDraw</h1>
            <h3>Current Balance: {balance} </h3>
            <button className="btn btn-success" onClick = {onWithDrawHandle}>Withdraw @10</button>
            <hr />
            <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
            <button className ="btn btn-warning" onClick = {applyLoanHandle}>Apply Loan</button>
        </div>
    )
}

export default Withdraw;