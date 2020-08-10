import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Card from './Card';
import LastProduct from './LastProduct';
import Categories from './Categories';
import Footer from './Footer';
import Table from './Table';

const cardData = [
    {
        borderColor: 'border-left-primary',
        title: 'Products in Data Base',
        content: '135',
        icon: 'fa-clipboard-list'

    },

    {
        borderColor: 'border-left-success',
        title: 'Amount in products',
        content: '$546.456',
        icon: 'fa-dollar-sign'

    },

    {
        borderColor: 'border-left-warning',
        title: 'Users quantity',
        content: '38',
        icon: 'fa-user-check'

    }
]



function AppOld () {
   
        return (

            <div id="wrapper">
                <Sidebar />

                <div id="content-wrapper" className="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">
                        <Navbar />
                    </div>

                    {/* Page Content */}
                    <div className="container-fluid">

                        {/* Page Heading */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                        </div>

                        {/*  Row */}
                        <div className="row">
                            {
                                cardData.map(function (oneCard, idx) {
                                    return <Card key={idx} cardInfo={oneCard} />
                                })
                            }
                        </div>
div
                        {/* Content Row*/}
                        <div className="row">
                            <LastProduct />
                            <Categories />
                        </div>

                        <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
                        <Table />
                    </div>

                    <Footer />
                </div>
            </div>
        );
    }


export default AppOld; 
