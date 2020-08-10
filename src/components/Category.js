import React from 'react';

function Category (props) {
    let {categoryName} = props;
    return(
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {categoryName}
				</div>
            </div>
        </div>

    )
}

export default Category;