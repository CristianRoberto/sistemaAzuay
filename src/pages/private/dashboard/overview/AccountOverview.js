import { Divider } from 'antd';
import Heading from 'components/heading/heading';
import TabsBtn from 'components/tabs/TabsBtn';
import { useState } from 'react';
import AhorroProgramadoOverview from './account/AhorroProgramadoOverview';
import AhorrosOverview from './account/AhorrosOverview';
import CertificadoOverview from './account/CertificadoOverview';
import InversionesOverview from './account/InversionesOverview';
import { SocialMediaWrapper } from '../style';

function AccountOverview() {
  const [activeTabAhorros, setActiveTaAhorros] = useState(1);

  const [activeTabCredito, setActiveTaCredito] = useState(1);

  const dataTabsAhorros = [
    { id: 1, label: 'Ahorro a la vista' },
    { id: 2, label: 'Inversiones' },
    { id: 3, label: 'Ahorros Programado' },
    { id: 4, label: 'Certificado' },
  ];

  const dataTabsCredito = [
    { id: 1, label: 'Crédito' },
    { id: 2, label: 'Línea de Crédito' },
  ];

  return (
    <SocialMediaWrapper>
      <Heading as="h3" className="color-primary">
        Captaciones y Ahorros
      </Heading>

      <TabsBtn data={dataTabsAhorros} activeTab={activeTabAhorros} setActiveTab={setActiveTaAhorros} />
      {activeTabAhorros === 1 && <AhorrosOverview />}
      {activeTabAhorros === 2 && <InversionesOverview />}
      {activeTabAhorros === 3 && <AhorroProgramadoOverview />}
      {activeTabAhorros === 4 && <CertificadoOverview />}

      <Divider />
      <Divider />

      <Heading as="h3" className="color-primary">
        Créditos
      </Heading>
      <TabsBtn data={dataTabsCredito} activeTab={activeTabCredito} setActiveTab={setActiveTaCredito} />
      {activeTabCredito === 1 && <AhorrosOverview />}
      {activeTabCredito === 2 && <InversionesOverview />}
 
    </SocialMediaWrapper>
  );
}

export default AccountOverview;
