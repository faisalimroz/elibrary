

const Searchresult = ({ results }) => {
  if (!results || !Array.isArray(results)) {
    // Handle the case where results is not defined or not an array
    return 
  }

  return (
    <div>
      <div>
        
        <ul className="flex items-center justify-center" >
          {results.map(result => (
            <li className="m-5" key={result._id}>
              {/* Display the search results, you can customize this based on your data structure */}
               <div className=''>
                 <h1> {result.name}</h1>
                 <h2> {result.price}</h2>
                 <img  className='h-[200px]' src={result.img} alt='img'/>
               </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Searchresult;
