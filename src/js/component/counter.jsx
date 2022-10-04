
import React from "react";


const Counter = (props) => {
	return (
		<div className="row">
  <div className="col-12 bg-dark">
    <div className="card bg-dark ">
        <div className="card-body" >
                           
 <nav aria-label="...">
  <ul className="pagination pagination-lg d-flex justify-content-center">
    <li className="page-item active" aria-current="page">
     </li>
    <li className="page-item"><a className="page-link"><i className="far fa-clock"></i></a></li>
    <li className="page-item"><a className="page-link">{props.horas4}</a></li>
    <li className="page-item"><a className="page-link">{props.horas3}</a></li>
    <li className="page-item"><a className="page-link">{props.horas}</a></li>
    <li className="page-item"><a className="page-link">{props.cienminutos}</a></li>
    <li className="page-item"><a className="page-link">{props.minutos}</a></li>
    <li className="page-item"><a className="page-link">{props.segundos}</a></li>
  </ul>
</nav>
        </div>
        </div>
        </div>
        </div>
	);
};

export default Counter;