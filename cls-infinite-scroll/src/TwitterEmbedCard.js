const TwitterEmbedCard = ({ content }) => {
  return (
    <div className='twitter-post-card'>
      <div className='twitter-tweet'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default TwitterEmbedCard;
