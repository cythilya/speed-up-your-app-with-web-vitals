const TwitterEmbedCard = ({ content }) => {
  const parser = new DOMParser();

  return (
    <div>
      <div className='twitter-tweet'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default TwitterEmbedCard;
