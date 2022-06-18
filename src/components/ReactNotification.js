import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

const ReactNotification = ({ title, body }) => {
  toast.info(<Display />);
  function Display() {
    return (
      <div>
        <h4>{ title }</h4>
        <p>{ body }</p>
      </div>
    );
  }
  return <ToastContainer />;
}

ReactNotification.prototype = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default ReactNotification;