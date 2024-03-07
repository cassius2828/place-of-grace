export const RoundedButton = ({ text, src = null, newTab }) => {
  return (
    <>
      {newTab ? (
 
          <button className="button button__rounded" role="button">
            {text}
          </button>
  
      ) : (
        
          <button className="button button__rounded" role="button">
            {text}
          </button>
        
      )}
    </>
  );
};
export const RoundedButtonTransparent = ({
  text,
  src = null,
  specialPadding,
}) => {
  return (
    <button
      style={{ padding: specialPadding ? specialPadding : null }}
      className="button button__rounded button__rounded--transparent"
      role="button"
    >
      {text}
    </button>
  );
};
