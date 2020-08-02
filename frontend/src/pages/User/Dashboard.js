import React, { Component } from 'react'

import Nav from '../../components/Nav/Nav.js'

/* 
LoggedIn state must be true to access this page
*/

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="w-screen h-screen">
                <Nav />
                <div className="dashboard-container w-screen h-auto p-5 flex flex-row">

                    <div className="dashboard-left w-1/5 h-full mr-8 flex flex-col items-center">

                        <div className="dashboard-user flex flex-col items-center mb-6 p-5 bg-white rounded-md shadow-lg">

                            <div className="flex flex-col items-center">
                                <div className="image-placeholder h-24 w-24 m-5 rounded-full bg-hammrMint"></div>
                                <h1 className="text-lg font-bold">Khalea Berry</h1>
                                <h3 className="text-md text-hammrMint">@northkhalea</h3>
                            </div>

                            
                        </div>



                    </div>

                    <div className="dashboard-right w-full h-full flex flex-col">

                        <div className="dashboard-nav">
                            <ul className="flex flex-row border-b">
                                <li className="m-1 mb-0 p-2 rounded text-hammrMint"><a className="border-l border-t border-r rounded-t py-2 px-4 hover:text-white  hover:bg-gray-400" href="#Bookmarks">Bookmarks</a></li>
                                <li className="m-1 mb-0 p-2 rounded text-hammrMint"><a className="border-l border-t border-r rounded-t py-2 px-4 hover:text-white  hover:bg-gray-400" href="#Products">Products</a></li>
                                <li className="m-1 mb-0 p-2 rounded text-hammrMint"><a className="border-l border-t border-r rounded-t py-2 px-4 hover:text-white  hover:bg-gray-400" href="#Communities">Communities</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
