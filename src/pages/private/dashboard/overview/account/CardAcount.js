/* eslint-disable react/prop-types */
import { Col, Divider, Row, Typography } from 'antd';
import { Cards } from 'components/cards/frame/cards-frame';
import Heading from 'components/heading/heading';

const { Text } = Typography;

function CardAcount(props) {
  const {
    name,
    number, //
    labelCenter,
    valueCenter, //
    labelFt1,
    valueFt1, //
    labelFt2,
    valueFt2,
  } = props;

  return (
    <Col xxl={8} md={8} xs={24}>
      <Cards size="large" headless bodyStyle={{ backgroundColor: '#F2F7E3' }} border>
        {name}
        <br />
        <Text> {number}</Text>
        <Divider />
        <Heading as="h3">
          <span className="color-primary">{valueCenter}</span>
        </Heading>
        <Text> {labelCenter}</Text>
        <Divider />
        <Row gutter={25}>
          <Col xxl={12} md={12} xs={12}>
            {valueFt1}
            <br />
            <Text> {labelFt1}</Text>
          </Col>
          <Col xxl={12} md={12} xs={12}>
            {valueFt2}
            <br />
            <Text> {labelFt2}</Text>
          </Col>
        </Row>
      </Cards>
    </Col>
  );
}

export default CardAcount;
