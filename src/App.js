import React, { useState } from 'react';

const WordCount = () => {
 const [text, setText] = useState('');
 const [wordCount, setWordCount] = useState(0);

 const countWords = (text) => {
    return text.trim().split(/\s+/).length;
 };

 const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
    setWordCount(countWords(text));
 };

 return (
    <div>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        rows="4"
        cols="50"
      />
      <p>Word Count: {wordCount}</p>
    </div>
 );
};

export default WordCount;