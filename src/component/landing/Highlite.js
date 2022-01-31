import '../../scss/highlite.css'

export default function Highlite() {
  return (
    <>
        <div className="highlite">
            <div className="highlite_image"><img src="./compimage/landing/highlite_image.png" alt="" /></div>
            <div className="highlite_info">
                <h1>“Life is Beautiful
                    Make it Beautiful”</h1>
                <p>Nmet nullam sed habitasse dignissim viverra congue nisl. Lacus purus eu, mauris pretium mollis ac id mauris eget.</p>
                <div className="highlite_profile">
                    <div className="highlite_profile_image"><img src="./compimage/landing/proile.png" alt="" /></div>
                    <div className="highlite_profile_info"><p>Jeevan Risal <br/> 
                                                              CEO, Hotel Paradise</p></div>
                </div>
            </div>
        </div>
    </>
  );
}
