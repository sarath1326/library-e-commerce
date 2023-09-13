



import React from 'react'
import "./Category.css"
import { useState, useEffect } from 'react';
import { BiFilterAlt } from "react-icons/bi"
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "../../Constant/Axios"
import { useNavigate, useParams } from 'react-router-dom';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

// import { useContext } from 'react';
// import { viewcontext } from '../Userpage/Context/Viewcontext'


function Category(props) {

  const { url } = useParams()

  const [state, setstate] = useState(false)
  const [fetchdata, setfetchdata] = useState([])
  const [lite, setlite] = useState(false)
  const [edu, setedu] = useState(false)
  const [gen, setgen] = useState(false)

  const [loding, setloding] = useState(true)
  const [filter, setfilter] = useState([])
  const [empty, setempty] = useState(false)

  const navigate = useNavigate()

  // const {setdata}=useContext(viewcontext)




  function btn() {

    setstate(!state)


  }

  useEffect(() => {



    axios(`/user/view/${url}`).then((respo) => {

      const result = respo.data

      console.log(result.data)
      setfetchdata(result.data)
      setfilter(result.data)
      setloding(false)

      if (result.litefill) {

        setlite(true)

      } else if (result.edufill) {
        setedu(true)

      } else {

        setgen(true)
      }

   }).catch(err=>{

    props.failed(true)

        

   })




  }, [])


  function oneview(proid) {

    navigate(`/oneview/${proid} `);


  }

  const search = (value) => {

    console.log(value)

    const res = filter.filter(obj => obj.name.toLowerCase().includes(value))
    console.log(res)

    if(res.length===0){

      setempty(true)

    }else{

      setfetchdata(res)
      setempty(false)

    }

   }

   const filterdata=(value)=>{

    if(value=="all"){
      
      console.log("fetch data :", fetchdata )
      
      setfetchdata(filter)
   
    }else{

      const res = filter.filter(obj => obj.type.toLowerCase().includes(value))


    setfetchdata(res)

    }

   
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

      {/* {
        state ? <div className='filtermenu-gen'>

          <ul>
            <li>All</li>
            <li> SSLC</li>
            <li> plus one</li>
            <li> plus two</li>
            <li> compation exam</li>
            <li> Genaral </li>

          </ul>


        </div> : null
      } */}












      <div className='serchbarmain'>



        <input type='text' placeholder='Search your books...' onChange={(e) => { search(e.target.value) }} />

        <Dropdown>
          <Dropdown.Toggle variant='none' id="dropdown-basic" className='drop-btn'>
            <BiFilterAlt className='span' />
          </Dropdown.Toggle>

          <DropdownMenu className='drop-menu'>

            {

              lite ?
                <>
                   <DropdownItem  onClick={()=>{filterdata("all")}}  >All</DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("novel")}}> Novel</DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("poem")}}> Poem</DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("story")}}> Story</DropdownItem>
                  
                </>
                : null
            }


            {
              edu ?
                <>
                  <DropdownItem onClick={()=>{filterdata("all")}}  > All</DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("sslc")}} > Sslc </DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("plus one")}}> Plus One  </DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("plus two")}}  > Plus two </DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("compation exam")}} > Compation Exam </DropdownItem>
                  
                </>
                : null
            }

            {
              gen ?
                <>
                  
                     <DropdownItem onClick={()=>{filterdata("all")}}> All </DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("kids")}} >Kides</DropdownItem>
                  <DropdownItem onClick={()=>{filterdata("coocking")}}> Cooking </DropdownItem>
                 
                </>
                : null

            }
          </DropdownMenu>
        </Dropdown>


      </div>



      <div className='container     items-disply-box'>



        {  
           
            empty ? 

            <div className='empty-catg'>    
            
            <img className='empty-img' src='../noresult.jpeg ' alt='loding...' />
            
            </div>

            :

          loding ? <div className='loding-cata'>

           <img className='loging-img-cata' src='../Book animation.gif' alt='loding...'  />




          </div>

            :

            fetchdata.map((obj) =>


            (


              <div class="main-edu" onClick={() => { oneview(obj._id) }}>
                <div class="img-edu">
                  <img className='item-img-edu' src={`data:${obj.contentType};base64,${obj.imageBase64}`} alt="" />

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
