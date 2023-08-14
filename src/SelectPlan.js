import iconArcade from "./images/icon-arcade.svg";
import iconAdvanced from "./images/icon-advanced.svg";
import iconPro from "./images/icon-pro.svg";

const SelectPlan = (props) => {
  const { setPlan, backStep, nextStep, monthly, toggleMonthly, plan } = props;
  const chosenDuration = monthly ? "mo" : "yr";
  return (
    <div className="set">
      <div className="set-box">
        <div className="top-box">
          <h1>Select your plan</h1>
          <p className="details">
            You have the option of monthly or yearly billing.
          </p>
          <div className="plan-box">
            <div
              onClick={() => setPlan(0)}
              style={
                plan === 0
                  ? {
                      backgroundColor: "hsl(231, 100%, 99%)",
                      borderColor: "hsl(243, 100%, 62%)",
                    }
                  : null
              }
              className="plan"
            >
              <img src={iconArcade} alt="arcade"></img>
              <div className="plan-text">
                <p className="plan-tittle">Arcade</p>
                <p className="plan-price">
                  $9{!monthly ? "0" : null}/{chosenDuration}
                </p>
                {!monthly ? <p className="years-free">2 months free </p> : null}
              </div>
            </div>
            <div
              onClick={() => setPlan(1)}
              style={
                plan === 1
                  ? {
                      backgroundColor: "hsl(231, 100%, 99%)",
                      borderColor: "hsl(243, 100%, 62%)",
                    }
                  : null
              }
              className="plan"
            >
              <img src={iconAdvanced} alt="advanced"></img>
              <div className="plan-text">
                <p className="plan-tittle">Advanced</p>
                <p className="plan-price">
                  $12{!monthly ? "0" : null}/{chosenDuration}
                </p>
                {!monthly ? <p className="years-free">2 months free </p> : null}
              </div>
            </div>
            <div
              onClick={() => setPlan(2)}
              style={
                plan === 2
                  ? {
                      backgroundColor: "hsl(231, 100%, 99%)",
                      borderColor: "hsl(243, 100%, 62%)",
                    }
                  : null
              }
              className="plan"
            >
              <img src={iconPro} alt="pro"></img>
              <div className="plan-text">
                <p className="plan-tittle">Pro</p>
                <p className="plan-price">
                  $15{!monthly ? "0" : null}/{chosenDuration}
                </p>
                {!monthly ? <p className="years-free">2 months free </p> : null}
              </div>
            </div>
          </div>
          <div className="plan-switch-box">
            <p
              style={!monthly ? { color: "hsl(231, 11%, 63%)" } : null}
              className="switch-option"
            >
              Monthly
            </p>
            <div onClick={toggleMonthly} className="switch">
              <div
                style={!monthly ? { transform: "translateX(1.5rem)" } : null}
                className="switch-btn"
              ></div>
            </div>
            <p
              style={monthly ? { color: "hsl(231, 11%, 63%)" } : null}
              className="switch-option"
            >
              Yearly
            </p>
          </div>
        </div>
        <div className="buttons-box">
          <p onClick={backStep} className="back">
            Go Back
          </p>
          <button onClick={nextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
};
export default SelectPlan;
