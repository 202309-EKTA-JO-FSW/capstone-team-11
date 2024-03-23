import React from "react";

const styles = {
  Button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '56px',
    height: '56px',
    border: '5',
    boxSizing: 'border-box',
    borderRadius: '12px',
    color: '#ffffff',
    backgroundColor: '#1b1b1d',
    outline: 'none',
    textDecoration: 'none', // To remove underline from anchor tag
  },
  Title: {
    marginLeft: '8px', // Adjust margin as needed
  },
};

export default function Button({ title, addClassName }) {
  return (
    <a
      href="/sortpage"
      className={`text-white bg-gray-950 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 md:me-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700`}
      style={{ ...styles.Button, ...addClassName }}
    >
      <svg style={{ ...styles.Icon }} viewBox="0 0 448 512">
        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
      </svg>
      <span style={styles.Title}>{title}</span>
    </a>
  );
}
