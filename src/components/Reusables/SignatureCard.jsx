const SignatureCard = ({ side, imageUrl, alt, name, jobTitle }) => {
  return (
    <div className={side ? `signature signature-${side}` : `signature`}>
      <img src={imageUrl} alt={alt} className="signature-img" loading="lazy" />

      <h3>{name}</h3>
      <span>{jobTitle}</span>
    </div>
  );
};
export default SignatureCard;
