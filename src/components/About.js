import React from 'react'

 function About() {
  return (
    <>
    <div> 
        <div className="bg-light">
    <div className="container py-5">
      <div className="row h-100 align-items-center py-5">
        <div className="col-lg-6">
          <h1 className="display-4">About us page</h1>
          <p className="lead text-muted mb-0">Create a minimal about us page using Bootstrap 4.</p>
          <p className="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" className="text-muted"> 
                      <u>Bootstrapious</u></a>
          </p>
        </div>
        <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"/></div>
      </div>
    </div>
  </div>
  
  <div className="bg-white py-5">
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
          <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default About;