import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { MixedCardWrap } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import SocialMediaOverview from '../../pages/private/dashboard/overview/index/SocialMediaOverview';

import Ordersummary from '../ecommerce/overview/Ordersummary';

function WidgetsCard() {
  return (
    <>
      <PageHeader
        title="Widgets Mixed"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <MixedCardWrap>
          <Row gutter={25}>
            <Col md={8} xs={24}>
              <Cards headless>
                <Ordersummary subtotal={1200} />
              </Cards>
            </Col> 
            <Col xxl={8} xs={24}>
              <SocialMediaOverview />
            </Col> 
          </Row>
        </MixedCardWrap>
      </Main>
    </>
  );
}

export default WidgetsCard;
