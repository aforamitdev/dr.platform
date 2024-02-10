import React from 'react';
import { Accordion } from 'react-bootstrap';
import { cpu } from '../../../../wailsjs/go/models';
import './core.scss';
import CoreDetails from './CoreDetails';

type Props = {
  core: cpu.InfoStat;
};

const Core = ({ core }: Props) => {
  return (
    <Accordion.Item eventKey={core.coreId.toString()}>
      <Accordion.Header as={'p'} className='tw-text-sm'>
        {core.modelName}
      </Accordion.Header>
      <Accordion.Body>
        <CoreDetails details={core} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Core;
