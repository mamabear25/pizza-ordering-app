import ReactCurvedText from "react-curved-text";

const Low = () => {
  return (
    <ReactCurvedText
    width={370}
    height={1000}
    // right
    cx={200}
    cy={520}
    // left
    rx={100}
    ry={100}
    startOffset={0}
    reversed={false}
    text="AS LOW AS 1500 THIS CHRITMAS"
    textProps={{ style: { fontSize: 24 } }}
    />
  );
};

export default Low;