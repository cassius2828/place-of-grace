
const HomepageContainer = ({side, children}) => {
  return <div className={`homepage homepage-${side}`}>{children}</div>;
}
export default HomepageContainer