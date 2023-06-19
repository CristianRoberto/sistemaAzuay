/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Row, Spin } from 'antd';

const Seccion = (props) => {
  return (
    <>
      {props.loading ? (
        <Row gutter={25} justify="center">
          <div className="sd-spin">
            <Spin />
          </div>
        </Row>
      ) : (
        props.children
      )}
    </>
  );
};

export default Seccion;
