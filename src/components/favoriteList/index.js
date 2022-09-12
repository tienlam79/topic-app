import React, { useMemo } from 'react';
import TopicList from '../topicList';

const FavoriteList = ({ topics, setTopics }) => {
  const favorites = useMemo(() => topics.filter(item => item.favorite), [topics]);
  return <TopicList
    title="My List"
    topic={favorites}
    setTopics={setTopics}
  />
}

export default FavoriteList;