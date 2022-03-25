import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faFile } from '@fortawesome/free-solid-svg-icons';


const Docs = () => {
    return (  
        <div className="docs container">
            <div className="searchbar2">
                <FontAwesomeIcon icon={faSearch} className="search2"/>
                <input type="text" placeholder="Search.." />
            </div>
            <div className="docs2 flex">
                <div className="billing">
                    <div className="flex hed">
                        
                            {/* <FontAwesomeIcon icon={faFile} className="search2"/> */}
                            <p>Billing</p>
                        
                        
                        <p className="count">1</p>
                    </div>
                <div className="smallcontainer"> 
                    <div className="items">
                    <li><a>Let's just talk FUN-ds-All about our billing</a></li>
                    </div>
                    <div className="btn-explore">
                        Explore More
                    </div>
                </div>
                </div>
                <div className="billing">
                    <div className="flex hed">
                        <p>Delivery</p>
                        <p className="count">1</p>
                    </div>
                <div className="smallcontainer"> 
                    <div className="items">
                        <li><a>You drive us nuts- All about our logistics</a></li>
                        
                    </div>
                    <div className="btn-explore">
                        Explore More
                    </div>

                </div>
                </div>
                <div className="billing">
                    <div className="flex hed">
                        <p>Product</p>
                        <p className="count">5</p>
                    </div>
                <div className="smallcontainer"> 
                    <div className="items">
                        <li><a>What do you call a fake noodle? An IMPASTA- All about our pastas</a></li>
                        <li><a>Chit-chat-Gupshup Time - All about our snacks</a></li>
                        <li><a>Try to ket-chup wih us!!- All about our sauces and condiments</a></li>
                        <li><a>The way we roll- All about our rotis and crusts</a></li>
                        <li><a>We loaf you- Everything about our breads</a></li>
                    </div>
                    <div className="btn-explore">
                        Explore More
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Docs;