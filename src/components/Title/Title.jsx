import "@github/typing-effect-element";
import "./css/Title.css"

const Title = () => {
  return (
    <h1>
    <typing-effect data-lines='["Sebastián Pavez Castro"]'>
      <span data-target="typing-effect.content"></span>
      <span data-target="typing-effect.cursor">|</span>
    </typing-effect>
    </h1>
  );
};

export default Title;
