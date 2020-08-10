import React from 'react';

function   TableRow (props) {
    let { name, description, price, categories, colors, stock } = props.productData;
    return(
        <tr>
            <td>{ name }</td>
            <td>{ description }</td>
            <td>$ { price }</td>
            <td>
                <ul>
                    {
                        categories.map(function (category, idx) {
                            return <li key={idx}>{category} </li>
                        })
                    }
                </ul>
            </td>
            <td>
                <ul>
                    {
                        colors.map(function ( color, idx) {
                            return <li key = { idx } style = {{ color : color}} > { color }</li>
                        })

                    }
                </ul>

            </td>
            <td> { stock }</td>
        </tr>
    )
}




export default TableRow;