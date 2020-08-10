import React from 'react';

// Components
import Category from './Category';

const categories = [
    'Category 01',
    'Category 02',
    'Category 03',
    'Category 04',
]

function CategoriesBis() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            categories.map(function (category, idx) {
                                return <Category key={idx} categoryName={category} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesBis;