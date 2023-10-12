import PostStatus from './PostStatus';

const PostStatuses = () => {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'space-between',
      width: '24%',
      marginRight: '15%'
    }}>
      <PostStatus 
        title={'공고기간'}
        content={'상시채용'}
      />
      <PostStatus 
        title={'총 지원자'}
        content={'2,444'}
      />
      <PostStatus 
        title={'조회수'}
        content={'10,444'}
      />
      <PostStatus 
        title={'좋아요'}
        content={'10'}
      />
    </div>
  );
}

export default PostStatuses;