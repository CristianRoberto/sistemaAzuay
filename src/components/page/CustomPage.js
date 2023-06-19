/* eslint-disable react/prop-types */
import { Col, PageHeader, Row, Skeleton } from 'antd';
import { Cards } from 'components/cards/frame/cards-frame';
import { CardToolbox, Main } from 'container/styled';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { CardButtonHeader } from 'components/page-headers/style';
import Seccion from './Seccion';

const CustomPage = (props) => {
  const { title, subTitle, buttons, loading, children, description } = props;

  const bodyHeader = () => {
    return (
      <>
        <Helmet>
          <title>JA - {title} </title>
          <meta name="description" content={description} />
        </Helmet>
        <PageHeader ghost title={title ? title.toUpperCase() : ''} subTitle={subTitle} buttons={buttons} />
        &nbsp;&nbsp;
        <Main>
          <Row gutter={15}>
            <Col xxl={24} lg={24} md={24} xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Seccion loading={loading}>
                  <Col xxl={24} lg={24} md={24} xs={24}>
                    {children}
                  </Col>
                </Seccion>
              </Suspense>
            </Col>
          </Row>
        </Main>
      </>
    );
  };

  return (
    <>
      {subTitle && (
        <CardToolbox>
          <CardButtonHeader>{bodyHeader()}</CardButtonHeader>
        </CardToolbox>
      )}
      {!subTitle && (
        <>
          <CardButtonHeader>{bodyHeader()}</CardButtonHeader>
        </>
      )}
    </>
  );
};

export default CustomPage;
