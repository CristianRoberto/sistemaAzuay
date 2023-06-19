import { Col, Skeleton } from 'antd';
import { Cards } from 'components/cards/frame/cards-frame';
import Heading from 'components/heading/heading';
import CustomPage from 'components/page/CustomPage';
import userSesion from 'demoData/usersSesion.json';
import { Suspense, lazy } from 'react';

const AccountOverview = lazy(() => import('./overview/AccountOverview'));

function Dashboard() {
  return (
    <>
      <CustomPage title = ''>
        <Heading as="h3">
          Hola de nuevo, <span className="color-primary">{userSesion.name}</span>!
        </Heading>

        <p>
          Revisa tus productos con Jardin Azuayo
          <img src={require(`assets/img/logo_icono.png`)} width={150} height={20} alt="Logo" />
        </p>
        <br />

        <Col xxl={8} lg={24} xs={24}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <AccountOverview />
          </Suspense>
        </Col>
      </CustomPage>
    </>
  );
}

export default Dashboard;
