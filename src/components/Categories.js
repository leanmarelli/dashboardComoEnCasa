import React, { Component } from 'react';
// import Category from './Category';
import ComoEnCasaCategories from './ComoEnCasaCategories';

// const categories = [
//     ' Desayuno',
//     ' Almuerzo',
//     ' Merienda',
//     ' Cena',
//     ' Snack'
   
// ]





class Categories extends Component {

    constructor() {
        super();
        this.state = {
            category: null,
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
                category: info.data,
            }))
        });
    }

    render() {
        const { category } = this.state;
        console.log(category);
          return (
              <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                      <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                      </div>
                      <div className="card-body">
                          <div className="row">
                              {
                                  category && <ComoEnCasaCategories categorytData={ category } />

                              }
                          </div>
                      </div>
                  </div>
              </div>
          )
      }
    
}

export default Categories;



