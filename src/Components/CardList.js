import React,{useContext} from 'react'
import { AppContext } from '../Contexts/AppContext'
import Card from './Card'
import ReactLoading from 'react-loading';
import { type } from '@testing-library/user-event/dist/type';

 const CardList=()=> {
    const{ posts,loading,currentPage,postsperPage}=useContext(AppContext);
    if(loading){
        return<div className='loading'>  LOADING....  </div>;
//         <h1>Loading...</h1>
//         // <reactLoading />
       
// const spin = ({ type, color}) => (
//     <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
// );
// spin("spin", "white");
    }
   
    const indexofLastPost = currentPage*postsperPage;
    const indexofFirstPost = indexofLastPost-postsperPage;
    const currentPosts = posts.slice(indexofFirstPost,indexofLastPost);

  return (
    <div className='card-list'>
        {currentPosts.map(post =>(
            <Card key={post.id} post={post}/>
        ))}
        
    </div>
  )
}
export default CardList;