
const Home = () => {
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="pic3.jpg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="pic2.jpg" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="pic1.jpg" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
          </div>
          <section >
      <div className="container py-5 h-100 style=background-color: #FFE7C7;">
        <div className="row d-flex align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <figure className="text-center  py-5 px-4 shadow-2">
              <blockquote className="blockquote pb-2">
                <p>
                  <span className="lead font-italic">If you're a blood donor, you're a hero to someone, somewhere, who received your gracious gift of life.</span>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mb-0 font-italic">
                Anonymous
              </figcaption>
            </figure>
          </div>
          <div className="col col-lg-6">
            <figure className="text-center  py-5 px-4 shadow-2" >
              <blockquote className="blockquote pb-2">
                <p>
                  <span className="lead font-italic">Be a blood donor, be a Hero - A real one.</span>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mb-0 font-italic">
                Anonymous
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
 export default Home;