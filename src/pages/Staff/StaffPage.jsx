import MeetTeamContainer from "./MeetTeamContainer";
import StaffCardGrid from "./StaffCardGrid";

const StaffPage = () => {
  return (
    <section id="staff" className="staff">
      <MeetTeamContainer />
      <span className="meet-the-team">Meet our amazing staff</span>
      <StaffCardGrid />
    </section>
  );
};
export default StaffPage;
