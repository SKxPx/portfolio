import "@github/typing-effect-element";

const Title = () => {
  return (
    <h1>
    <typing-effect data-lines='["Sebastián Castro Pavez"]'>
      <span data-target="typing-effect.content"></span>
      <span data-target="typing-effect.cursor">|</span>
    </typing-effect>
    </h1>
  );
};

export default Title;
