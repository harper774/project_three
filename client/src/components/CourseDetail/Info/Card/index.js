import React from "react";
import "./style.scss";

function Card() {
    return (
        <div className="card">
            <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <i className="flaticon-question"></i> Is WordPress hosting worth it?
                    </button>
                </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                    Our set he for firmament morning sixth subdue darkness creeping gathered divide our
                    let god moving. Moving in fourth air night bring upon
                </div>
            </div>
        </div>
    );
}

export default Card;