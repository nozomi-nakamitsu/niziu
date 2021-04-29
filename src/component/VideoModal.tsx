
import { Dialog, DialogContent} from '@material-ui/core'
import styled from 'styled-components';
import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import image from '../image/NiziU_takepoppin_Aphoto_size-small.jpeg';
type Props = {
  videoopen: boolean
  videoclosefunc: Function
}


 const VideoModal= (props: Props) => {
  const customContentStyle = {


    padding:0
  };

  
 return(
  <Dialog
  open={props.videoopen} transitionDuration={1500} >
  <HeaderComponent>
    <ClearIcon className="ClearIcon" onClick={() => props.videoclosefunc()}/>
  </HeaderComponent>
  <DialogContent style={customContentStyle}>
 
    <iframe width="auto" height="" src="https://www.youtube.com/embed/QW28YKqdxe0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

  </DialogContent>
  </Dialog>
  )

}



const HeaderComponent = styled.div`
padding: 0;
display:flex;
align-items: center;
.ClearIcon{
  margin-left: auto;
}

`



export default VideoModal;