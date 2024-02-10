import React, { useEffect, useState } from 'react';
import Graph from './Graph';
import { Accordion, Button, Card, Stack } from 'react-bootstrap';
import List from '../cores/List';
import { GetCpuUses } from '../../../../wailsjs/go/system/System.js';
import './graphContainer.scss';

type Props = {};

const GraphContainer = (props: Props) => {
  const [use, setUses] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      GetCpuUses(0, false).then((e) => {
        setUses(e);
      });
    }, 5000);

    return () => {
      interval;
    };
  }, []);
  return (
    <div className=' tw-flex tw-justify-between tw-space-x-3 '>
      <Card style={{ width: '22rem' }}>
        {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
        <Card.Body className='tw-h-56'>
          <Stack
            direction='horizontal'
            className='tw-flex tw-justify-between tw-items-center'
          >
            <Card.Title>CPU</Card.Title>

            {use.length && (
              <div className='tw-text-sm'>12 {use[0].toPrecision(3)}%</div>
            )}
          </Stack>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='tw-h-56 tw-overflow-y-scroll'>
          <List />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default GraphContainer;
