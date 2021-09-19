import React from 'react';
import PropTypes from 'prop-types';

function Tip({ fill, size }: { fill: string; size: number }) {
  return (
    <svg height={size} viewBox="-91 0 511 511.999" width={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M255.999 0C162.262 0 86.001 76.251 86.001 169.979c0 47.663 20.533 93.881 56.334 126.806 17.153 15.776 26.991 38.229 26.991 61.599v66.968c0 47.778 38.871 86.648 86.649 86.648s86.648-38.871 86.648-86.648V359.92c.077-.501.117-1.014.117-1.536 0-23.23 9.722-45.484 26.674-61.056 35.96-33.036 56.584-79.452 56.584-127.349C425.998 76.251 349.737 0 255.999 0zm66.625 425.353c0 36.749-29.898 66.647-66.648 66.647-36.751 0-66.649-29.898-66.649-66.648v-31.348l56.674-.004v20.191l-25.033 25.034c-3.905 3.905-3.905 10.237 0 14.143a9.972 9.972 0 007.071 2.929 9.972 9.972 0 007.071-2.929l10.891-10.891v22.192c0 5.522 4.478 10 10 10s10-4.478 10-10v-50.153l10.89 10.89c1.953 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-17.264-17.264 48.856-.003v31.357zM355.885 282.6c-20.67 18.986-32.689 45.938-33.131 74.168a9.99 9.99 0 00-.13 1.615v15.612l-56.625.004v-86.501a97.512 97.512 0 0022.076 2.56c17.835 0 40.58-5.094 60.738-25.252 39.874-39.874 20.804-89.86 19.973-91.968a9.996 9.996 0 00-6.241-5.852l-.021-.007c-8.793-3.087-54.519-16.625-91.341 20.197-6.533 6.533-11.475 13.338-15.183 20.159-3.708-6.821-8.65-13.626-15.183-20.159-36.823-36.822-82.549-23.285-91.341-20.197l-.021.007a9.999 9.999 0 00-6.241 5.852c-.831 2.108-19.901 52.095 19.973 91.968 20.161 20.161 42.902 25.253 60.738 25.252a97.515 97.515 0 0022.077-2.561v86.504l-56.675.004v-15.621c0-28.949-12.192-56.767-33.452-76.318-31.695-29.149-49.873-70.002-49.873-112.085 0-82.698 67.289-149.979 149.999-149.979S406 87.282 406 169.981c-.002 42.311-18.269 83.36-50.115 112.619zm-89.843-36.761c.439-13.395 4.698-29.938 19.282-44.523 24.445-24.448 54.137-20.015 66.221-16.797 3.009 11.168 7.949 41.321-16.874 66.143-18.472 18.471-39.887 20.457-54.233 19.03l36.628-36.624c3.906-3.905 3.906-10.236.001-14.142-3.903-3.904-10.236-3.906-14.142 0l-36.571 36.567a75.798 75.798 0 01-.323-5.086c.04-1.485.046-3.009.011-4.568zm-71.111-12.771l36.569 36.565c-14.377 1.386-35.824-.62-54.174-18.971-24.837-24.836-19.877-55.01-16.876-66.141 12.084-3.219 41.775-7.652 66.223 16.795 14.263 14.263 18.691 30.279 19.315 43.445a93.96 93.96 0 00.01 6.636 75.248 75.248 0 01-.296 4.157l-36.631-36.627c-3.904-3.905-10.237-3.905-14.142 0-3.904 3.905-3.904 10.236.002 14.141z"
        fill={fill}
      />
      <path
        d="M256.108 40h-.109c-5.522 0-10 4.477-10 10s4.478 10 10 10h.109c5.522 0 10-4.477 10-10s-4.477-10-10-10zM366.255 101.091c-15.355-24.523-38.737-43.454-65.839-53.305-5.194-1.89-10.929.792-12.814 5.982-1.887 5.19.792 10.928 5.982 12.814 22.933 8.335 42.721 24.359 55.721 45.122a9.99 9.99 0 008.485 4.695 9.952 9.952 0 005.297-1.526c4.681-2.931 6.099-9.102 3.168-13.782zM71.073 56.932l-24.5-24.5c-3.907-3.904-10.237-3.904-14.143 0-3.905 3.906-3.905 10.238 0 14.143l24.5 24.5a9.97 9.97 0 007.071 2.929c2.56 0 5.118-.977 7.072-2.929 3.905-3.907 3.905-10.238 0-14.143zM479.57 32.432c-3.907-3.904-10.237-3.904-14.143 0l-24.5 24.5c-3.905 3.906-3.905 10.238 0 14.143a9.97 9.97 0 007.071 2.929c2.56 0 5.118-.977 7.072-2.929l24.5-24.5c3.905-3.906 3.905-10.238 0-14.143zM71.073 352.39c-3.907-3.904-10.237-3.904-14.143 0l-24.5 24.5c-3.905 3.906-3.905 10.238 0 14.143a9.97 9.97 0 007.071 2.929c2.56 0 5.118-.977 7.072-2.929l24.5-24.5c3.905-3.906 3.905-10.238 0-14.143zM479.57 376.89l-24.5-24.5c-3.907-3.904-10.237-3.904-14.143 0-3.905 3.906-3.905 10.238 0 14.143l24.5 24.5a9.97 9.97 0 007.071 2.929c2.56 0 5.118-.977 7.072-2.929 3.905-3.906 3.905-10.238 0-14.143z"
        fill={fill}
      />
    </svg>
  );
}

Tip.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Tip;