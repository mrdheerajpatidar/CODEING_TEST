import React,{createContext,useEffect,useState} from 'react'
export const AppContext = createContext();

export const AppProvider=({children})=> {
    const[loading,setLoading] = useState(true);
    const[posts,setPosts] = useState([]);
    const[currentPage,setCurrentPage] = useState(1);
    const postsperPage = 6;


useEffect(()=>{
    setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>Response.json())
    .then(data=>{
        setPosts(data);
        console.log(data)
        setLoading(false);
    })
},4000);
},[]);
const removeCard = (id)=>{
    setPosts(posts.filter(post=>post.id !==id));
};
  return (
    <AppContext.Provider value={{
        
            posts,
            loading,
            currentPage,
            setCurrentPage,
            postsperPage,
            removeCard
    }}>
        {children}
    </AppContext.Provider>

        )
    }
