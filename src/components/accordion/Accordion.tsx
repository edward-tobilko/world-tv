import { useState } from "react";
import "./accordion.scss";

import AccordionItem from "./AccordionItem";
import { IAccordionData } from "../../models";

const Accordion = ({
  accordionData,
}: {
  accordionData: Array<IAccordionData>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleClickOpenAccordion = (index: number) => {
    setCurrentIndex((currentValue) => (currentValue !== index ? index : -1));
  };

  return (
    <div className="accordion">
      {accordionData.map((accordion, index) => (
        <AccordionItem
          accordion={accordion}
          key={index}
          openAccordion={index === currentIndex}
          handleClickOpenAccordion={() => handleClickOpenAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
