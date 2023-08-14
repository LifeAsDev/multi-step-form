import checkmark from "./images/icon-checkmark.svg";
const PickAddons = (props) => {
  const { toggleAddon, nextStep, backStep, monthly, addon1, addon2, addon3 } =
    props;
  const chosenDuration = monthly ? "mo" : "yr";
  return (
    <div className="set">
      <div className="set-box">
        <div className="top-box">
          <h1>Pick add-ons</h1>
          <p className="details">
            Add-ons help enchance your gaming experience{" "}
          </p>
          <div
            onClick={() => toggleAddon("addon1")}
            style={
              addon1
                ? {
                    backgroundColor: "hsl(231, 100%, 99%)",
                    borderColor: "hsl(243, 100%, 62%)",
                  }
                : null
            }
            className="addon-box"
          >
            <div className="left-addon">
              <div
                style={
                  addon1
                    ? {
                        backgroundColor: "hsl(243, 100%, 62%)",
                        borderColor: "hsl(243, 100%, 62%)",
                      }
                    : null
                }
                className="checkmark"
              >
                <img
                  style={
                    !addon1
                      ? {
                          display: "none",
                        }
                      : null
                  }
                  className="checkmark-icon"
                  src={checkmark}
                  alt="checkmark"
                ></img>
              </div>
              <div className="addon-text">
                <p className="addon-tittle">Online service</p>
                <p className="addon-details">Access to multiplayer games</p>
              </div>
            </div>
            <p className="addon-price">
              +$1{!monthly ? "0" : null}/{chosenDuration}
            </p>
          </div>
          <div
            onClick={() => toggleAddon("addon2")}
            style={
              addon2
                ? {
                    backgroundColor: "hsl(231, 100%, 99%)",
                    borderColor: "hsl(243, 100%, 62%)",
                  }
                : null
            }
            className="addon-box"
          >
            <div className="left-addon">
              <div
                style={
                  addon2
                    ? {
                        backgroundColor: "hsl(243, 100%, 62%)",
                        borderColor: "hsl(243, 100%, 62%)",
                      }
                    : null
                }
                className="checkmark"
              >
                <img
                  style={
                    !addon2
                      ? {
                          display: "none",
                        }
                      : null
                  }
                  className="checkmark-icon"
                  src={checkmark}
                  alt="checkmark"
                ></img>
              </div>
              <div className="addon-text">
                <p className="addon-tittle">Larger storage</p>
                <p className="addon-details">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="addon-price">
              +$2{!monthly ? "0" : null}/{chosenDuration}
            </p>
          </div>
          <div
            onClick={() => toggleAddon("addon3")}
            style={
              addon3
                ? {
                    backgroundColor: "hsl(231, 100%, 99%)",
                    borderColor: "hsl(243, 100%, 62%)",
                  }
                : null
            }
            className="addon-box"
          >
            <div className="left-addon">
              <div
                style={
                  addon3
                    ? {
                        backgroundColor: "hsl(243, 100%, 62%)",
                        borderColor: "hsl(243, 100%, 62%)",
                      }
                    : null
                }
                className="checkmark"
              >
                <img
                  style={
                    !addon3
                      ? {
                          display: "none",
                        }
                      : null
                  }
                  className="checkmark-icon"
                  src={checkmark}
                  alt="checkmark"
                ></img>
              </div>
              <div className="addon-text">
                <p className="addon-tittle">Customizable Profile</p>
                <p className="addon-details">Custom theme on your profile</p>
              </div>
            </div>
            <p className="addon-price">
              +$2{!monthly ? "0" : null}/{chosenDuration}
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
export default PickAddons;
