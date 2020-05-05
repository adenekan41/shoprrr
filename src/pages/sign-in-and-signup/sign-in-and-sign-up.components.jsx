import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import { ReactComponent as Logo } from '../../assets/shoprr.svg';
import SignUp from '../../components/sign-up/sign-up.component';
import { Route, Link, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './sign-in-and-sign-up.styles.scss';
const SignInSignUp = props => {
  const timeout = { enter: 800, exit: 0 };
  const { location } = props;
  const currentKey = location.pathname.split('/auth')[1] || '/';
  return (
    <>
      <div className="sign-in-and-sign-up">
        <div>
          <Logo className="logo"></Logo>
          <div className="routes">
            <Link
              to="/auth"
              className={props.location.pathname === '/auth' && 'activetab'}
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className={
                props.location.pathname === '/auth/signup' && 'activetab'
              }
            >
              Register
            </Link>
          </div>
          <TransitionGroup component="div" className="App">
            <CSSTransition
              key={currentKey}
              timeout={timeout}
              classNames="pageSlider"
              mountOnEnter={false}
              unmountOnExit={true}
            >
              <div className="fades">
                <Route exact path="/auth" component={SignIn} />
                <Route exact path="/auth/signup" component={SignUp} />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </>
  );
};
export default withRouter(SignInSignUp);
