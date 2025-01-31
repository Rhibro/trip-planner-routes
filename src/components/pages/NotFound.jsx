import React from "react";
import Footer from "../Footer";


export default function NotFound() {
    return (
        <>
        <div>
            <h1>404 - Page Not Found</h1>
            <p className="notFound">The page you are looking for does not exist.</p>
            <p className="notFound">:(</p>
        </div>
        <Footer />
        </>
    );
}