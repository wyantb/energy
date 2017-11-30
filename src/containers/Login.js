
import { connect } from 'react-redux'
import LoginView from '../views/Login';
import requestLogin from '../actions/login';
import history from '../history'

const forwardToSummary = () => {
  history.push('/summary');
};

const mapStateToProps = state => {
  return {
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
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);

export default Login;

