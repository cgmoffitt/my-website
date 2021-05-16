import React, {useEffect, useState, useRef} from 'react'

export default function WorkHistoryItem({experience}) {
    const {company, timeperiod, position, location, description, image} = experience
    const [descripitionHidden, setDescriptionHidden] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef();
    const handleMouseOver = () => setIsHovered(true);
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

    return (
        <div ref={ref} className={`relative animate ${isHovered ? "grow ": ""}`}>
            <div className="h-full flex flex-col absolute justify-center">
                <div className="h-full work-history-line"></div>
            </div>
            <div className="h-28 flex flex-row items-center">
                <div className="work-history-bullet"></div>
                <div className={`thumbnail-image bg-${image} bg-center bg-contain bg-no-repeat`}></div>
                <div className="experience-text flex-col justify-center">
                    <div className="text-xl font-light">{timeperiod}</div>
                    <div className="text-2xl font-light">{company} - {location}</div>
                    <div className="text-3xl font-black">{position}</div>
                </div>
            </div>
            <div className={`experience-description ${isHovered ? "hover" : ""}`}>
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