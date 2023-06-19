/* eslint-disable react/prop-types */
import { Row, Space } from 'antd';
import { Button } from 'components/buttons/buttons';

const TabsBtn = (props) => {
  const { data, activeTab, setActiveTab } = props;

  return (
    <>
      <Row>
        <Space wrap>
          {data.map((data) => {
            return (
              <Button
                shape="round"
                className="btn-signin"
                type={activeTab === data.id ? 'primary' : 'default'}
                size="large"
                onClick={() => {
                  setActiveTab(data.id);
                }}
              >
                {data.label}
              </Button>
            );
          })}
        </Space>
      </Row>
      <br />
    </>
  );
};

export default TabsBtn;
