import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuestion} from '@fortawesome/free-solid-svg-icons'
interface WhyMeItemProps{
    img: string,
    heading: string,
    subheading: string
}
export const WhyMeItem: FC<WhyMeItemProps> = ({img, heading, subheading}) => {
    return (
        <div className="why_me__item">

            <div className="why_me__img_place">
                <div className="why_me__question">
                    <FontAwesomeIcon icon={faQuestion}/>
                </div>
                <img src={img} alt={heading} />
            </div>
            <div className="why_me__heading">
                {heading}
            </div>
            <div className="why_me__subheading">
                {subheading}
            </div>
        </div>
    );
};

