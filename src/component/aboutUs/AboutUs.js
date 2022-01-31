import React, {useEffect} from 'react';
import MainNav from '../all/MainNav';
import Title from '../landing/Title';
import '../../scss/aboutUs.css'


export default function AboutUs() {

  return (
    <>
        <MainNav />
        <div className="aboutUs l-container">
            <Title titel = "About US" subtitle= ""/>
            <p className='aboutUs_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla.<br/> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla. Pulvinar faucibus aliquet consequat auctor nibh eget. Diam bibendum duis cursus erat fusce gravida .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla. Pulvinar faucibus aliquet consequat auctor nibh eget. Diam bibendum duis cursus erat fusce gravida.</p>
        </div>

        <div className="about_location l-container">
            <Title titel = "Location" subtitle= ""/>
            <div className="locationDetail">
                <div className="locationInfo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla. <br/> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla. Pulvinar faucibus aliquet consequat auctor nibh eget. Diam bibendum duis cursus erat fusce gravida .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget.</p>
                    <button>Open Map</button>
                </div>
                <div className="locationImage">
                    <img src="../compimage/landing/aboutLocation.png" alt="" />
                </div>
            </div>
        </div>

        <div className="aboutUs_costomers l-container">
            <Title titel = "Satisfied Customers" subtitle= ""/>
            <p className='aboutUs_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla.<br/> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla. Pulvinar faucibus aliquet consequat auctor nibh eget. Diam bibendum duis cursus erat fusce gravida .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id mattis eget quis posuere vel. In scelerisque sagittis neque, vestibulum vel auctor nec. Augue volutpat sit eget ut pellentesque orci nulla. Pulvinar faucibus aliquet consequat auctor nibh eget. Diam bibendum duis cursus erat fusce gravida.</p>
        </div>
        
    </>
  );
}
