/* eslint-disable react/prop-types */
import { Col, Row, Skeleton } from 'antd';
import { Cards } from 'components/cards/frame/cards-frame';
import Seccion from 'components/page/Seccion';
import { Suspense } from 'react';

function FormBasic(props) {
  const { children, loading } = props;
  return (
    <Col xxl={24} md={24} xs={24}>
      <Suspense
        fallback={
          <Cards headless>
            <Skeleton active />
          </Cards>
        }
      > 
        {loading && <Seccion loading={loading} />}
        {!loading && <Row gutter={15}>{children}</Row>}
      </Suspense>
    </Col>
  );
}

export default FormBasic;
