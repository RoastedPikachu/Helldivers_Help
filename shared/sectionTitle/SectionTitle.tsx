import React from 'react';

import "./SectionTitle.css";

interface SectionTitleProps {
    text: string;
}

const SectionTitle:React.FC<SectionTitleProps> = ({text}) => {
    return (
        <h3 className="sectionTitle">
            {text}
        </h3>
    );
};

export default SectionTitle;