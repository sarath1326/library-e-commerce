



import React from 'react'
import "./Category.css"
import { useState ,useEffect} from 'react';
import { BiFilterAlt } from "react-icons/bi"
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "../../Constant/Axios"
import { useNavigate, useParams } from 'react-router-dom'; 
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Oval } from  'react-loader-spinner'
// import { useContext } from 'react';
// import { viewcontext } from '../Userpage/Context/Viewcontext'


function Category() {

   const {url}=useParams()
    
  const [state,setstate]=useState(false)
  const [fetchdata,setfetchdata]=useState([])
  const [lite,setlite]=useState(false)
  const [edu,setedu]=useState(false)
  const [gen,setgen]=useState(false)

  const [loding,setloding]=useState(true)

  const navigate=useNavigate()

  // const {setdata}=useContext(viewcontext)




    function btn(){
  
      setstate(!state)


    }

    useEffect(()=>{



      axios(`/user/view/${url}`).then((respo)=>{

       const result=respo.data

      console.log(result.data)
        setfetchdata(result.data)
        setloding(false)

        if(result.litefill){

          setlite(true)

        }else if(result.edufill){
          setedu(true)
        
        }else{

          setgen(true)
        }


      

  

    })

  

    
  },[])


  function oneview(proid){

     navigate(`/oneview/${proid} `);


     }




  
  
    return (
    <div className='first-div-cata'>


        
<div className='title'>


{/* <h3> Education</h3> */}
</div>

<div className='icons'>


{/* < BiFilterAlt onClick={btn}    className='filter'/>
<p  className='p'  >filter</p> */}

</div>

{
state ?  <div className='filtermenu-gen'> 

  <ul>
    <li>All</li>
   <li> SSLC</li>
    <li> plus one</li>
    <li> plus two</li>
    <li> compation exam</li>
    <li> Genaral </li>

  </ul>


</div> : null
}












<div className='serchbarmain'>



  <input type='text' placeholder='Search your books...'  />

             <Dropdown>
              <Dropdown.Toggle variant='none' id="dropdown-basic" className='drop-btn'>
              <BiFilterAlt className='span' />
              </Dropdown.Toggle>

              <DropdownMenu className='drop-menu'>

                { 
                 
                  lite ? 
                  <>

                  <DropdownItem> Novel</DropdownItem>
                  <DropdownItem> Poem</DropdownItem>
                  <DropdownItem> Story</DropdownItem>
                  <DropdownItem> Other</DropdownItem>
                  </>
                  :null
                  }


               {
                edu ?
                <>
                <DropdownItem> Sslc </DropdownItem>
                <DropdownItem> Pluse One  </DropdownItem>
                 <DropdownItem> Pluse One </DropdownItem>
                 <DropdownItem> Compation Exam </DropdownItem>
                 <DropdownItem> Genaral</DropdownItem>
                </>
                 :null
              }
              
               {
                gen ?
                <>
                 <DropdownItem>Kides</DropdownItem>
                 <DropdownItem> Cooking </DropdownItem>
                 <DropdownItem> Other </DropdownItem>
                  </>
               : null

              }
              </DropdownMenu>
              </Dropdown>


</div>



<div className='container     items-disply-box'>



{

  loding ?  <div className='loding-cata'>  

<Oval
  height={80}
  width={50}
  color="#0E21A0"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>




  </div>

  :

fetchdata.map((obj)=>


  (


    <div class="main-edu"   onClick={()=>{oneview(obj._id)}}>
<div class="img-edu"> 
<img  className='item-img-edu' src={`data:${obj.contentType};base64,${obj.imageBase64}`} alt=""/>

</div>

<div class="text">

<h6 className='booktitle'> {obj.name}</h6>
<span >Language:</span><span> {obj.language}</span>


</div>

</div>


      )


    )

  }

























</div>















      
    </div>
  )
}

export default Category
