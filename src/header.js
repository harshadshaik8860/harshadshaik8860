import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{

    return(
        <nav>
            <ul>
                <li><Link to="/" className="pagelink">Home</Link> </li>

               

                <li> <Link to="/api4" className="pagelink">api4</Link> </li>

                <li> <Link to="/hook1" className="pagelink">Hook1</Link> </li>

                <li> <Link to="/hook2" className="pagelink">hook2</Link> </li>
                <li> <Link to="/1/hook3" className="pagelink">hook3</Link> </li>
                <li> <Link to="/0/banglore/hook4" className="pagelink">hook4</Link> </li>

                <li> <Link to="/api5" className="pagelink">api5</Link> </li>

                <li> <Link to="/state" className="pagelink">stateapi4</Link> </li>
                <li> <Link to="/stateone" className="pagelink">stateone</Link> </li>
                <li> <Link to="/statetwo" className="pagelink">statetwo</Link> </li>
                <li> <Link to="/state6" className="pagelink">statesix</Link> </li>
                <li> <Link to="/0/hook5" className="pagelink">hook5</Link> </li>
                <li> <Link to="/props" className="pagelink">myprops</Link> </li>
                <li> <Link to="/validation" className="pagelink">Validation</Link> </li>
                <li> <Link to="/api1" className="pagelink">ApI 1</Link> </li>
                <li> <Link to="/api2" className="pagelink">ApI 2</Link> </li>
            </ul>
        </nav>
    )
}
export default Header;