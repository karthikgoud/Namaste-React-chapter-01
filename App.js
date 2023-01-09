// create element in react
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "header",
  },
  "Heading using React"
);

const heading2 = React.createElement(
  "h2",
  {
    className: "header",
  },
  "Heading 2 usibg React"
);

// create roor in react
const root = ReactDOM.createRoot(document.getElementById("root"));

// render heading in root using react
root.render([heading1, heading2]);
