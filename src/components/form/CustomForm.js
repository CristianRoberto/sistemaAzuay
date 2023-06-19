/* eslint-disable react/prop-types */
import { Col, Row } from 'antd';
import Form from 'antd/lib/form/Form';  
import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { BasicFormWrapper } from 'container/styled';
import { Cards } from 'components/cards/frame/cards-frame';


const CustomForm = (props) => {
    const { id, children, title, divider, icon, form } = props;
    return (
        <Cards id={id} headless={!divider} title={title} isbutton={<FeatherIcon icon={icon} />}>
            <Row justify="center">
                <Col xxl={24} lg={24} md={24} xs={24}>
                    <BasicFormWrapper>
                        <Form form={form} >
                            {children}
                        </Form>
                    </BasicFormWrapper>
                </Col>
            </Row>
        </Cards>
    );
};

export default CustomForm;
