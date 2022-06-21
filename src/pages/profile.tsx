import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCloudArrowDown, faSchool } from '@fortawesome/free-solid-svg-icons'
import resume from "../files/resume.pdf"


function Profile() {
    return (
        <div className="container-about" id="about">
            <div className="main-title">
                <h2>About <span>me</span> <span className="bg-text">About</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Informations about me</h4>
                    <p>
                        I am a student at CESI école d'ingénieurs, my dream position is a cybersecurity counselor, or anything that is related to cybersecurity.
                        <br />
                        I love IT and everything that is related to it, the software side aswell as the hardware and it's culture.
                        <br />
                        I love learning new programming languages and acquire new skills
                    </p>
                    <div className="btn-con">
                        <a href={resume} target="blank" className="main-btn">
                            <span className="btn-text" >Download Resume</span>
                            <span className="btn-icon"><FontAwesomeIcon icon={faCloudArrowDown} /></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">Languages</p>
                            <p className="small-text">3 languages <br /> <br /> French, Romanian, English</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">CESI</p>
                            <p className="small-text">Student council member <br /> <br /> treasurer</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">C#</p>
                        <div className="progress-con">
                            <p className="prog-text">65%</p>
                            <div className="progress">
                                <span className="cs"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">css3</p>
                        <div className="progress-con">
                            <p className="prog-text">60%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">SQL</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="SQL"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">JS/TS</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Networking</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="networking"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Systems</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="systems"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <FontAwesomeIcon icon={faSchool} />
                    </div>
                    <p className="tl-duration">January 2022 - April 2022</p>
                    <h5>CESI<span> - IT Master degree</span></h5>
                    <ol>
                        <li>Leaning science and IT</li>
                        <li>Mainly programming, networking and systems</li>
                    </ol>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <p className="tl-duration">January 2022 - April 2022</p>
                    <h5>Software Developer (interniship)<span> - Optimix</span></h5>
                    <ol>
                        <li>dockerized instances of the app</li>
                        <li>Coded multiple scripts for the app</li>
                        <li>Coded the back-end of the API</li>
                        <li>Optimized the app</li>
                        <li>Reasarched new features to add in the app</li>
                        <li>Added comptaibility between Linux and Windows</li>
                    </ol>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <p className="tl-duration">June 2021 - July 2021</p>
                    <h5>IT counselor (internship)<span> - La Fermentrÿ </span></h5>
                    <ol>
                        <li>Coded a graphical interface for a ERP</li>
                        <li>Gave advice on security</li>
                        <li>Gave advices on the networking</li>
                        <li>Installed the new networking equipement</li>
                        <li>Made a automatic save for important files</li>
                        <li>Installed a firewall</li>
                        <li>Prepared the network infrastructure for the installation</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Profile