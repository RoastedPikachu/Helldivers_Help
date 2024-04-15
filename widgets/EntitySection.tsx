import React from "react";

import SectionTitle from "@/shared/SectionTitle/SectionTitle";

import "@/app/pageSections.css";

interface EntitySectionProps {
  title?: string;
  gridStyles: string;
  children: any;
}

const EntitySection: React.FC<EntitySectionProps> = ({
  title,
  gridStyles,
  children,
}) => {
  return (
    <section className={`${title ? "" : `pageGridSection ${gridStyles}`}`}>
      {title ? (
        <>
          <SectionTitle text={title} />

          <div className={`pageSectionContentWrapper ${gridStyles}`}>
            {children}
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </section>
  );
};

export default EntitySection;
