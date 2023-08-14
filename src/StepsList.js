import bgDesktop from "./images/bg-sidebar-desktop.svg";
import bgMobile from "./images/bg-sidebar-mobile.svg";

const StepsList = (props) => {
  const { step } = props;
  return (
    <>
      <img className="mobile bg" alt="background sidebar" src={bgMobile}></img>

      <ul className="steps">
        <img
          className="desktop bg"
          alt="background sidebar"
          src={bgDesktop}
        ></img>
        <li>
          <div
            style={
              step === 1
                ? {
                    backgroundColor: "hsl(206, 94%, 87%)",
                    borderColor: "hsl(206, 94%, 87%)",
                    color: "black",
                  }
                : null
            }
            className="step-number"
          >
            1
          </div>
          <div className="step-text desktop">
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </li>
        <li>
          <div
            style={
              step === 2
                ? {
                    backgroundColor: "hsl(206, 94%, 87%)",
                    borderColor: "hsl(206, 94%, 87%)",
                    color: "black",
                  }
                : null
            }
            className="step-number"
          >
            2
          </div>
          <div className="step-text desktop">
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </div>
        </li>
        <li>
          <div
            style={
              step === 3
                ? {
                    backgroundColor: "hsl(206, 94%, 87%)",
                    borderColor: "hsl(206, 94%, 87%)",
                    color: "black",
                  }
                : null
            }
            className="step-number"
          >
            3
          </div>
          <div className="step-text desktop">
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </li>
        <li>
          <div
            style={
              step === 4
                ? {
                    backgroundColor: "hsl(206, 94%, 87%)",
                    borderColor: "hsl(206, 94%, 87%)",
                    color: "black",
                  }
                : null
            }
            className="step-number"
          >
            4
          </div>
          <div className="step-text desktop">
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default StepsList;
