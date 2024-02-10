import React from "react";

function AllQuestionsComponent({ index, isOpen, onToggle }) {
  return (
    <div className="question-container">
      <div className="question-container-top-section">
        <button onClick={() => onToggle(index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 5.96484V19.9648M5 12.9648H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h3>What's the difference between Pro and Free?</h3>
      </div>
      <div
        style={{ display: isOpen && "block" }}
        className="question-bottom-container"
      >
        <p>
          Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt
          arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh
          dolores consectetuer,
        </p>
      </div>
    </div>
  );
}

export default AllQuestionsComponent;
