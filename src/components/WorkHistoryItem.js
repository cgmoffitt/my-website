import React, {useEffect, useState, useRef} from 'react'
import useWindowDimensions from "../hooks/useWindowDimensions"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function WorkHistoryItem({experience}) {
    const {company, timeperiod, position, location, description, image} = experience
    const [descripitionHidden, setDescriptionHidden] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [expanded, setExpanded] = useState(false)
    const ref = useRef();
    const { height, width } = useWindowDimensions();
    const handleMouseOver = () => {
        if (width > 745){
            setIsHovered(true)
        }
        
    };
    const handleMouseOut = () => setIsHovered(false);
    

    useEffect(
        () => {
          const node = ref.current;
          if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
          }

          return () => {
              if (node){
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);    
              }
          }
        },
        [ref] // Recall only if ref changes
      );

      useEffect(() =>{
        if (isHovered){
            setExpanded(true)
        } else {
            setExpanded(false)
        }
      }, [isHovered])

    return (
        <div ref={ref} className={`relative animate ${expanded ? "grow ": ""}`}>
            <div className="h-full flex flex-col absolute justify-center">
                <div className="h-full work-history-line"></div>
            </div>
            <div className="h-28 flex flex-row items-center">
                <div className="work-history-bullet"></div>
                <div className={`thumbnail-image ml-4 md:ml-10 w-16 h-16 md:w-20 md:h-20 bg-${image} bg-center bg-contain bg-no-repeat`}></div>
                <div className="experience-text w-9/12 ml-5 md:ml-10 flex-col justify-center"
                    onClick={() => setExpanded(!expanded)}
                >
                    <div className="text-sm md:text-xl font-light  ">{timeperiod}</div>
                    <div className="text-lg md:text-2xl font-light ">{company} - {location}</div>
                    <div className="text-xl md:text-3xl font-black ">{position}</div>
                    <button 
                        className="text-xs md:text-xl font-light md:hidden"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Read less" : "Read more"}
                        {expanded ? <ExpandLessIcon style={{fontSize:15}} /> : <ExpandMoreIcon style={{fontSize:15}}/>}
                    </button>
                </div>
            </div>
            <div className={`experience-description mt-5 ml-4 md:ml-48 w-11/12 md:w-1/2 ${expanded ? "hover" : ""}`}>
                <ul>
                    {description.map((item, index) => 
                        <li key={index} className="text-l font-light">
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}