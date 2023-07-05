function TextoDeColor({  text ,txtColor }) {
  return (
    <span
      style={{
        color: txtColor,
        fontWeight: "bold",
        fontFamily: "Shantell Sans",
      }}
    >
      {text}
    </span>
  );
}

export default TextoDeColor;
