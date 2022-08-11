import React, {Fragment, useState, useEffect} from "react";
import Login from "./Login/Login";
import Home from "./Home/Home";

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);


  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    console.log("로그인 성공!")
  }

  const logoutHandler = () => {
    setIsLoggedIn(false);

  }


  return (
   <Fragment>
    <main>
      {/* isLogin초깃값 신경쓰지 않고 false면 로그인 페이지, true면 홈으로 */}
      {!isLoggedIn && <Login onLogin={loginHandler}/>}
      {isLoggedIn && <Home onLogout={logoutHandler}/>}
    </main>
   </Fragment>
  );
}

export default App;
