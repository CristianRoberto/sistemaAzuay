/* eslint-disable no-unneeded-ternary */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Col, message, Row } from 'antd';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ActionWrapper, StepsStyle } from './style'; 

const { Step } = StepsStyle;

const Steps = ({
  isvertical,
  size,
  current,
  direction,
  status,
  progressDot,
  steps,
  isswitch,
  navigation,
  onNext,
  onPrev,
  onDone,
  onChange,
  children,
  height,
  isfinished,
  validacion,
  onCancel,
  final
}) => {
  const [state, setState] = useState({
    currents: current,
  });

  const next = () => {
    const currents = state.currents + 1;
    if (validacion(state.currents) != null) return;
    setState({ currents });
    onNext(currents);
  };

  const prev = () => {
    const currents = state.currents - 1;
    setState({ currents });
    onPrev(currents);
  };

  const { currents } = state;

  const stepStyle = {
    marginBottom: 60,
    boxShadow: '0px -1px 0 0 #e8e8e8 inset',
  };

  const onChanges = curr => {
    setState({ currents: curr });
    if (onChange) onChange(curr);
  };

  return (
    <>

      <div className="steps-header-wrapper">
        <StepsStyle current={currents} direction={direction} status={status} progressDot={progressDot} size={size}>
          {steps !== undefined &&
            steps.map(item =>
              <Step
                className={item.className && item.className}
                icon={item.icon && item.icon}
                key={item.title}
                title={item.title} />
            )}
        </StepsStyle>
      </div>

      <div className="steps-wrapper">
        <div
          className="steps-content"
          style={{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }}
        >
          {steps[state.currents].content}
        </div>

        {isfinished && (
          <Row>
            <Col xxl={24} xl={24} lg={24} md={24} xs={24}>
              <div >
                <Button className="btn-prev" type="primary" onClick={onCancel}> 
                  Regresar
                </Button>
              </div>
            </Col>
          </Row>
        )}

        {!isfinished && (
          <>
            <br />
            <ActionWrapper>
              <div className="step-action-wrap">
                <div className="step-action-inner">
                  <Row>
                    <Col xxl={16} xl={16} lg={16} md={24} xs={24}>
                      <div className="steps-action">

                        {state.currents > 0 && (
                          <Button className="btn-prev" type="light" onClick={() => prev()}>
                            <FeatherIcon icon="arrow-left" size={16} />
                            Regresar
                          </Button>
                        )}

                        {state.currents < steps.length - 1 && (
                          <Button className="btn-next" type="primary" onClick={() => next()}>
                            Guardar y Continuar
                            <FeatherIcon icon="arrow-right" size={16} />
                          </Button>
                        )}

                        {state.currents === steps.length - 1 && (
                          <Button className="btn-prev" type="primary" onClick={onDone} htmlType="submit">
                            <FeatherIcon icon="check" size={16} />
                            Finalizar
                          </Button>
                        )}

                        <Button className="btn-prev" type="light" onClick={onCancel}>
                          <FeatherIcon icon="alert-octagon" size={16} />
                          Cancelar
                        </Button>

                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </ActionWrapper>
          </>
        )}
      </div>
    </>
  );
};

Steps.defaultProps = {
  current: 0,
  height: 150,
  onDone: () => message.success('Processing complete!'),
  isfinished: false,
};

Steps.propTypes = {
  size: PropTypes.string,
  current: PropTypes.number,
  direction: PropTypes.string,
  status: PropTypes.string,
  progressDot: PropTypes.func,
  validacion: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.object),
  final: PropTypes.arrayOf(PropTypes.object),
  isswitch: PropTypes.bool,
  navigation: PropTypes.bool,
  isfinished: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onDone: PropTypes.func,
  onChange: PropTypes.func,
  height: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.string]),
};

export { Step, Steps };

