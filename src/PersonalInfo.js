const PersonalInfo = (props) => {
  const {
    name,
    email,
    phone,
    valids,
    handleEmailChange,
    handleNameChange,
    handlePhoneChange,
    checkInfo,
  } = props;

  return (
    <div className="set">
      <div className="set-box">
        <div className="top-box">
          <h1>Personal info</h1>
          <p className="details">
            Please provide your name, email address, and phone number.
          </p>
          <form>
            <label>
              Name
              <p className="error">
                {valids.includes("name empty")
                  ? "This field is required"
                  : null}
              </p>
            </label>
            <input
              style={
                valids.includes("name empty")
                  ? { borderColor: "hsl(354, 84%, 57%)" }
                  : null
              }
              value={name}
              onChange={handleNameChange}
              className="input-text"
              type="text"
              placeholder="e.g. Stephen King"
            />
            <label>
              Email Address
              <p className="error">
                {valids.includes("email empty")
                  ? "This field is required"
                  : valids.includes("email invalid")
                  ? "This email is invalid"
                  : null}
              </p>
            </label>
            <input
              style={
                valids.includes("email empty") ||
                valids.includes("email invalid")
                  ? { borderColor: "hsl(354, 84%, 57%)" }
                  : null
              }
              value={email}
              onChange={handleEmailChange}
              className="input-text"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
            />
            <label>
              Phone Number
              <p className="error">
                {valids.includes("phone empty")
                  ? "This field is required"
                  : null}
              </p>
            </label>
            <input
              style={
                valids.includes("phone empty")
                  ? { borderColor: "hsl(354, 84%, 57%)" }
                  : null
              }
              value={phone}
              onChange={handlePhoneChange}
              className="input-text"
              type="numbers"
              placeholder="e.g. +1 234 567 890"
            />
          </form>
        </div>
        <div className="buttons-box">
          <p></p>
          <button onClick={checkInfo}>Next Step</button>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
