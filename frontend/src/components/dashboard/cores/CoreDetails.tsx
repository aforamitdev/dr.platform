import React, { useState } from 'react';
import { cpu } from '../../../../wailsjs/go/models';
import { Badge } from 'react-bootstrap';

type Props = {
  details: cpu.InfoStat;
};

function CoreDetails({ details }: Props) {
  const [limit, setLimit] = useState(5);
  return (
    <div>
      <div className='tw-flex tw-justify-between'>
        <CoreHeader name='Cache Size' value={details.cacheSize} />
        <CoreHeader name='Mhz' value={details.mhz} />
        <CoreHeader name='Model' value={details.model} />
      </div>
      <div className='tw-pt-3 '>
        <div className='tw-text-xs tw-text-gray-500 tw-font-bold'>
          CPU's Flags
        </div>
        {CpuFlags(details.flags, limit)}
        {limit <= details.flags.length && (
          <div
            className='tw-text-xs tw-text-gray-500 tw-pt-1 tw-pl-1 tw-cursor-pointer'
            onClick={() => setLimit(details.flags.length - 1)}
          >
            {details.flags.length - 7} More
          </div>
        )}
      </div>
    </div>
  );
}

const CoreHeader = ({
  name,
  value,
}: {
  name: string;
  value: number | string;
}) => {
  return (
    <div>
      <div className='tw-text-xs tw-text-gray-500 tw-font-bold'>{name}</div>
      <div className='tw-text-sm tw-font-semibold'>{value}</div>
    </div>
  );
};

const CpuFlags = (flags: string[], limit = 5) => {
  return (
    <div className='tw-space-y-1'>
      {flags.slice(0, limit).map((f) => (
        <Badge key={f} bg='success' className='tw-mx-0.5 tw-text-xs'>
          {f}
        </Badge>
      ))}
    </div>
  );
};
export default CoreDetails;
