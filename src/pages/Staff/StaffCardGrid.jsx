import HeadshotCard from "../../components/HeadshotCard/HeadshotCard";

import Abby from "../../../public/staff/Abby.webp";
import Dye from "../../../public/staff/Dye.webp";
import Freddie from "../../../public/staff/Freddie.webp";
import Heather from "../../../public/staff/Heather.webp";
import Jesse from "../../../public/staff/Jesse.webp";
import Kristin from "../../../public/staff/Kristin.webp";
import Patti from "../../../public/staff/Patti.webp";
import Shanta from "../../../public/staff/Shanta.webp";
import Spring from "../../../public/staff/Spring.webp";
const StaffCardGrid = () => {
  return (
    <div className="staff__stafflist-grid">
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
        title="Operations Manager & Human Resources"
        level="staff"
      />

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
    </div>
  );
};
export default StaffCardGrid;
