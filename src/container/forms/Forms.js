import { Col, Row } from 'antd';
import ForgotPassword from 'pages/public/auth/overview/ForgotPassword';
import SignIn from 'pages/public/auth/overview/SignIn';
import SignUp from 'pages/public/auth/overview/Signup';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { FormGroupWrapper, Main } from '../styled';

const Forms = () => {
  return (
    <>
      <PageHeader ghost title="Forms" />
      <Main>
        <FormGroupWrapper>
          <Row gutter={15}>
            <Col xs={24}>
              <Cards title="Login Form">
                <SignIn />
              </Cards>
            </Col>
            <Col xs={24}>
              <Cards title="Register Form">
                <SignUp />
              </Cards>
            </Col>
            <Col xs={24}>
              <Cards title="Forget Password">
                <ForgotPassword />
              </Cards>
            </Col>
          </Row>
        </FormGroupWrapper>
      </Main>
    </>
  );
};

export default Forms;
