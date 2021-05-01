
import { Dialog, DialogContent} from '@material-ui/core'
import styled from 'styled-components';
import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import image from '../image/NiziU_takepoppin_Aphoto_size-small.jpeg';
type Props = {
  open: boolean
  closefunc: Function
}


 const LoadingModal= (props: Props) => {
  const customContentStyle = {
    height: 614,
    padding:0
  };
 return(
  <Dialog
  open={props.open} transitionDuration={1500} >
  <HeaderComponent>
    <ClearIcon className="ClearIcon" onClick={() => props.closefunc()}/>
  </HeaderComponent>
  <DialogContent style={customContentStyle}>
    <Dialogcomponent>
    <img src={image} alt=""/>
    <h3>2nd Single<br/><span style={{ marginTop: 10 }}><i>Take a picture</i><i>Poppin’ Shakin’</i></span></h3>
    </Dialogcomponent>
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


const Dialogcomponent= styled.div`
  img{
  width:auto;
  height: 300px;
  }
  h3{
    text-align:center
  }
`



export default LoadingModal;