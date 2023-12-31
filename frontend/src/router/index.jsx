import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import CreatePostForm from '../components/MainPosts/CreatePostForm';
import PostView from '../components/MainPosts/PostView/PostView';
import Layout from './Layout';
import Splash from '../components/Splash';
import ProfilePage from '../components/ProfilePage';
import CommunityPage from '../components/Communities/CommunityPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "posts/new",
        element: <CreatePostForm />,
      },
      {
        path: "posts/:postId",
        element: <PostView />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "communities/:communityId",
        element: <CommunityPage />,
      },
    ],
  },

]);
