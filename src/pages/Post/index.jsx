import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json';
import PostModelo from "components/PostModelo";
import './Post.css';

import ReactMarkdown from "react-markdown";
import PaginaPadrao from "components/PaginaPadrao";
import NaoEncontrado from "pages/NaoEncontrado";
import PostCard from "components/PostCard";

export default function Post() {
    const params = useParams();

    const post = posts.find(p => p.id === Number(params.id));

    const postRecomendados = posts.filter(post => post.id !== Number(params.id))
        .sort((a, b) => a.id - b.id)
        .slice(0, 4)

    if (!post) {
        return (
            <NaoEncontrado />
        )
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
            <Route index element={ 
                <PostModelo titulo={post.titulo}>
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h4 className="tituloOutrosPosts">Outros posts que você pode gostar:</h4>

                <ul className="postsRecomendados">
                {postRecomendados.map(post => 
                   <li key={post.id}>
                    <PostCard post={post}/>
                   </li> 
                )}
                </ul>
                </PostModelo>
            }>
            </Route>    
            </Route>
        </Routes>
    )
}