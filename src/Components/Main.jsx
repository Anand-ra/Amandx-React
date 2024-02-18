import React from "react";
import vidbg from '../Assets/Vid1.mp4'
import NavBar from '../Components/Navbar/navbar'
// import checklogo from '../Assets/check.png' 
import SocialFollow from "./socialFollow"


const Main = () => {
    return (
        <div className="main">

            <div className="overlay"></div>
            <video src={vidbg} autoPlay loop muted />
            <div className="content">
                <NavBar />
                <div className="title">
                    <p className="company"> Amandx India Pvt Ltd</p>
                    <p className="cslogan">Connecting Commerce, Globally</p>
                </div>
                
            </div>

            <div className="mission">
                <random className="stmission"> Our Mission </random><br />
                <random className="slogan"> One World, One Marketplace</random>
            </div>

            <div className="business">
                <p className="st"> Our Business </p>
                <ol>
                    <li>
                        <p className="contentfounder"><b>Merchant Import-Export:</b> Your gateway to seamless international trade from the heart of India. With a rich heritage in trade and a deep understanding of global markets, we specialize in connecting Indian businesses with opportunities worldwide, facilitating smooth import and export transactions across borders.</p>
                    </li>
                    <li>
                        <p className="contentfounder"><b>Manufacturing and Sourcing:</b> We manufacture and work closely with local manufacturers, artisans, farmers and producers to showcase the best of Indian craftsmanship, innovation, textiles, handicraft, spices, agricultural products and culture to the world.</p>
                    </li>
                </ol>
                <p className="contentfounder">As India's economy continues to grow and diversify, the demand for quality products from around the world is on the rise. At Amandx India, we specialize in manufacturing, sourcing and importing a wide range of goods to meet the evolving needs. From handicraft and textiles to raw materials and consumer goods, we leverage our global network to find the best products at competitive prices, delivering value to our clients across industries.</p>
            </div>

            <div className="legal">

                <table className="legaltable">
                    <tr>
                        <th rowSpan={4} className="tableheading">
                            <p className="st">Compliance</p>
                        </th>
                        <td>
                            <p className="carddata">MSME Registered</p>
                        </td>
                        <td>
                            <p className="carddata">DGFT</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="carddata">GST</p>
                        </td>
                        <td>
                            <p className="carddata">CIN</p>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <p className="carddata">GeM Portal</p>
                        </td>
                        <td>
                            <p className="carddata">IEC</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <p className="carddatas">Make in India</p>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="founder">
                <p className="st">From our Founders</p>
                <br />
                <br />
                <br />
                <p className="contentfounder">“Rooted in Tradition, Soaring towards Tomorrow: Amandx India – A Promise of Excellence in Every Endeavor.”</p>
                <p className="contentfounder"> Namaste! </p>
                <p className="contentfounder">At Amandx India, we're more than a business; we're a tapestry of tradition. Our journey is fueled by a commitment to quality, ethics, and the spirit ingrained in our beautiful nation.</p>
                <p className="contentfounder">We stand for more than transactions; we stand for positive impact. To our customers, thank you for your trust. To our team, your dedication is our strength. Together, let's write a success story that echoes the essence of the Universe.</p>
                <p className="contentfounder"> Cheers,<br />
                Founders,<br />
                Amandx India.</p>
            </div>

            <div className="contacts">
                <SocialFollow />
            </div>
        </div>
    );
}



// For whatsapp integration in https://api.whatsapp.com/send?phone=15551234567

export default Main;