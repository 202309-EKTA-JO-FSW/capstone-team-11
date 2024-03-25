import React from "react";

const BookButton = () => {
  const handleBook = () => {
    // Add booking functionality here
    console.log("Booking...");
  };

  return (
    <div style={styles.Container}>
      <button style={styles.BookButton} onClick={handleBook}>
        Book Now
      </button>
    </div>
  );
};

const styles = {
  Container: {
    display: "flex",
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    marginTop: "20px", // Adjust margin top as needed
  },
  BookButton: {
    cursor: "pointer",
    width: "200px",
    height: "64px",
    padding: "0px 8px",
    border: "0",
    borderRadius: "12px",
    backgroundColor: "#1b1b1d",
    color: "#ffffff",
    fontSize: "20px",
    fontFamily: "Poppins",
    lineHeight: "64px",
    outline: "none",
  },
};

export default BookButton;
