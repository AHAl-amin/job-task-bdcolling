// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import img1 from '../assets/img/first-img.png'
import img2 from '../assets/img/second-img.png'
import img3 from '../assets/img/thirtd-img.png'
import img4 from '../assets/img/four-img.png'
const Work = () => {
    return (
        <div className="max-w-[1500px] mx-auto py-10 bg-white">
            <h1 className='md:font-bold md:text-4xl text-3xl mt-8'>How It Works</h1>
            <p className='text-gray-400 mt-3 mb-6'>Search and find other travelers heading to the same destination.</p>
        <VerticalTimeline lineColor="#0872BA66" className="bg-white text-black">
            <VerticalTimelineElement
                className="vertical-timeline-element--work border-b-0"
                contentStyle={{
                    "-webkit-box-shadow": "none",
                    "box-shadow": "none"
                }}

                icon={'1'}
                iconStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #0872BAC2',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}


            >
              
                <div className='space-y-1 text-left '>
                    <h3 className="vertical-timeline-element-title text-xl pb-4 font-semibold">Plan Your Trip</h3>
                    <h4 className="vertical-timeline-element-subtitle text-lg">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</h4>
                    <img className="mx-auto 
                    " src={img2} alt="" />
                </div>
               
             
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work border-b-0"
                contentStyle={{
                    "-webkit-box-shadow": "none",
                    "box-shadow": "none"
                }}

                icon={'2'}
                iconStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #0872BAC2',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}


            >
                <div className='space-y-1 text-left'>
                <img className="mx-auto" src={img1} alt="" />
                    <h3 className="vertical-timeline-element-title text-xl pb-4 font-semibold">Explore Matching Profiles</h3>
                    <h4 className="vertical-timeline-element-subtitle text-lg">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</h4>
                    
                </div>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work border-b-0"
                contentStyle={{
                    "-webkit-box-shadow": "none",
                    "box-shadow": "none"
                }}

                icon={'3'}
                iconStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #0872BAC2',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}


            >
                <div className='space-y-1 text-left'>
                    <h3 className="vertical-timeline-element-title text-xl pb-4 font-semibold">Connect and Build Relationships</h3>
                    <h4 className="vertical-timeline-element-subtitle text-lg">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</h4>
                    <img className="mx-auto" src={img3} alt="" />
                </div>
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work border-b-0"
                contentStyle={{
                    "-webkit-box-shadow": "none",
                    "box-shadow": "none"
                }}

                icon={'4'}
                iconStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #0872BAC2',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}


            >
                <div className='space-y-1 text-left'>
                <img className="mx-auto" src={img4} alt="" />
                    <h3 className="vertical-timeline-element-title text-xl pb-4 font-semibold">Secure Your Plans & Enjoy the Journey</h3>
                    <h4 className="vertical-timeline-element-subtitle text-lg">Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</h4>
                    
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>
    );
};

export default Work;