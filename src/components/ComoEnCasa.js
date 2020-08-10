import React, { Component } from 'react';

class ComoEnCasa extends Component {
    constructor() {
        super();
        this.state = {
            product: null,
        }
    }


    apiCall = (endPoint, callback) => {
        fetch(endPoint)
            .then(response => response.json())
            .then(info => callback(info))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        let endPoint = 'http://localhost:4060/api/products';
        this.apiCall(endPoint, (info) => {
            this.setState(prevState => ({
                product: info.data,
            }))
        });
    }

    render() {
        const { product } = this.state;
        console.log( product );
        return (
            <div className="container my-5">
                <div className="row">

                    <div className="col-12">
                        <h2 className="alert alert-info">Productos</h2>
                    </div>

                    {
                        product && product.map((product, idx) => {
                            return (
                                <div className="col-4" key={idx}>
                                    <div className="card my-4">
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">
                                                <b>Description:</b> {product.description} <br />
                                            </p>
                                            <p className="card-text">
                                                <b>Price:</b> {product.price} <br />
                                            </p>
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

export default ComoEnCasa;
