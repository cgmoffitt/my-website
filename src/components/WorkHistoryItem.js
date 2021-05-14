import React, {useEffect, useState, useRef} from 'react'

export default function WorkHistoryItem() {
    const [descripitionHidden, setDescriptionHidden] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    useEffect(() => console.log('hovering?', isHovered))

    useEffect(
        () => {
          const node = ref.current;
          if (ref.current) {
            ref.current.addEventListener("mouseover", handleMouseOver);
            ref.current.addEventListener("mouseout", handleMouseOut);
            return () => {
            ref.current.removeEventListener("mouseover", handleMouseOver);
            ref.current.removeEventListener("mouseout", handleMouseOut);
            };
          }
        },
        [ref.current] // Recall only if ref changes
      );

    return (
        <div ref={ref} className={`relative animate ${isHovered ? "grow ": ""}`}>
            <div className="h-full flex flex-col absolute justify-center">
                <div className="h-full work-history-line"></div>
            </div>
            <div className="h-44 flex flex-row items-center">
                <div className="work-history-bullet"></div>
                <div className="thumbnail-image"></div>
                <div className="experience-text flex-col justify-center">
                    <div className="text-xl font-light">Apr 2020 - Present</div>
                    <div className="text-2xl font-light">Turing - Palo Alto, CA</div>
                    <div className="text-3xl font-black">Chief of Staff to CEO</div>
                </div>
            </div>
            <div className={`experience-description ${isHovered ? "hover" : ""}`}>
                <ul>
                    <li className="text-l font-light">
                        Directed creation of cloud software to replace paper records and save 144 hours of work by
                        teachers weekly
                    </li>
                    <li className="text-l font-light">
                        Oversaw teacher training and program implementation for English learning program with
                        17 centers in Seoul
                    </li>
                </ul>
            </div>
        </div>
    )
}