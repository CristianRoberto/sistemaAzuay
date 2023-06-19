import { Col, Row } from 'antd';
import Heading from 'components/heading/heading';
import { Aside, Content } from './overview/style';

const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Row>
        <Col xxl={24} xl={24} lg={24} md={24} xs={24}>
          <WraperContent />
        </Col>  
      </Row>
    );
  };
};

export default AuthLayout;
