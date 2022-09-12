import React from 'react';
import './styles.css';
import { Heart, HeartFill } from '../../assets/images';

const TopicItem = ({ topic, onFavorite }) => {
  return <div className='topic-item-card'>
    <img src={topic.image} className='topic-item-img' alt='topic-img' />
    <div className='topic-item-body'>
      <div className='topic-item-title'>
        {topic.title}
      </div>
      <div className='topic-item-desc'>
        {topic.desc}
      </div>
      <div className='topic-item-actions'>
        {topic?.favorite ?
          <button className='topic-item-btn' onClick={() => onFavorite(topic)}>
            <img src={HeartFill} alt='heart-fill-img' />
            <span>Remove favorite</span>
          </button> :
          <button className='topic-item-btn' onClick={() => onFavorite(topic)}>
            <img src={Heart} alt='heart-img' />
            <span>Add favorite</span>
          </button>
        }
      </div>
    </div>
  </div>
};

export default TopicItem;