// import './index.css';
import airbnblogo from "../images/airbnb1.png"
export default function Navbar()
{
    return(
        <>
            <nav className="flex h-24 py-5 px-9 shadow-md">
            <img src={airbnblogo} alt="airbnblogo"/>
            </nav>
        </>
    )
 
}