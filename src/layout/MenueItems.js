import { Carousel, Menu } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const { SubMenu } = Menu;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function MenuItems({ darkMode, toggleCollapsed, topMenu, collapsed }) {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <SubMenu key="dashboard" icon={!topMenu && <FeatherIcon icon="home" />} title="Mis Cuentas">
        <Menu.Item key="captaciones">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Captaciones
          </NavLink>
        </Menu.Item>
        <Menu.Item key="creditos">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Creditos
          </NavLink>
        </Menu.Item>
        <Menu.Item key="certificados">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Certificado de Deposito
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="transferencias" icon={!topMenu && <FeatherIcon icon="dollar-sign" />} title="Transferencias">
        <Menu.Item key="transferir">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Transferir
          </NavLink>
        </Menu.Item>
        <Menu.Item key="contactos">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Administrar Contactos
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grupos">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Transferir a grupos
          </NavLink>
        </Menu.Item>
        <Menu.Item key="adminGrupos">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Administrar Grupos
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="servicios" icon={!topMenu && <FeatherIcon icon="zap" />} title="Pago de Servicios">
        <Menu.Item key="pago">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Pagar Servicios
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cuentasServicios">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Administrar Cuentas
          </NavLink>
        </Menu.Item>
        <Menu.Item key="bloqueoServicios">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Bloquear Servicios
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="linea" icon={!topMenu && <FeatherIcon icon="credit-card" />} title="Línea de Crédito">
        <Menu.Item key="pago">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Consulta de Estado de Cuenta
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cuentasServicios">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/sellers`}>
            Consulta Movimientos
          </NavLink>
        </Menu.Item>
        <Menu.Item key="bloqueoServicios">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Generar Avances
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="servicios" icon={!topMenu && <FeatherIcon icon="check-square" />} title="Servicios">
        <Menu.Item key="serv-bloqueo">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Bloquear Servicios
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serv-chanchito">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Contratar Ahorro Programado
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serv-dpf">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Contratar Deposito a Plazo
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serv-certificado-deposito">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Certificado de Deposito
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serv-dev-auto">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Cancelar Debitos Contratados
          </NavLink>
        </Menu.Item>
        <Menu.Item key="serv-certificado">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Certificados Digitales
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="perfil" icon={!topMenu && <FeatherIcon icon="user-check" />} title="Perfil">
        <Menu.Item key="perfil-clave">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Cambiar Clave
          </NavLink>
        </Menu.Item>
        <Menu.Item key="perfil-dispositivos">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Admnistrar Dispositivos
          </NavLink>
        </Menu.Item>
        <Menu.Item key="perfil-clave-cajero">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Clave de Cajero
          </NavLink>
        </Menu.Item>
        <Menu.Item key="perfil-consulta-acceso">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Consulta Accesos
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="profile" icon={!topMenu && <FeatherIcon icon="aperture" />} title="Social App">
        <Menu.Item key="myProfile">
          <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/overview`}>
            My Profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key="profileTimeline">
          <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/timeline`}>
            Timeline
          </NavLink>
        </Menu.Item>
        <Menu.Item key="profileActivity">
          <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/activity`}>
            Activity
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="project" icon={!topMenu && <FeatherIcon icon="target" />} title="Project">
        <Menu.Item key="view">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/view/grid`}>
            Project Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="views">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/view/list`}>
            Project List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="ProjectCreate">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/create`}>
            Create Project
          </NavLink>
        </Menu.Item>
        <Menu.Item key="projectDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/projectDetails/1`}>
            Project Details
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="users" icon={!topMenu && <FeatherIcon icon="users" />} title="Users">
        <Menu.Item key="team">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/team`}>
            Team
          </NavLink>
        </Menu.Item>
        <Menu.Item key="user-grid">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid`}>
            Users Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="user-list">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/list`}>
            Users List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid-style">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-style`}>
            Users Grid Style
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid-group">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-group`}>
            Users Group
          </NavLink>
        </Menu.Item>
        <Menu.Item key="addUser">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
            Add User
          </NavLink>
        </Menu.Item>
        <Menu.Item key="user-dataTable">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/dataTable`}>
            Users Table
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <br />
      {!collapsed && (
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      )}
    </Menu>
  );
}

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  collapsed: propTypes.bool,
};

export default MenuItems;
