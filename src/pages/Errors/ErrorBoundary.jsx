import { Component } from "react";
import Error from "./Error";
import { RoundedButton } from "../../components/Reusables/Buttons";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ hasError: true });
  }
  toggleError = () => {
    this.setState((prevState) => ({
      hasError: !prevState.hasError,
    }));
  };

  render() {
    if (this.state.hasError && this.props.isForm) {
      // Render fallback UI when an error occurs
      return (
        <div className="error__form-submission">
          {" "}
          {this.props.firstMessage}
          <br />
          <br />
          {this.props.secondMessage}
          <br />
          <br />
          <RoundedButton onClick={this.toggleError} text="close" />
        </div>
      );
    }
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <Error
          errorType="404"
          firstMessage={`Sorry, we can not find the requested page`}
          secondMessage={`Please choose a different path or refresh your browser`}
          showRefresh={true}
        />
      );
    }

    // Render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
