const Error = ({ firstMessage, secondMessage, showRefresh, errorType }) => {
  return (
    <div className="error">
      <div className="error__text-container">
        <span>{errorType}</span>
        <br />

        <span>{firstMessage}</span>
        <br />
        <span>
          {secondMessage}
          {showRefresh && <span id="refresh">&#8635;</span>}
        </span>
      </div>
    </div>
  );
};
export default Error;
