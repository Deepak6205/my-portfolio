

import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg';
import services_data from '../../assets/services_data';
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="theme"/>
        </div>
        <div className="service-container">
            {services_data.map((service,index)=>{
                return <div className="services-format" key={index}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services