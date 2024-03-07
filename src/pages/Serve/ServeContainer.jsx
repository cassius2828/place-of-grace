
const ServeContainer = ({side, children}) => {
  return <div className={`serve serve-${side}`}>{children}</div>;
}
export default ServeContainer