import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header= () => {
    const [ show, setShow ] = useState(false) 
    const [ show2, setShow2 ] = useState(false)
    const [ show3, setShow3 ] = useState(false)
    const [ search, setSearch ] = useState(true)
    const [ bars, setBars ] = useState(true)
    // document.body.classList.add('bg-black')
    return ( 
        
        <div className="header">
            { bars? "":
            <div className="sidebar">
                <Link href="/"><img src="/logo.png" alt="" height="37" width="100"/></Link>
                <Link href="/"><a>Home</a></Link>
                <Link href="/shop"><a>Shop <span ><FontAwesomeIcon icon={faChevronDown}/></span></a></Link>
                <Link href="/about-us"><a>About Us</a></Link>
                <Link href="/blog"><a >Blog</a></Link>
                <Link href="/docs"><a >Help</a></Link>
                <Link href="/contactus"><a >Contact Us</a></Link>
                    

            </div>
}
            <div className="head">
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className="envelope"/>
                    support@sorteddeli.com
                </div>
                <div className="social">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </div>
            </div>
            <hr />
            <nav>
                <div className="logo">
                    <Link href="/"><img src="/logo.png" height="104" width="284" alt="" /></Link>  
                </div>
                <div className="navbar">
                    <Link href="/"><a className="hide">Home</a></Link>
                    <Link href="/shop"><a className="hide" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>Shop <span ><FontAwesomeIcon icon={faChevronDown}/></span></a></Link>
                    <Link href="/about-us"><a className="hide">About Us</a></Link>
                    <Link href="/blog"><a className="hide">Blog</a></Link>
                    <Link href="/docs"><a className="hide">Help</a></Link>
                    <Link href="/contactus"><a className="hide">Contact Us</a></Link>
                    {search? <a className="hide" onClick={()=>setSearch(false)}><FontAwesomeIcon icon={faSearch}/></a>:<a className="hide" onClick={()=>setSearch(true)}><FontAwesomeIcon icon={faTimes}/></a>}
                    <Link href="/my-account"><a><FontAwesomeIcon icon={faUser}/></a></Link>
                    <Link href="/cart"><a><FontAwesomeIcon icon={faShoppingCart}/></a></Link>
                    {bars? <a onClick={()=>setBars(false)} className="hide2"><FontAwesomeIcon icon={faBars}/></a>: <a onClick={()=>setBars(true)}><FontAwesomeIcon icon={faTimes}/></a>}
                </div>
                <div className={`hello ${show? "show": "none"}`} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                    <ul>
                        <li  onMouseEnter={()=>setShow2(true)} onMouseLeave={()=>setShow2(false)}> <a > Shop by Category <span className="space"><FontAwesomeIcon icon={faChevronRight}/></span> </a> </li>
                        <li> <a> Shop All Products </a></li>
                        <li onMouseEnter={()=>setShow3(true)} onMouseLeave={()=>setShow3(false)}> <a > Shop by Type <span className="space"><FontAwesomeIcon icon={faChevronRight}/></span> </a></li>  
                    </ul>
                </div>
                <div className={`hello2 ${show2? "show": "none"}` } onMouseEnter={()=>{setShow(true);setShow2(true);}} onMouseLeave={()=>{setShow(false);setShow2(false)}}>
                    <ul>
                        <li> <a> Batter Up </a> </li>
                        <li> <a> Get Saucy </a></li>
                        <li> <a> In Pizza We Crust </a></li>
                        <li> <a> Like No Udder </a> </li>
                        <li> <a> Looking like a Snack </a></li>
                        <li> <a> Pasta la Vista </a></li>
                        <li> <a> Round Round Rotis </a> </li>
                        <li> <a> The Breakfast Club </a></li>
                        <li> <a> We Loaf You </a></li>
                    </ul>
                </div>
                <div className={`hello3 ${show3? "show": "none"}`} onMouseEnter={()=>{setShow(true);setShow3(true);}} onMouseLeave={()=>{setShow(false);setShow3(false)}}>
                    <ul>
                        <li> <a> Keto </a> </li>
                        <li> <a> Vegan </a></li>
                        <li> <a> SOHFIT </a></li>
                    </ul>
                </div>
                {search? "":<div className="searchbar3">
                    <input type="text" placeholder="Search products..."/> <span className="cross"><FontAwesomeIcon icon={faSearch}/></span>
                </div>
                // <div className="white2">
                // </div> 
                }
                {search? "":
                <div className="white2">
                </div> 
                }

                
            </nav>
        </div>
    );
}
export default Header;
