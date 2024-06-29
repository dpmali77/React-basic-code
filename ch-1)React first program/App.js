const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );

  const heading3 = React.createElement(
    "h3",
    {
      id: "title",
    },
    "Heading 3"
  );

  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2, heading3]
  );
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(container);
  