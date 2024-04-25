import { useState, lazy, Suspense } from "react";
import AccordianItem from "./AccordianItem";

const HeadshotCard = lazy(() =>
  import("../../components/HeadshotCard/HeadshotCard")
);

// import Abby from "/staff/Abby.webp";
// import Dye from "/staff/Dye.webp";
// import Freddie from "/staff/Freddie.webp";
// import Heather from "/staff/Heather.webp";
// import Jesse from "/staff/Jesse.webp";
// import Kristin from "/staff/Kristin.webp";
// import Patti from "/staff/Patti.webp";
// import Shanta from "/staff/Shanta.webp";
// import Spring from "/staff/Spring.webp";

const Accordian = () => {
  const [openTab, setOpenTab] = useState(null);
  const handleOpenTab = (num, ref) => {
    // * this logic prevents issue where the scroll would be off when selecting a lower row with a higher row currently opened
    if (num === openTab) setOpenTab(null);
    // * aims for end of view block when the higher row is opened so the UI is in the correct place when scrolled into view
    else if (num !== openTab && openTab !== null && num > openTab) {
      setOpenTab(num);
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      // * aims for center of view block when the lower row is opened or no row is opened so the UI is in the correct place when scrolled into view
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
            email="bianca.fleming@placeofgrace.net"
            // img={Patti}
            name="Bianca Fleming"
            title="Administrator"
            level="staff"
          />

          <HeadshotCard
            email="Spring.Meeter@placeofgrace.net"
            // img={Spring}
            name="Spring Meeter"
            title="Administrative Mentor"
            level="staff"
          />
          <HeadshotCard
            email=""
            // img={Spring}
            name="Diane McCart"
            title="Administrative EBSH"
            level="staff"
          />

          <HeadshotCard
            email="Dyemond.Mitchell@placeofgrace.net"
            // img={Dye}
            name="Dyemond Mitchell"
            title="Administrative EBSH"
            level="staff"
          />
          <HeadshotCard
            email="Freddie.Diaz@placeofgrace.net"
            // img={Freddie}
            name="Freddie Diaz"
            title="Administrative EBSH"
            level="staff"
          />
          <HeadshotCard
            email="Jesse.Mendenhall@placeofgrace.net"
            // img={Jesse}
            name="Jesse Mendenhall"
            title="Administrative EBSH"
            level="staff"
          />
          <HeadshotCard
            email="Roman.Price@placeofgrace.net"
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
            email="justin.felan@placeofgrace.net"
            // img={Dye}
            name="Justin Felan"
            title="Administrator"
            level="staff"
          />
          <HeadshotCard
            email="Robert.Turner@placeofgrace.net"
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
            email="nicole.johnson@placeofgrace.net"
            // img={Jesse}
            name="Nicole Johnson"
            title="Operations Director"
            level="staff"
          />
          <HeadshotCard
            email="melissa.minniefee@placeofgrace.net"
            // img={Kristin}
            name="Melissa Minniefee"
            title="Human Resources Manager | SC"
            level="staff"
          />
          <HeadshotCard
            email="deanna.perry@placeofgrace.net"
            // img={Kristin}
            name="Deanna Perry"
            title="Human Resources Manager | NC"
            level="staff"
          />
          <HeadshotCard
            email="Adrianna.Price@placeofgrace.net"
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
