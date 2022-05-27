import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
/****site route*****/
//  Home page
const Home = lazy(() => import("./pages/Home"));
const PpartnerHome = lazy(() => import("./pages/PpartnerHome"));
const ChattingPage = lazy(() => import("./pages/ChattingPage"));
const Owner = lazy(() => import("./pages/Owner"));
const Referrals = lazy(() => import("./pages/Referrals"));
const Wallet = lazy(() => import("./pages/Wallet"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Withdraw = lazy(() => import("./pages/Withdraw"));
const Profile = lazy(() => import("./pages/Profile"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/partner" component={PpartnerHome} />
          <Route exact path="/chatroom" component={ChattingPage} />
          <Route exact path="/owner" component={Owner} />
          <Route exact path="/referrals" component={Referrals} />
          <Route exact path="/wallet" component={Wallet} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <Route exact path="/withdraw" component={Withdraw} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
