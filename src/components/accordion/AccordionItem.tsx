import { useEffect, useRef, useState } from "react";

import { IAccordionData } from "../../models";

const AccordionItem = ({
  accordion,
  openAccordion,
  handleClickOpenAccordion,
}: {
  accordion: IAccordionData;
  openAccordion: boolean;
  handleClickOpenAccordion: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (openAccordion) {
      const contentElement = contentRef.current as HTMLDivElement;
      setHeight(contentElement.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [openAccordion]);

  return (
    <div className="accordion__item">
      <div
        className="accordion__item-trigger"
        onClick={handleClickOpenAccordion}
      >
        <div className="trigger__num"> {accordion.number} </div>
        <div className="trigger__text"> {accordion.text} </div>

        {openAccordion ? (
          <div className="trigger__img">
            <span className="line1"></span>
          </div>
        ) : (
          <div className="trigger__img">
            <span className="line1"></span>
            <span className="line2"></span>
          </div>
        )}
      </div>

      {openAccordion && (
        <div className="accordion__item-content" style={{ height }}>
          <div className="content__text" ref={contentRef}>
            {accordion.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
