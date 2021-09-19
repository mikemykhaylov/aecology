import React from 'react';
import PropTypes from 'prop-types';

function Google({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 46 46"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      width={size}
      height={size}
    >
      <path
        d="M45.08 23.524c0-1.633-.146-3.2-.419-4.705H23v8.896h12.38c-.535 2.875-2.155 5.31-4.59 6.94v5.774h7.431c4.35-4.005 6.86-9.903 6.86-16.905z"
        fill="#4285f4"
      />
      <path
        d="M23 46c6.21 0 11.416-2.06 15.221-5.571l-7.432-5.773c-2.06 1.38-4.694 2.195-7.789 2.195-5.99 0-11.06-4.045-12.87-9.481H2.446v5.96C6.23 40.846 14.01 46 23 46z"
        fill="#34a853"
      />
      <path
        d="M10.13 27.37A13.83 13.83 0 019.41 23c0-1.515.26-2.99.72-4.37v-5.96H2.446A23.013 23.013 0 000 23c0 3.71.89 7.225 2.446 10.33l7.684-5.96z"
        fill="#fbbc05"
      />
      <path
        d="M23 9.149c3.376 0 6.41 1.16 8.791 3.437L38.39 5.99C34.406 2.28 29.2 0 23 0 14.01 0 6.23 5.155 2.446 12.67l7.684 5.96c1.81-5.436 6.88-9.481 12.87-9.481z"
        fill="#ea4335"
      />
    </svg>
  );
}

Google.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Google;
