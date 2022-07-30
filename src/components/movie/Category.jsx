export const Category = () => {
  return (
    <section className="category">
      <h2 className="category__title">Categories</h2>
      <div className="category__container">
        <div className="category__inner-container">
          <div className="category__color" id="category1"></div>
          <span className="category__name">Action</span>
        </div>
        <div className="category__inner-container">
          <div className="category__color" id="category2"></div>
          <span className="category__name">Comedy</span>
        </div>
        <div className="category__inner-container">
          <div className="category__color" id="category3"></div>
          <span className="category__name">Aventure</span>
        </div>
        <div className="category__inner-container">
          <div className="category__color" id="category4"></div>
          <span className="category__name">Romance</span>
        </div>
        <div className="category__inner-container">
          <div className="category__color" id="category5"></div>
          <span className="category__name">Music</span>
        </div>
        <div className="category__inner-container">
          <div className="category__color" id="category6"></div>
          <span className="category__name">Thriller</span>
        </div>
      </div >
    </section>
  )
}
