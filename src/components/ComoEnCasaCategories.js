import React, { Component } from 'react';

class ComoEnCasaCategories extends Component {
    constructor() {
        super();
        this.state = {
            categories: null,
        }
    }


    apiCall = (endPoint, callback) => {
        fetch(endPoint)
            .then(response => response.json())
            .then(info => callback(info))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        let endPoint = 'http://localhost:4060/api/categories';
        this.apiCall(endPoint, (info) => {
            this.setState(prevState => ({
                categories: info.data,
            }))
        });
    }

    render() {
        const { categories } = this.state;
        console.log(categories);
        return (
            <div className="container my-5">
                <div className="row">

                    <div className="col-12">
                        <h2 className="alert alert-info">Categories</h2>
                    </div>

                    {
                        categories && categories.map((category, idx) => {
                            return (
                                <div className="col-4" key={idx}>
                                    <div className="card my-4">

                                        <div className="card-body">
                                            <h5 className="card-title">{category.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ComoEnCasaCategories;
