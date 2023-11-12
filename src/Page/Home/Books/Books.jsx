/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import './Books.css'
import { Link } from 'react-router-dom';
const Books = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch((error) => console.error('error fetching data', error))
    }, [])
    return (
        <>     <h1 className='text-center text-4xl'>All Fiction Books</h1>
            <div className='relative flex items-center'>

                {/* <FaBeer  /> */}

                <FontAwesomeIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size='2x' icon={faArrowLeft} style={{ color: "#183153", }} />

                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {
                        books.map((book) => (
                            // eslint-disable-next-line react/jsx-key

                            <div className='inline-block'>
                                <Link to={`/${book.id}`}>
                                    <img className='w-[220px] mr-2 ml-2 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={book.img} alt='books' />
                                </Link>                              
                                  <h2 className='text-xl text-center'>{book.name}</h2>
                            </div>
                        ))
                    }
                </div>


                <FontAwesomeIcon className='opacity-50 cursor-pointer hover:opacity-100' size='2x' icon={faArrowRight} style={{ color: "#183153", }} onClick={slideRight} />
                {/* <FaBeer/> */}
            </div>

        </>
    );
};

export default Books;