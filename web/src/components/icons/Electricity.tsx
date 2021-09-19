import React from 'react';
import PropTypes from 'prop-types';

function Electricity({ fill, size }: { fill: string; size: number }) {
  return (
    <svg height={size} viewBox="-91 0 511 511.999" width={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M315.5 211H191.285L298.54 22.414a15.004 15.004 0 00-.074-14.957A14.997 14.997 0 00285.5 0h-180a15 15 0 00-14.234 10.273l-90 270.997A15.002 15.002 0 0015.5 301h127.293l-81.09 190.113a14.998 14.998 0 005.777 18.563 15.006 15.006 0 0019.25-2.73l240-271c8.547-9.657 1.68-24.946-11.23-24.946zM125.578 417.832l53.719-125.945c4.21-9.875-3.04-20.887-13.797-20.887H36.285l80.04-241H259.71L152.46 218.582C146.789 228.555 153.996 241 165.5 241h116.68zm0 0"
        fill={fill}
      />
    </svg>
  );
}

Electricity.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Electricity;
