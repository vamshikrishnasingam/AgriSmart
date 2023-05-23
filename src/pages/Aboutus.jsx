import React from 'react'

function Aboutus() {
  return (
    <>
    <h1 className="text-center">AgroSmart+</h1>
    
    <h3 className="text-center text-dark fw-bold">
      Grow Smart Farm Smart
        </h3>
      <hr />
    <div className="card bg-dark text-white border-0 mx-3">
        </div>
      <div className="container my-3 py-3">
        <h5 className="text-center text-dark fw-bold">
        AgroSmart+ is used to suggest some good ways to the farmers to manage their agricultural activities. 
        This AgroSmart+ helps farmers by providing them with easy access to essential information and different
         features to optimise thier farming practises and increase productivity.
        </h5>

        <h2 className="text-center py-4">Features</h2>
        <div className="row">
        <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="media/feature1.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Climate Detection</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="media/feature2.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Crop Selection</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid " src="media/feature3.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center mt-2">Irrigation Management</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="media/feature4.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center mt-4">Pest Management</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="media/feature5.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Support</h5>
              </div>
            </div>
            
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="media/feature6.png" alt="" height={200} />
              <div className="card-body">
                <h5 className="card-title text-center">Nutrient Management</h5>
              </div>
            </div>
            
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="media/feature7.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Networking</h5>
              </div>
            </div>
            
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="media/feature8.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Polcity Support &<br></br>International Co-operation</h5>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus