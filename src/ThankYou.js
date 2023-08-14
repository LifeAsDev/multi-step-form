import thankIcon from "./images/icon-thank-you.svg";
const ThankYou = () => {
  return (
    <div className="set">
      <div className="set-box thank-box">
        <div className="top-box center">
          <img
            className="thank-icon"
            alt="thank you icon"
            src={thankIcon}
          ></img>
          <h1>Thank you!</h1>
          <p className="gray">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at <span>support@loremgaming.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
