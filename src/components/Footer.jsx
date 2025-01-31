import { Link } from "react-router";

export default function Footer() {
    return (
    <div className="footerBody">
        <ul>
            <div>
                <Link to='/'>
                    <p className="footerLink">Home</p>
                </Link>            
            </div>
            <div>
                <Link to='/createtrip'>
                    <p className="footerLink">Create a trip</p>
                </Link>
            </div>
            <div>
                <Link to='/tripdetails'>
                    <p className="footerLink">Trip details</p>
                </Link>
            </div>
        </ul>
    </div>
    )
} 