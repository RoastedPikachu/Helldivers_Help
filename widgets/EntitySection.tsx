import React from "react";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "@/app/pageSections.css";

interface EntitySectionProps {
  title: string;
  gridStyles: string;
  children: any;
}

const EntitySection: React.FC<EntitySectionProps> = ({
  title,
  gridStyles,
  children,
}) => {
  return (
    <section>
      <SectionTitle text={title} />

      <div className={`pageSectionContentWrapper ${gridStyles}`}>
        {children}
      </div>
    </section>
  );
};

export default EntitySection;
