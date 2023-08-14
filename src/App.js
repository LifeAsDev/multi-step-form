import "./App.css";
import React, { Component } from "react";
import StepsList from "./StepsList";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import PickAddons from "./PickAddons";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      valids: [],
      step: 1,
      monthly: true,
      plan: 0,
      addon1: false,
      addon2: false,
      addon3: false,
      confirm: false,
    };
  }
  confirm = () => {
    this.setState({ confirm: true });
  };
  toggleAddon = (addon) => {
    this.setState((prevState) => ({
      [addon]: !prevState[addon],
    }));
  };
  handleNameChange = (event) => {
    this.setState({ valids: [], name: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ valids: [], email: event.target.value });
  };
  handlePhoneChange = (event) => {
    const inputValue = /^\d*$/.test(event.target.value)
      ? event.target.value
      : this.state.phone;

    this.setState({ valids: [], phone: inputValue });
  };
  componentDidMount() {
    const pictures = [
      "./images/icon-arcade.svg",
      "./images/icon-advanced.svg",
      "./images/icon-pro.svg",
    ];
    pictures.forEach((picture) => {
      const img = new Image();
      img.src = picture.fileName;
    });
  }
  checkInfo = () => {
    const validsNew = [];
    const regex =
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.phone === "") {
      validsNew.push("phone empty");
    }

    if (!regex.test(this.state.email)) {
      validsNew.push("email invalid");
    }
    if (this.state.email === "") {
      validsNew.push("email empty");
    }
    if (this.state.name === "") {
      validsNew.push("name empty");
    }
    if (validsNew.length === 0) {
      this.nextStep();
    } else {
      this.setState({ valids: validsNew });
    }
  };
  nextStep = () => {
    this.setState((prevState) => {
      if (prevState.step < 4) {
        return { step: prevState.step + 1 };
      }
      return null;
    });
  };
  backStep = () => {
    this.setState((prevState) => {
      return { step: prevState.step - 1 };
    });
  };
  setPlan = (plan) => {
    this.setState({ plan });
  };
  toggleMonthly = () => {
    this.setState((prevState) => {
      return { monthly: !prevState.monthly };
    });
  };
  goStep2 = () => {
    this.setState({ step: 2 });
  };
  render() {
    return (
      <main>
        <div className="App">
          <StepsList step={this.state.step} />
          {this.state.confirm ? (
            <ThankYou />
          ) : this.state.step === 1 ? (
            <PersonalInfo
              valids={this.state.valids}
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              checkInfo={this.checkInfo}
              handleEmailChange={this.handleEmailChange}
              handleNameChange={this.handleNameChange}
              handlePhoneChange={this.handlePhoneChange}
            />
          ) : this.state.step === 2 ? (
            <SelectPlan
              setPlan={this.setPlan}
              plan={this.state.plan}
              toggleMonthly={this.toggleMonthly}
              monthly={this.state.monthly}
              backStep={this.backStep}
              nextStep={this.nextStep}
            />
          ) : this.state.step === 3 ? (
            <PickAddons
              monthly={this.state.monthly}
              backStep={this.backStep}
              nextStep={this.nextStep}
              addon1={this.state.addon1}
              addon2={this.state.addon2}
              addon3={this.state.addon3}
              toggleAddon={this.toggleAddon}
            />
          ) : this.state.step === 4 ? (
            <Summary
              monthly={this.state.monthly}
              backStep={this.backStep}
              confirm={this.confirm}
              change={this.goStep2}
              addon1={this.state.addon1}
              addon2={this.state.addon2}
              addon3={this.state.addon3}
              plan={this.state.plan}
            />
          ) : null}
        </div>
      </main>
    );
  }
}

export default App;
