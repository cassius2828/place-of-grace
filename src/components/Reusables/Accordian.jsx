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
  const handleOpenTab = (num) => {
    if (num === openTab) setOpenTab(null);
    else setOpenTab(num);
  };
  return (
    <div className="accordion" id="accordianStaff">
      <AccordianItem
        groupName="Meet our Administration Team | Northern Region"
        num={1}
        handleOpenTab={handleOpenTab}
        openTab={openTab}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeadshotCard
            img={Patti}
            name="Patti Ruona"
            title="Administrator Assistant"
            level="staff"
          />

          <HeadshotCard
            img={Spring}
            name="Mary Meter"
            title="Administrative Mentor"
            level="staff"
          />

          <HeadshotCard
            img={Heather}
            name="Heather Mundell"
            title="Operations Manager & HR"
            level="staff"
          />
        </Suspense>
      </AccordianItem>
      <AccordianItem
        groupName="Meet our Administration Team | Southern Region"
        num={2}
        handleOpenTab={handleOpenTab}
        openTab={openTab}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeadshotCard
            img={Dye}
            name="Dyemond Mitchell"
            title="Administrator"
            level="staff"
          />
          <HeadshotCard
            img={Freddie}
            name="Freddie Diaz"
            title="Administrator"
            level="staff"
          />
          <HeadshotCard
            img={Abby}
            name="Abby Carvajal"
            title="Administrator"
            level="staff"
          />
        </Suspense>
      </AccordianItem>
      <AccordianItem
        groupName="Meet our Corporate Team"
        num={3}
        handleOpenTab={handleOpenTab}
        openTab={openTab}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeadshotCard
            img={Jesse}
            name="Jesse Mendenhall"
            title="Administrator"
            level="staff"
          />
          <HeadshotCard
            img={Kristin}
            name="Kristin McGhie"
            title="Admininstrator"
            level="staff"
          />
          <HeadshotCard
            img={Shanta}
            name="Shanta Haines"
            title="Administrator"
            level="staff"
          />
        </Suspense>
      </AccordianItem>
      <AccordianItem
        groupName="Meet our Office Team"
        num={4}
        handleOpenTab={handleOpenTab}
        openTab={openTab}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeadshotCard
            img={Jesse}
            name="Jesse Mendenhall"
            title="Administrator"
            level="staff"
          />
          <HeadshotCard
            img={Kristin}
            name="Kristin McGhie"
            title="Admininstrator"
            level="staff"
          />
          <HeadshotCard
            img={Shanta}
            name="Shanta Haines"
            title="Administrator"
            level="staff"
          />
        </Suspense>
      </AccordianItem>
    </div>
  );
};
export default Accordian;
