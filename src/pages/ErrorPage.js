import { NavLink } from "react-router-dom";
import "../css/error404.css"
function ErrorPage() {
  return (
    <div className="error">
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <NavLink to="/" className="homelink">home</NavLink> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
