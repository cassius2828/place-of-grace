import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const AccordianItem = ({
  openTab,
  handleOpenTab,
  num,
  children,
  groupName = "meet our ___ team",
}) => {
  // const { addAccordionRef } = useGlobalContext();
  const accordionRef = useRef();

  return (
    <div id={`accordian-item-${num}`} className="accordion-item">
      <h2 className="accordion-header" id={`staff-titles-${num}`}>
        <button
          ref={accordionRef}
          onClick={() => {
            handleOpenTab(num, accordionRef);
          }}
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${num}`}
          aria-expanded="true"
          aria-controls={`collapse${num}`}
        >
          <span className="accordion__category">{groupName}</span>
          <FontAwesomeIcon
            className="accordian__icon"
            icon={openTab === num ? faChevronUp : faChevronDown}
          />
        </button>
      </h2>
      <div
        id={`collapse${num}`}
        className={
          openTab === num
            ? `accordion-collapse collapse show`
            : `accordian-collapse collapse`
        }
        aria-labelledby={`staff-titles-${num}`}
        data-bs-parent="#accordianStaff"
      >
        <div className="accordion-body">
          <div className="staff__stafflist-grid"> {children}</div>
        </div>
      </div>
    </div>
  );
};
export default AccordianItem;
