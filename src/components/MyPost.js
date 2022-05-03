import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { firebase_db } from "../firebaseConfig"
import {useTodoState,useTodoDispatch,useUID} from '../ContextApi';


const PostBlock = styled.div`
   width: 100%;
   height: 100%;

   position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
   background: white;
   box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

   margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
   display: flex;
   flex-direction: column;
`;


const ProflieZone = styled.div`
display: flex;
padding: 5px;
align-items: center;
background: #fdf0ff;
position: relative;

`;
const ProflieImg = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
border: 3px #405add solid;
`;
const ProflieName = styled.p`
margin:0px;
font-weight: bold;
padding-left: 10px;
font-size: 16px;
flex: 1;
`;

const ProfileEdit = styled.p`
margin: 0;
font-size: 16px;
padding-right: 10px;
font-weight:600;
&:hover {
   color: #339af0;
}

`;

const PostImg = styled.img`
width: 100%;
height: 300px;
`;

const PostText = styled.p`
margin:0px;
padding: 5px;
`;


function MyPost({posts,profile}) {

   const postDelete = (postKey)=>{

      alert("포스트를 삭제합니다");

      
      console.log(postKey)
      console.log(profile.Uid)

      firebase_db.ref(`users/${profile.Uid}/UserPost/${postKey}`).remove();

      
      alert("포스트 삭제완료");
   }

   
   return (
      <div>
         {posts && (
            Object.values(posts).reverse().map((posts) => (
               <PostBlock key={posts.postKey}>
                  <ProflieZone>
                  
                  <ProflieImg src={profile.Userphoto}></ProflieImg>
                  <ProflieName>{profile.Username}</ProflieName>
                  
                  <ProfileEdit onClick={()=>postDelete(posts.postKey)} >삭제</ProfileEdit>
                  </ProflieZone>
                  
                  <PostImg src={posts.postPic} />
                  <PostText>{posts.postContent}</PostText>
               </PostBlock>
            ))
         )}
      </div>
   );
};

export default React.memo(MyPost);
