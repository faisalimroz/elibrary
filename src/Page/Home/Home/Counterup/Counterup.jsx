import  { useState } from 'react';
import './Counterup.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counterup = () => {
    const [counterStart, setCounterStart] = useState(false)

    return (
        <>
          
           <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
            <div className='counter-container '>
                <div className='counter'>
                    <h1 className='value'>
                        {counterStart && <CountUp start={0} end={20000} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h1 className='counter-label'>Books</h1>
                </div>
                <div className='counter'>
                    <h1 className='value'>
                        {counterStart && <CountUp start={0} end={10} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h1 className='counter-label'> Years Trust</h1>
                </div>
                <div className='counter'>
                    <h1 className='value'>
                        {counterStart && <CountUp start={0} end={10000} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h1 className='counter-label'>Loyal User</h1>
                </div>
            </div>
        </ScrollTrigger>

        </>
    );
};

export default Counterup;