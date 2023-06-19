import { Alert, Button, Col, Form, Input, Row, Typography } from 'antd';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Auth0Lock } from 'auth0-lock';
import { Checkbox } from 'components/checkbox/checkbox';
import Heading from 'components/heading/heading';
import { auth0options } from 'config/auth0';
import { login } from 'redux/authentication/actionCreator';
import { AuthWrapper } from './style';

const { Text, Link } = Typography;

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleSubmit = useCallback(() => {
    dispatch(login());
    history.push('/admin');
  }, [history, dispatch]);

  lock.on('authenticated', (authResult) => {
    lock.getUserInfo(authResult.accessToken, (error) => {
      if (error) {
        return;
      }
      handleSubmit();
      lock.hide();
    });
  });

  return (
    <AuthWrapper>
      <div className="auth-contents">
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} xs={24}>
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <p className="auth-logo">
                <img style={{ width: '75%' }} src={require('assets/img/Logo_white.png')} alt="" />
              </p>
              <Heading as="h3">
                Acceso a Socias / <span className="color-primary">Socios</span>
              </Heading>
              <p>
                Estimado socio, si usted está ingresando por primera vez, debe hacerlo con su Cédula, RUC o Pasaporte.
              </p>
              <p>Si usted ya se registró, por favor ingrese con su nuevo usuario: Ejemplo: usuario 123</p>
              <Form.Item
                name="username"
                rules={[{ message: 'Por favor ingrese su nombre de usuario!', required: true }]}
                placeholder="name123"
                label="Usuario"
              >
                <Input />
              </Form.Item>
              <Form.Item name="password" initialValue="" label="Clave">
                <Input.Password placeholder="Clave" />
              </Form.Item>
              <div className="auth-form-action">
                <p />
                <NavLink className="forgot-pass-link" to="/forgotPassword">
                  Olvidé mi clave
                </NavLink>
              </div>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Loading...' : 'Iniciar Sesión'}
                </Button>
              </Form.Item>
              <Alert
                message="La Cooperativa le recuerda que su clave/contraseña es secreta. Jardín Azuayo NO solicita ninguna información por este medio."
                type="success"
                showIcon
              />
              <br />
              <br />
              <Text type="success">¿Tienes problemas para ingresar?</Text>
              <br />
              <Text>¿Cómo recupero mi usuario en la Banca Virtual?</Text>
              <br />
              <Text>¿Cómo crea un usuario en la Banca Virtual?</Text>
              <br /> <br />
              <p className="auth-notice">
                No tiene una cuenta? <NavLink to="/register">Contrata ahora</NavLink>
              </p>
            </Form>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} xs={0}>
          </Col>
        </Row>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
