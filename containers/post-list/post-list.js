import PostItem from '../../components/post-item'
import styles from './post-list.module.scss'

export default function PostList({ posts }) {
  return (
    <div className={styles.postList}>
      <div className={styles.wrapper}>
        <ul>
          {posts.map((post) => (
            <PostItem key={post.slug} {...post}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
