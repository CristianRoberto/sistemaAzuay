import { useEffect, useState } from 'react';
import CardAcount from './CardAcount';
import FormBasic from '../../../../../components/form/FormBasic';

const dataAccounts = [
  { number: '12XXX23', name: 'Deposito a Plazo Fijo', balance: 1234.45, interesGanado: 900.45, impuesto: 100.45 },
  { number: '12XXX24', name: 'Deposito a Plazo Fijo', balance: 1234.45, interesGanado: 900.45, impuesto: 100.45 },
  { number: '12XXX25', name: 'Deposito a Plazo Fijo', balance: 1234.45, interesGanado: 900.45, impuesto: 100.45 },
];

function InversionesOverview() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setData(dataAccounts);
    setLoading(false);
  }, []);

  return (
    <FormBasic loading={loading}>
      {data.map((data) => {
        return (
          <CardAcount
            name={data.name}
            number={data.number}
            labelCenter="Capital"
            valueCenter={data.balance}
            labelFt1="Interes Ganado"
            valueFt1={data.interesGanado}
            labelFt2="Impuesto"
            valueFt2={data.impuesto}
          />
        );
      })}
    </FormBasic>
  );
}

export default InversionesOverview;
