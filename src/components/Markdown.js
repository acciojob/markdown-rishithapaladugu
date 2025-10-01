import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className='container'>
      <div className='editor'>
        <textarea 
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className='preview'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Markdown;
