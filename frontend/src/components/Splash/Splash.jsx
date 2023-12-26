import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, deleteComment, editComment, getComments, getUserComments } from '../../redux/comment';
import ProductTile from "../MainPosts/PostComponent/";
import { getPosts } from '../../redux/post';
import "./Splash.css";
import HomePageWidget from './HomePageWidget';
import { deleteCommunity, editCommunity, getCommunities, getSingleCommunity, getUserCommunities } from '../../redux/community';

const Splash = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.posts?.allPosts);

  useEffect(() => {
    dispatch(getCommunities())
    dispatch(getUserCommunities())
    dispatch(getPosts());
    dispatch(getSingleCommunity(1));
  }, [dispatch])




  return (
    <div className='Main-Page'>
        <ProductTile posts={allPosts}/>
        <HomePageWidget />
    </div>
  );
}

export default Splash;
