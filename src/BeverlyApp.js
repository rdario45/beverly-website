import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack } from "react-bootstrap";
import BeverlyHeader from "./components/BeverlyHeader";
import AgendasScreen from './screens/AgendasScreen';
import BalanceScreen from './screens/BalanceScreen';
import BeverlyAuthScreen from './screens/BeverlyAuthScreen';
import useBeverlyApp from "./redux/hooks/useBeverlyApp";
import authInitState from "./redux/store/authInitState";
import initialState from "./redux/store/initialState";
import useBeverlyAuth from './redux/hooks/useBeverlyAuth';

export default function BeverlyApp() {
  const [accessToken, authCtrl] = useBeverlyAuth(authInitState);
  const { headerCtrl,
    agendasCtrl,
    balanceCtrl
  } = useBeverlyApp(Object.assign(initialState, { accessToken }));

  if (!accessToken) {
    return <BeverlyAuthScreen {...authCtrl} />
  }

  return (
    <Stack direction="vertical">
      <BeverlyHeader {...headerCtrl} />
      <div style={{
        height: (window.innerHeight - headerCtrl.headerHeight)
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AgendasScreen {...agendasCtrl} />}></Route>
            <Route path="/balance" element={<BalanceScreen {...balanceCtrl} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Stack>
  );
};