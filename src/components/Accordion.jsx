import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          num={index}
          title={item.title}
          key={index}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
