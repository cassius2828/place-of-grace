import { useState, lazy, Suspense } from "react";
import AccordianItem from "./AccordianItem";

const HeadshotCard = lazy(() =>
  import("../../components/HeadshotCard/HeadshotCard")
);

import Abby from "/staff/Abby.webp";
import Dye from "/staff/Dye.webp";
import Freddie from "/staff/Freddie.webp";
import Heather from "/staff/Heather.webp";
import Jesse from "/staff/Jesse.webp";
import Kristin from "/staff/Kristin.webp";
import Patti from "/staff/Patti.webp";
import Shanta from "/staff/Shanta.webp";
import Spring from "/staff/Spring.webp";

const Accordian = () => {
  const [openTab, setOpenTab] = useState(null);
  const handleOpenTab = (num, ref) => {
    if (num === openTab) setOpenTab(null);
    else {
       setOpenTab(num);
      //  allows us to scroll into view of the selected element
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
 
    }
  };
  return (
    <div className="accordion" id="accordianStaff">
      <AccordianItem
        groupName="Administration Team | Northern Region"
        num={1}
        handleOpenTab={handleOpenTab}
        openTab={openTab}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeadshotCard
            // img={Patti}
            name="Bianca Fleming"
            title="Administrator"
            level="staff"
          />

          <HeadshotCard
            img={Spring}
            name="Spring Meeter"
            title="Administrative Mentor"
            level="staff"
          />
           <HeadshotCard
            // img={Spring}
            name="Diane McCart"
            title="Administrative EBSH"
            level="staff"
          />

          <HeadshotCard
            img={Dye}
            name="Dyemond Mitchell"
            title="Administrative EBSH"
            level="staff"
          />
           <HeadshotCard
            img={Freddie}
            name="Freddie Diaz"
            title="Administrative EBSH"
            level="staff"
          />
           <HeadshotCard
            img={Jesse}
            name="Jesse Mendenhall"
            title="Administrative EBSH"
            level="staff"
          />
           <HeadshotCard
            // img={Heather}
            name="Roman Price"
            title="Manager"
            level="staff"
          />
        </Suspense>
      </AccordianItem>
      <AccordianItem
        groupName="Administration Team | Southern Region"
        num={2}
        handleOpenTab={handleOpenTab}
        openTab={openTab}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeadshotCard
            // img={Dye}
            name="Justin Felan"
            title="Administrator"
            level="staff"
          />
          <HeadshotCard
            // img={Freddie}
            name="Rob Turner"
            title="Administrator"
            level="staff"
          />
      
        </Suspense>
      </AccordianItem>
      <AccordianItem
        groupName="Corporate Team"
        num={3}
        handleOpenTab={handleOpenTab}
        openTab={openTab}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeadshotCard
            // img={Jesse}
            name="Nicole Johnson"
            title="Operations Director"
            level="staff"
          />
          <HeadshotCard
            // img={Kristin}
            name="Melissa Minniefee"
            title="Human Resources Manager | SC"
            level="staff"
          />
              <HeadshotCard
            // img={Kristin}
            name="Deanna Perry"
            title="Human Resources Manager | NC"
            level="staff"
          />
             <HeadshotCard
            // img={Kristin}
            name="Adrianna Price"
            title="Human Resources Generalist & Tech Support"
            level="staff"
          />
        </Suspense>
      </AccordianItem>
    </div>
  );
};
export default Accordian;
