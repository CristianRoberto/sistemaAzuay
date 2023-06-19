import { useEffect, useState } from 'react';
import CardAcount from './CardAcount';
import FormBasic from '../../../../../components/form/FormBasic';

const dataAccounts = [
  { number: '12XXX23', name: 'Ahorro a la vista', balance: 1234.45, balanceTotal: 900.45, balanceLocked: 100.45 },
  { number: '12XXX24', name: 'Ahorro a la vista', balance: 1234.45, balanceTotal: 900.45, balanceLocked: 100.45 },
  { number: '12XXX25', name: 'Ahorro a la vista', balance: 1234.45, balanceTotal: 900.45, balanceLocked: 100.45 },
];

function AhorrosOverview() {
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
            labelCenter="Saldo Disponible"
            valueCenter={data.balance}
            labelFt1="Saldo Total"
            valueFt1={data.balanceTotal}
            labelFt2="Saldo Bloqueado"
            valueFt2={data.balanceLocked}
          />
        );
      })}
    </FormBasic>
  );
}

export default AhorrosOverview;
