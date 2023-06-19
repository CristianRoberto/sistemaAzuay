import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Form, Input } from 'antd';
import { Checkbox } from 'components/checkbox/checkbox';
import Heading from 'components/heading/heading';
import { lazy, useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthWrapper } from './style';
import { BreadcrumbWrapperStyle } from 'container/ui-elements/ui-elements-styled';

const WizardsOne = lazy(() => import('container/pages/wizards/overview/WizardsOne'));
const WizardsTwo = lazy(() => import('container/pages/wizards/overview/WizardsTwo'));
const WizardsThree = lazy(() => import('container/pages/wizards/overview/WizardsThree'));
const WizardsFour = lazy(() => import('container/pages/wizards/overview/WizardsFour'));
const WizardsFive = lazy(() => import('container/pages/wizards/overview/WizardsFive'));
const WizardsSix = lazy(() => import('container/pages/wizards/overview/WizardsSix'));

function SignUp() {
  const [state, setState] = useState({
    values: null,
    checked: null,
  });
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      <div className="auth-contents">
        <Form name="register" onFinish={handleSubmit} layout="vertical">
          <p className="auth-logo">
            <img style={{ width: '75%' }} src={require('assets/img/Logo_white.png')} alt="" />
          </p>

          <BreadcrumbWrapperStyle>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>Inicio</Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="#">Creación de Perfil</NavLink>
              </Breadcrumb.Item> 
            </Breadcrumb>
          </BreadcrumbWrapperStyle>
          <br />
          <br />

          <WizardsSix />

          <p className="auth-notice">
            Ya tienes una cuenta? <NavLink to="/">Ingresa</NavLink>
          </p>
        </Form>
      </div>
    </AuthWrapper>
  );
}

export default SignUp;
