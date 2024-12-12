import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {


    const settings ={
        dots:true,
        Infinite:true
    }
    return (<Slider{...settings}>
        <div className='testimonial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Atque vel similique minus vitae rerum officia perspiciatis. 
                 Incidunt iure quia consectetur id totam vero, quo,
                  eius veniam culpa molestiae unde voluptates?
            </p>
           <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
           </div>
             <h6 className='mb-0 mt-3'>John Doe</h6>
             <p>Customer</p>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Atque vel similique minus vitae rerum officia perspiciatis. 
                 Incidunt iure quia consectetur id totam vero, quo,
                  eius veniam culpa molestiae unde voluptates?
            </p>
           <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
           </div>
             <h6 className='mb-0 mt-3'>John Doe</h6>
             <p>Customer</p>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Atque vel similique minus vitae rerum officia perspiciatis. 
                 Incidunt iure quia consectetur id totam vero, quo,
                  eius veniam culpa molestiae unde voluptates?
            </p>
           <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
           </div>
             <h6 className='mb-0 mt-3'>John Doe</h6>
             <p>Customer</p>
        </div>
       
       

    </Slider>
    );
  
};

export default Testimonials;
