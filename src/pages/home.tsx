import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import resume from "../files/resume.pdf"

function Home() {
    return (
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <img src="" alt="" />
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I'm <span>Menez Hanton. </span>
              <br />
              A CESI engineer student.
            </h1>
            <p>

            </p>
            <div className="btn-con">
              <a href={resume} target="blank" className="main-btn">
                <span className="btn-text">Download Resume</span>
                <span className="btn-icon"><FontAwesomeIcon icon={faCloudArrowDown} /></span>
              </a>
            </div>
          </div>
          
        </div>
    );
}

export default Home