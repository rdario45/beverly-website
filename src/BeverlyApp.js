import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack } from "react-bootstrap";
import appInitState from "./redux/store/appInitState";
import useBeverlyApp from "./redux/hooks/useBeverlyApp";
import authInitState from "./redux/store/authInitState";
import useBeverlyAuth from './redux/hooks/useBeverlyAuth';
import BeverlyHeader from "./components/BeverlyHeader";
import BeverlyAuthScreen from './screens/BeverlyAuthScreen';
import AgendasScreen from './screens/AgendasScreen';
import BalanceScreen from './screens/BalanceScreen';
import { AiOutlineUserDelete } from "react-icons/ai";
import { BsCalendarPlus } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import CreateForm from "./components/CreateCitaForm";

export default function BeverlyApp() {
  const [accessToken, authCtrl] = useBeverlyAuth(authInitState);
  const { headerCtrl,
    agendasCtrl,
    balanceCtrl
  } = useBeverlyApp(Object.assign(appInitState, { accessToken }));

  if (!accessToken) {
    return <BeverlyAuthScreen {...authCtrl} />
  }

  const icon1 = <AiOutlineUserDelete onClick={authCtrl.logout} />

  const icon2 = <BsCalendarPlus onClick={headerCtrl.handleShow} />

  const modal = <Modal show={headerCtrl.isModalVisible} onHide={headerCtrl.handleClose}>
    <Modal.Body>
      <CreateForm
        {...headerCtrl.createFormCtrlPkg}
      />
    </Modal.Body>
  </Modal>

  return (
    <Stack direction="vertical">
      <BeverlyHeader {...headerCtrl} icons={[icon1, icon2]} />
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

      {modal}

    </Stack>
  );
};