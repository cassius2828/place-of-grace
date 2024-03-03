import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const AccordianItem = ({
  openTab,
  handleOpenTab,
  num,
  children,
  groupName = "meet our ___ team",
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`staff-titles-${num}`}>
        <button
          onClick={() => handleOpenTab(num)}
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {groupName}
          <FontAwesomeIcon
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
