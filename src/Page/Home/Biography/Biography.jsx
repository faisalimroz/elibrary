import React from 'react';
import './Biography.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Biography = () => {
    {
        const slideLeft = () => {
            var slider = document.getElementById('slider');
            slider.scrollLeft = slider.scrollLeft - 500
        }
        const slideRight = () => {
            var slider = document.getElementById('slider');
            slider.scrollLeft = slider.scrollLeft + 500
        }
        const [biographyBooks, setbiographyBooks] = useState([])
        useEffect(() => {
            fetch('http://localhost:5000/bestbiography')
                .then(res => res.json())
                .then(data => setbiographyBooks(data))
                .catch((error) => console.error('error fetching data', error))
        }, [])
    
        const [books, setBooks] = useState([])
        useEffect(() => {
            fetch('http://localhost:5000/biography')
                .then(res => res.json())
                .then(data => setBooks(data))
                .catch((error) => console.error('error fetching data', error))
        }, [])
        return (
            <>
                <h1 className='text-center text-4xl'>Best Seller biography Books</h1>
                <div className='relative flex items-center'>
    
                    {/* <FaBeer  /> */}
    
                    <FontAwesomeIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size='2x' icon={faArrowLeft} style={{ color: "#183153", }} />
    
                    <div id='slider' className='w-full h-[400px] overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {biographyBooks.map((biographyBook) => (
                            <div key={biographyBook._id} className='inline-block'>
                                <Link to={`/bestbiography/${biographyBook._id}`}>
                                    <img className='w-[250px] h-[300px]  mr-2 ml-2 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={biographyBook.img} alt='books' />
                                </Link>
                                <h2 className='w-[250px] h-[150px] text-xl text-center overflow-hidden whitespace-normal'>
                                    <Link to={`/biography/${biographyBook._id}`} className='text-xl'>{biographyBook.name}</Link>
                                </h2>
                            </div>
                        ))}
                    </div>
    
    
    
    
                    <FontAwesomeIcon className='opacity-50 cursor-pointer hover:opacity-100' size='2x' icon={faArrowRight} style={{ color: "#183153", }} onClick={slideRight} />
                    {/* <FaBeer/> */}
                </div>
                <div>
                    <h1 className='text-center text-4xl'>All biography Books</h1>        </div>
                <div className="book-card">
                    {
                        books.map((book) => (
                            // eslint-disable-next-line react/jsx-key
    
    
                            // eslint-disable-next-line react/jsx-key
                            <Link to={`/biography/${book._id}`}>
                                <img className='w-[250px] max-h-[300px] inline-block' src={book.img} alt='books' />
                            </Link>
                            
    
                        ))
                    }
                </div>
                <div className=''>
                    <h1 className='text-center text-4xl'>Coming Soon</h1>
                    <div className='relative flex items-center'>
    
                        {/* <FaBeer  /> */}
    
                        <FontAwesomeIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size='2x' icon={faArrowLeft} style={{ color: "#183153", }} />
    
                        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                            {
                                books.map((book) => (
                                    // eslint-disable-next-line react/jsx-key
    
    
                                    // eslint-disable-next-line react/jsx-key
                                    <div className='inline-block'>
                                        <Link to={`/`}>
                                            <img className='w-[220px] mr-2 ml-2 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={book.img} alt='books' />
                                        </Link>
                                        <h2 className='text-xl text-center'>{book.name}</h2>
                                    </div>))
                            }
                        </div>
    
    
                        <FontAwesomeIcon className='opacity-50 cursor-pointer hover:opacity-100' size='2x' icon={faArrowRight} style={{ color: "#183153", }} onClick={slideRight} />
                        {/* <FaBeer/> */}
                    </div>
    
                </div>
    
            </>
        );
    }
    
};

export default Biography;