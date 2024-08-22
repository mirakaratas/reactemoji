import React, { useState, useEffect } from 'react';
import emojiData from './Emoji.json';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojiData);

  useEffect(() => {
 
    const newFilteredEmojis = emojiData.filter(emoji =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEmojis(newFilteredEmojis);
  }, [search]);

  const copyToClipboard = (text) => {

    navigator.clipboard.writeText(text)
      .then(() => {
      })
      
  };

  return (
    <div className="App">
      <h1> 🐾 Emoji Search 🐾</h1>
      <input
        type="text"
        placeholder=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="emoji-list">
        {filteredEmojis.map((emoji) => (
          <div key={emoji.title} className="emoji-item">
            <span>{emoji.symbol}</span> {emoji.title}
            <span 
              className="copy-text" 
              onClick={() => copyToClipboard(emoji.symbol)}
            >
              Click to copy Emoji
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;





