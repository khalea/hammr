import React from 'react'
import Nav from '../../components/Nav/Nav.js';

export default function Home() {
    return (
        <div className="home-container w-full h-full">
            <Nav/>

        <div className="home-placeholder m-8 flex justify-start">
            <p className="text-2xl">
                This is a marketplace for digital communication tools. 
            </p>
        </div>

        </div>
    )
}
