import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [language, setLanguage] = useState('English'); // default language
  const [difficulty, setDifficulty] = useState('medium'); // default difficulty

  return (
    <div className="App">
      <header className="App-header">
        <div className="DropdownWrapper">
          <select
            className="Drop-down"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <div className="Slider">
          <h3>Difficulty: {difficulty}</h3>
          <input
            type="range"
            min="1"
            max="3"
            value={difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '1') setDifficulty('easy');
              else if (value === '2') setDifficulty('medium');
              else if (value === '3') setDifficulty('hard');
            }}
          />
        </div>
      </header>
    </div>
  );
};

export default Popup;