import { useEffect, useRef, useState } from "react";

function App() {
  const [words, setWords] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div>
      <input
        value={words}
        onChange={(e) => setWords(e.target.value)}
      />
      <div>You typed {words} </div>
      <h1>I rendered {renderCount.current} times </h1>
    </div>
  );
}

export default App;
