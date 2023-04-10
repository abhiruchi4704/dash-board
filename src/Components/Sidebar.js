import React from 'react';
import { MdOutlineDashboard } from "react-icons/md"
import { HiOutlineHome } from "react-icons/hi";
// import { menuItems } from '../data/dummy';
import { Link } from "react-router-dom"
// import "./Sidebar.css"
import { menuItems } from '../data/dummy';

const Sidebar = () => {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',backgroundColor:'black' }}>
      <div style={{ flex: 2,backgroundColor:'black' }}>
        {/* Content for first column */}
        <h1 style={{color:'white',fontSize:'50px' }}>Board.</h1>
      </div>
      <div style={{ flex: 3 ,marginTop:'40px' , backgroundColor:'black',color:'white'}}>
        {/* Content for second column */
        
         menuItems.map((item) => (

          <Link to={`/${item.name}`} key={item.id} style={{textDecoration: 'none',color:'white'}}>
            <div className='item' style={{ display: 'flex', flexDirection: 'row',gap:'20px',fontSize:'25px' }} >
             <h5>{item.icon}</h5> 
              <h5>{item.title}</h5>
            </div>
          </Link>


            ))
        }
      </div>


      <div style={{ flex: 1 ,backgroundColor:'black',marginTop:'250px',fontSize:'15px'}}>
        {/* Content for third column */}
        <h4 style={{color:'white'}}>Help</h4>
        <h4 style={{color:'white'}}>Contact Us</h4>
      </div>
    </div>
    </>
  );
  
}

export default Sidebar


// import React from 'react';

// function FlexboxExample() {
//     return (
//       <>
//       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',backgroundColor:'black' }}>
//         <div style={{ flex: 2,backgroundColor:'white' }}>
//           {/* Content for first column */}
//           <h1>hey</h1>
//         </div>
//         <div style={{ flex: 3 ,marginTop:'40px' , backgroundColor:'white'}}>
//           {/* Content for second column */}
//           <>
//           <h1>hey2</h1>
//           <h1>hey2</h1>
//           <h1>hey2</h1>
//           </>
//         </div>
//         <div style={{ flex: 1 ,backgroundColor:'white',marginTop:'100px'}}>
//           {/* Content for third column */}
//           <h1>hey3</h1>
//           <h1>hey3</h1>
//         </div>
//       </div>
//       </>
//     );
//   }
// export default FlexboxExample;