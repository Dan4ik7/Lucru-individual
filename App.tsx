import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";
import { Menu } from 'antd';
import {
AppstoreOutlined,
MailOutlined,
SettingOutlined,
} from '@ant-design/icons';
import { Pagina2 } from "./Pagina2";
import { Optiune1 } from "./Optiune1";

const { SubMenu } = Menu;

function App() {
return (
<div className="main_cont">
<Router>
<Menu mode="inline">
<Menu.Item key="home" icon={<MailOutlined />}>
<Link to="/">Pagina Mea</Link>
</Menu.Item>
<Menu.Item key="pagina2" icon={<AppstoreOutlined />}>
<Link to="/pagina2">Informatia proprietarului</Link>
</Menu.Item>
<SubMenu key="sub1" icon={<SettingOutlined />} title="Opțiuni">
<Menu.Item key="optiune1">
<Link to="/optiune1">Opțiunea 1</Link>
</Menu.Item>
</SubMenu>
{/* Add additional menu items below */}
<Menu.Item key="optiune2" icon={<SettingOutlined />}>
<Link to="/optiune2">Opțiunea 2</Link>
</Menu.Item>
<Menu.Item key="optiune3" icon={<SettingOutlined />}>
<Link to="/optiune3">Opțiunea 3</Link>
</Menu.Item>
</Menu>
<Routes>
      <Route path="/" element={<h1>Bine ați venit pe Pagina Principala!</h1>} />
      <Route path="/pagina2" element={<Pagina2 />} />
      <Route path="/optiune1" element={<Optiune1 />} />
      {/* Add additional routes below */}
      <Route path="/optiune2" element={<h1>Opțiunea 2</h1>} />
      <Route path="/optiune3" element={<h1>Opțiunea 3</h1>} />
    </Routes>
  </Router>
</div>
);
}

export default App;