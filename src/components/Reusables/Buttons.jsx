export const RoundedButton = ({ text, src = null, newTab }) => {
  return (
    <>
      {newTab ? (
        <a target="_blank" rel="noreferrer" href={src}>
          <button className="button button__rounded" role="button">
            {text}
          </button>
        </a>
      ) : (
        <a href={src}>
          <button className="button button__rounded" role="button">
            {text}
          </button>
        </a>
      )}
    </>
  );
};
export const RoundedButtonTransparent = ({ text, src = null }) => {
  return (
    <button
      className="button button__rounded button__rounded--transparent"
      role="button"
    >
      {text}
    </button>
  );
};
