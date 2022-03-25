import Link from 'next/link'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footer-widgets">
                    <div className="widget-column">
                        <Link href="/shipping-policy"><a>Shipping Policy</a></Link>
                        <Link href="/refund-and-returns-policy"><a>Refund and Returns Policy</a></Link>
                        <Link href="/privacy-policy-2"><a>Privacy Policy</a></Link>
                        <Link href="/terms-and-conditions"><a>Terms and Conditions</a></Link>
                    </div>
                    <div className="widget-column">
                        <img src="/bot.png" height="74" width="150" alt="" />
                        <p>11521034000692</p>   
                    </div>
                    <div className="widget-column">
                        <img src="/india.webp" height="120" width="255" alt="" />
                    </div>
                </div>
                <hr />
                <p className="right">© 2021 Sorted.</p>
            </div>
        </div>
    );
}

export default Footer;