import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../Appwrite/config'
import { Container, PostForm } from '../components'

const EditPost = () => {

    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        if(slug){
            appwriteService.getPost().then((post) =>{
                setPosts(post)
            })
        }else{
            navigate('/')
        }
    },[])
  return posts ? (
  <div className='py-8'>
        <Container>
            <PostForm post={posts} />
        </Container>
    </div>
  ) : null
}

export default EditPost 