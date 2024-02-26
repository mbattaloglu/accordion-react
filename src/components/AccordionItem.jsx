import { useState } from "react";

const AccordionItem = ({
  currentOpen,
  setCurrentOpen,
  num,
  title,
  text,
  children,
}) => {
  const isOpen = currentOpen === num;

  function handleOpen() {
    setCurrentOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen && "open"} `} onClick={handleOpen}>
      <p className="number">{num < 10 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
