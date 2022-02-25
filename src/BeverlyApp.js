import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack } from "react-bootstrap";
import BeverlyHeader from "./components/BeverlyHeader";
import AgendasScreen from './screens/AgendasScreen';
import BalanceScreen from './screens/BalanceScreen';
import useBeverlyApp from "./redux/hooks/useBeverlyApp";
import initialState from "./redux/store/initialState";

export default function BeverlyApp() {
  const {
    headerCtrl,
    agendasCtrl,
    balanceCtrl,
  } = useBeverlyApp(initialState);

  return (
    <Stack direction="vertical">
      <BeverlyHeader {...headerCtrl} />
      <div style={{
        height: "600px"
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