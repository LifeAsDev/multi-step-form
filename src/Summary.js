const Summary = (props) => {
  const { change, plan, backStep, monthly, addon1, addon2, addon3, confirm } =
    props;
  let planName = "";
  // eslint-disable-next-line
  switch (plan) {
    case 0:
      planName = "Arcade";
      break;

    case 1:
      planName = "Advanced";
      break;

    case 2:
      planName = "Pro";
      break;
  }
  let total =
    9 + 3 * plan + (addon1 ? 1 : 0) + (addon2 ? 2 : 0) + (addon3 ? 2 : 0);

  const chosenDuration = monthly ? "mo" : "yr";
  const chosenPrice = monthly ? "" : "0";

  return (
    <div className="set">
      <div className="set-box">
        <div className="top-box">
          <h1>Finishing up</h1>
          <p className="details">
            Double check everything looks OK before confirming
          </p>
          <div className="summary-box">
            <div className="summary-top">
              <div className="selected-plan-box">
                <p className="selected-plan">
                  {planName}({monthly ? "Monthly" : "Yearly"})
                </p>
                <p onClick={change} className="gray">
                  Change
                </p>
              </div>
              <p className="plan-summary-price">
                ${9 + 3 * plan}
                {chosenPrice}/{chosenDuration}
              </p>
            </div>
            <div
              style={!addon1 && !addon2 && !addon3 ? { display: "none" } : null}
              className="addon-line"
            ></div>
            <div
              style={!addon1 ? { display: "none" } : null}
              className="addon-box-summary"
            >
              <p className="addon-name gray">Online service</p>
              <p className="addon-price-summary">
                +$1
                {chosenPrice}/{chosenDuration}
              </p>
            </div>
            <div
              style={!addon2 ? { display: "none" } : null}
              className="addon-box-summary"
            >
              <p className="addon-name gray">Larger storage</p>
              <p className="addon-price-summary">
                +$2
                {chosenPrice}/{chosenDuration}
              </p>
            </div>
            <div
              style={!addon3 ? { display: "none" } : null}
              className="addon-box-summary"
            >
              <p className="addon-name gray">Customizable Profile</p>
              <p className="addon-price-summary">
                +$2
                {chosenPrice}/{chosenDuration}
              </p>
            </div>
          </div>
          <div className="total-box">
            <p className="gray">Total({monthly ? "per month" : "per year"})</p>
            <p className="total-price">
              +${total}
              {chosenPrice}/{chosenDuration}
            </p>
          </div>
        </div>
        <div className="buttons-box">
          <p onClick={backStep} className="back">
            Go Back
          </p>
          <button onClick={confirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
export default Summary;
