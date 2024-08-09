import React, { useState } from "react";
// import { MonacoEditor } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor = () => {
  const [code, setCode] = useState(
    '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}'
  );
  const [output, setOutput] = useState("");

  const handleCompile = async () => {
    try {
      const response = await axios.post("http://localhost:5000/compile", {
        code,
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput("Error compiling the code");
    }
  };

  return (
    <Editor
      height="400px"
      defaultLanguage="cpp"
      defaultValue="// some comment"
    />
  );
};

export default CodeEditor;
