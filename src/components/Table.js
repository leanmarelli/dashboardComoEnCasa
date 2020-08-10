import React, { Component } from 'react';

//  import products from "../data/products.json";
// import TableRow from './TableRow';
  import ComoEnCasa from './ComoEnCasa';



class  Table extends Component {
   
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

    render(){
        const { product } = this.state;
        console.log(product);
        return (
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" >
                           
                           
                                {
                                    product && <ComoEnCasa productData={product} />
                                      
                                }
                            
                        </table>
                    </div>
                </div>
            </div>
         ) }
       

}

export default Table;