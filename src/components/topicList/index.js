import React from 'react';
import Container from '../container';
import TopicItem from '../topicItem';
import './styles.css';

const TopicList = ({ title, topics, setTopics }) => {
  const onFavorite = (topic) => {
    const newTopic = {
      ...topic,
      favorite: !topic.favorite,
    };
    const topicIndex = topics.findIndex(item => item.id === topic.id);
    topics.splice(topicIndex, 1, newTopic);
    setTopics([...topics]);
  }
  return <Container>
      <div>
        {!!title && <h4>{title}</h4>}
        <div className='topic-list-container'>
          {topics.map((topic) =>
            <TopicItem
              key={`topic-${topic.id}`}
              topic={topic}
              onFavorite={onFavorite}
            />
          )}
        </div>
      </div>
    </Container>;
}

export default TopicList;