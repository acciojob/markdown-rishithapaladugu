import React, { useEffect, useState } from "react";
import Markdown from 'react-markdown'

export const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="container">
      <textarea
        className="textarea"
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <div className="preview">
        <Markdown>{preview}</Markdown>
      </div>
    </div>
  );
};
