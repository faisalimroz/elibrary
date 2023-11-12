import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faStar } from '@fortawesome/free-solid-svg-icons'
const Review = () => {
    
    return (
        <div>
             <div className='reviews'>
        
            <div className="review">
                <div className="head-review">
                    <img className='review-img' src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt='' width="250px"/>
                </div>
                <div className="body-review">
                    <div className="name-review">Mary Will</div>
                    <div className="place-review">Paris</div>
                    <div className="rating">
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    
                    </div>
                    <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
                </div>
            </div>
            <div className="review">
                <div className="head-review">
                    <img className='review-img' src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt='' width="250px"/>
                </div>
                <div className="body-review">
                    <div className="name-review">Mary Will</div>
                    <div className="place-review">Paris</div>
                    <div className="rating">
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    </div>
                    <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
                </div>
            </div>
            <div className="review">
                <div className="head-review">
                    <img className='review-img' src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt='' width="250px"/>
                </div>
                <div className="body-review">
                    <div className="name-review">Mary Will</div>
                    <div className="place-review">Paris</div>
                    <div className="rating">
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    <FontAwesomeIcon icon={ faStar } />
                    </div>
                    <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Review;