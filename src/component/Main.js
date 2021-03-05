import React from 'react'
function Main() {
    return (
        <div>
            <div className="con" style={{ margin: "auto", height: 600, width: "70%", backgroundColor: "#f0f5f5", marginTop: 30, borderRadius: 30 }} >
                <div className="full">


                    <div className="main">


                        <div className="container" style={{ padding: 30 }}>
                            <div className="row">
                                <div className="col">
                                    <h2 style={{ color: "blue" }} >Employer details</h2>
                                </div>
                                <div className="col">
                                    <p style={{ marginTop: 20 ,marginLeft:60}} >Upload profile picture <span> <img width="40px" height="40px" src="Assets/11.png" alt="" /></span> </p>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: 30 }}>
                                <div className="col">
                                    <h6>Compony Name*</h6>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col">
                                    <h6>Job details*</h6>
                                    <input type="text" name="" id="" />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{ marginTop: 20 }}>
                                    <h6>First name*</h6>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col" style={{ marginTop: 20 }}>
                                    <h6>Last name*</h6>
                                    <input type="text" name="" id="" />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{ marginTop: 20 }}>
                                    <h6>Mobile Number*</h6>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col" style={{ marginTop: 20 }}>
                                    <h6>Dairak Work phone*</h6>
                                    <input type="text" name="" id="" />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{ marginTop: 20 }}>
                                    <h6>Work email address*</h6>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col" style={{ marginTop: 20 }}>
                                    <h6>How did you found us*</h6>
                                    <input type="text" name="" id="" />

                                </div>


                            </div>
                            <div className="col" style={{ marginTop: 20 }}>
                                <h6 style={{ fontSize: 11 }}>  I agree with the jondmidest.com <span style={{ color: "blue" }}>  terms and condition privacy police</span> and o agree to recieve future email, texts and communication</h6>


                            </div>
                            <div className="col" style={{ marginTop: 20 }}>
                                <img src="Assets/21.png" width="200px" style={{marginLeft:350}} alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="main1" style={{ backgroundImage: 'url("Assets/3.png")', height: "580px" }} >
                        <img style={{ marginTop: 60,alignItems:"center" }} width="250px" src="Assets/1.png" alt="" />
                        <div style={{ display: "flex", marginTop: 20 }}>
                            <img width="70px" height="70px" style={{ marginLeft: 10 }} src="Assets/4.png" alt="" />
                            <div style={{ alignItems: "flex-start", color: "white", marginLeft: 10 }}>
                                <h5 >Free CRM</h5>
                                <h6 style={{ alignItems: "justify" }}>Builtin CRM with drag and <br /> drop function</h6>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: 20,margin:5 }}>
                            <img width="70px" height="70px" style={{ marginLeft: 10 }} src="Assets/6.png" alt="" />
                            <div style={{ alignItems: "flex-start", color: "white", marginLeft: 10 }}>
                                <h5 >Save UPTO 75%</h5>
                                <h6 style={{ alignItems: "justify" }}>Save upto 75% of your <br />annual requiment budget </h6>
                            </div>
                        </div>
                        <div style={{ display: "flex ", marginTop: 20 }}>
                            <img width="70px" height="70px" style={{ marginLeft: 10 }} src="Assets/7.png" alt="" />
                            <div style={{ alignItems: "flex-start", color: "white", marginLeft: 10 }}>
                                <h5 >Direct Chat + Inbox</h5>
                                <h6 style={{ alignItems: "justify" }}>Connect with candidate <br /> direct no more emails</h6>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: 20 }}>
                            <img width="70px" height="70px" style={{ marginLeft: 10 }} src="Assets/8.png" alt="" />
                            <div style={{ alignItems: "flex-start", color: "white", marginLeft: 10 }}>
                                <h5 >Candidate Match</h5>
                                <h6 style={{ alignItems: "justify" }}>Set accurate filters and let the  system find your jon seeker</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main
