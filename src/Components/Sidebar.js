import React from 'react';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Paper} from 'paper-react';


const Sidebar = () => {
  return(
   
    <div className="row" >
                           <div className="col-12">
                                <h4 className="mb-0">My financials</h4>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-10 myback">
                                <div className="container backdata" >
                                    <div className="row">
                                        <div className="col-12 col-md-3" style={{'border-right':'1px solid rgb(200, 199, 199)'}}>
                                            <p className="mb-0">Debit Accounts</p>
                                            <h3>3</h3>
                                            <p className="mb-0 mt-3">Credit Accounts</p>
                                            <h3>3</h3>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="ml-5">
                                            <p className="mb-0">Debit Balance</p>
                                            <h3>$ 12500</h3>
                                            <p className="mb-0 mt-3">Credit Outstanding</p>
                                            <h3>$ 3800</h3>
                                            </div>
                                        </div>  
                                        <div className="col-12 col-md-5">
                                            <p className="mb-0">Looking for best option to maximise your savings and optimise your expenses?</p>
                                            <button className="mt-2 button1">YES <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>

  );
}

export default Sidebar;