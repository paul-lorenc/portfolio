import React from "react";


function HomePage(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img className= "avatar-img" src={require("../assets/images/headshot.png")}/>
            <div className="banner-text">
                <h1 className="text-center">Software Developer</h1>
                
                <p className="text-center">Python | C/C++ | Java | JavaScript | HTML/CSS | ReactJS | PHP | SQL | Matlab </p>
                <div className="social-links">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/paul-lorenc-1139751b1/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/paul-lorenc?tab=overview&from=2020-04-01&to=2020-04-30" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-github-square"></i>
                    </a>
                </div>  
            </div>
              
        </div>
        
    );
}

export default HomePage;