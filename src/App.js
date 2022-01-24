import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')

  return (
    <div className="App">
      {/* setting up a section (main div) */}
      <section className='markdown'>
        {/* input will have a value of 'markdown' to initialize it with some dummy-preview text */}
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          {/* using default markdown view by passing jsx markdown input */}
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </div>
  );
}

export default App;
