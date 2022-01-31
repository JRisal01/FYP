import Title from "./Title";
import '../../scss/contact.css'

export default function Contact() {
  return(
    <>
        <div className="contact_location l-container">
            <Title titel = "Contact" subtitle= "&Location"/>
            <div className="contact">
                <div className="contact_info">
                    <p className="contact_info_title">Reach Us</p>
                    <div className="contact_info_items">
                        <div className="contact_info_item">
                            <img src="./compimage/landing/phone.png" alt="" />
                            <p>9869421611</p>
                        </div>
                        <div className="contact_info_item">
                            <img src="./compimage/landing/phone.png" alt="" />
                            <p>9869421611</p>
                        </div>
                        <div className="contact_info_item">
                            <img src="./compimage/landing/phone.png" alt="" />
                            <p>9869421611</p>
                        </div>
                        <div className="contact_info_item">
                            <img src="./compimage/landing/phone.png" alt="" />
                            <p>9869421611</p>
                        </div>
                    </div>
                </div>
                <div className="contact_image">
                    <a target="_blank" href="google.com/maps/place/Mount+Everest+Winery+Pvt.+Ltd./@27.6818148,85.3416919,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19fb7645deed:0x46490ec0f79c8892!8m2!3d27.6818101!4d85.3438859"><img src="./compimage/landing/map.png" alt="" /></a>
                </div>
            </div>
        </div>
    </>
  );
}
