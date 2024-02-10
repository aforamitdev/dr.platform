import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Core from './Core';
import { GetCpuInfo } from '../../../../wailsjs/go/system/System';
import { cpu } from '../../../../wailsjs/go/models';
import './core.scss';
type Props = {};

const List = (props: Props) => {
  const [list, setList] = useState<cpu.InfoStat[]>([]);

  useEffect(() => {
    GetCpuInfo().then((e) => {
      setList(e);
    });
  }, []);

  return (
    <div className=' tw-bg-white tw-w-full'>
      <Accordion defaultActiveKey='0' flush>
        {list.map((core, i) => {
          return <Core core={core} key={i} />;
        })}
      </Accordion>
    </div>
  );
};

export default List;
