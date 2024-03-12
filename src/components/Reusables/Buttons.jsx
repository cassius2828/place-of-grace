export const RoundedButton = ({ text, func, funcParams }) => {
  return (
    <>
    {/* check to see if this affects submit form button later */}
      <button
        onClick={() => func(funcParams)}
        className="button button__rounded"
        role="button"
      >
        {text}
      </button>
    </>
  );
};

export const RoundedButtonTransparent = ({ text, specialPadding }) => {
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
