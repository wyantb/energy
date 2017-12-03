
import { connect } from 'react-redux'
import LoginView from '../views/Login';
import { requestLogin, changeUserName, changeUserId } from '../actions/login';
import history from '../history'

const forwardToSummary = () => {
  history.push('/summary');
};

const mapStateToProps = state => {
  return {
    userName: state.login.name,
    userId: state.login.user,
    loggedIn: state.login.loggedIn,
    display: state.login.loggedIn ?
      `Continue to your Summary, ${state.login.name}` :
      'Login Now',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () => {
      dispatch(requestLogin({ user: 1, name: 'Billy' })).then(
        () => { forwardToSummary(); },
        () => { alert('Something went wrong during login. There is no hope now...'); },
      )
    },
    onSummaryClick: () => {
      forwardToSummary();
    },
    nameChange: (ev) => {
      dispatch(changeUserName(ev.target.value));
    },
    userChange: (ev) => {
      dispatch(changeUserId(ev.target.value));
    },
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);

export default Login;

