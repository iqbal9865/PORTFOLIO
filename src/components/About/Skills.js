import React from 'react';

const Skills = () => {
    return (
        <div className='about-main'>
            <h1 className='title pt-5'>MY SKILLS</h1>
            <div className="row container m-auto">
                <div className="col-md-6 my-4">
                    <h5 className='text-start'>React.js</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className='text-start'>JavaScript</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '77%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className='text-start'>MongoDB</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '50%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className='text-start'>BootStrap</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '80%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <h5 className='text-start'>CSS</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '85%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className='text-start'>Express.js</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '50%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className='text-start'>Firebase</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '70%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className='text-start'>Node.js</h5>
                    <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: '45%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;