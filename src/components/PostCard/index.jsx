import BotaoPrincipal from 'components/BotaoPrincipal';
import { Link } from 'react-router-dom';
import styles from './Post.module.css';

export default function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <article className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt={`Capa do post: ${post.titulo}`}
                />
                <h2 className={styles.titulo}>
                    {post.titulo}
                </h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>

            </article>
        </Link>
    )
}