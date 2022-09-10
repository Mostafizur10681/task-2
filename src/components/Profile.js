import React from 'react';
import profile from '../image/profile.jpg';
import facebook from '../image/facebook.png';
import gitHub from '../image/github.png';
import linkedin from '../image/linkdin.png';
import mail from '../image/mail.png';
import './Profile.css'

const Profile = () => {
    return (
        <div className='container'>
            <div className='picture-info'>
                <div className='picture'>
                    <img src={profile} alt="Mostafizurs pic" />
                </div>
                <div>
                    <div>
                        <h4>Name: Mostafizur Rahman (Sourav)</h4>
                        <h4>Mobile: 01644823123</h4>
                        <h4>Email: sourav10681@gmail.com</h4>
                    </div>
                    <div className='social-icons'>
                        <a href="https://www.facebook.com/profile.php?id=100010110405257" target='_blank'><img src={facebook} alt="" /></a>
                        <a href="https://www.linkedin.com/in/md-mostafizur-rahman/" target="_blank"><img src={linkedin} alt="" /></a>

                        <a href="https://github.com/Mostafizur10681" target='_blank'><img src={gitHub} alt="" /></a>
                        <a href="mailto: mostafizur15-10681@diu.edu.bd"><img src={mail} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;