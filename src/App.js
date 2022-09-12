import './App.css';
import Header from './components/header';
import TopicList from './components/topicList';
import React, { useState} from 'react';
import { TOPICS } from './components/topicList/data';

function App() {
  const [topics, setTopics] = useState(TOPICS);
  const [showFavoriteList, setShowFavoriteList] = useState(false);
  return (
    <div className="App">
      <Header
        topics={topics}
        onShowFavoriteList={() => setShowFavoriteList(!showFavoriteList)}
      />
      <div>
        <TopicList
          topics={topics}
          setTopics={setTopics}
        />
      </div>
    </div>
  );
}

export default App;
