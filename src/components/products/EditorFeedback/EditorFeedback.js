import React from 'react';
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {Button} from "../../../ui/buttons"
import {
  EditorFeedbackStyles,
  FeedbackMessage,
  Feedback,
  FeedbackOption
} from './styles'

function EditorFeedback ({children,status, writeCompleted, ...props})  {
        const navigator = useNavigate()
  return (
        <EditorFeedbackStyles  {...props}>
           {
             !status
             ?
             <Feedback>
             <AiOutlineCheckCircle color="d9f99d" size="12rem"/>
             <FeedbackMessage>
               Product Uploaded Successfully
             </FeedbackMessage>
           </Feedback>
           :
           <Feedback>
             <AiOutlineCloudUpload color="d9f99d" size="12rem"/>
             <FeedbackMessage>
              Uploading New Product
             </FeedbackMessage>
           </Feedback>
           }

          <FeedbackOption>
              <Button 
              bgcolor="tomato"
              hbgcolor="tomato"  
              color="black" 
              hcolor="white"
              onClick={()=> writeCompleted(false)}
              disabled={status}
              >Add Another Product</Button>
              <Button 
              bgcolor="cornflowerblue" 
              hbgcolor="cornflowerblue" 
              color="black"
              hcolor="white"
              onClick={()=> navigator('/dashboard')}
              >View All Products</Button>
          </FeedbackOption>

        </EditorFeedbackStyles>
  )
}

export default EditorFeedback