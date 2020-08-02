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

                            <div className="dashboard-nav flex flex-col p-5 items-center">
                                <ul>
                                    <li><a className="inline-block rounded py-1 px-3 text-white bg-hammrMint hover:bg-gray-500 mb-1" href="#Bookmarks">Bookmarks</a></li>
                                    <li><a className="inline-block border border-white rounded text-white bg-hammrMint hover:border-gray-200 hover:bg-gray-500 py-1 px-3 mb-1" href="#Products">Products</a></li>
                                    <li><a className="inline-block border border-white rounded text-white bg-hammrMint hover:border-gray-200 hover:bg-gray-500 py-1 px-3 mb-1" href="#Communties">Communities</a></li>
                                </ul>
                            </div>
                        </div>



                    </div>

                    <div className="dashboard-right w-3/5 h-full flex">

                    </div>

                </div>
            </div>
        )
    }
}
