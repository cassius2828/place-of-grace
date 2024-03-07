import MeetTeamContainer from "./MeetTeamContainer";
import StaffCardGrid from "./StaffCardGrid";

const StaffPage = () => {
  return (
    <section id="staff" className="staff">
      <MeetTeamContainer />
      <span className="meet-the-team">Meet our amazing staff</span>
      {/* <hr className="meet-the-team-hr" /> */}
      <StaffCardGrid />
    </section>
  );
};
export default StaffPage;
