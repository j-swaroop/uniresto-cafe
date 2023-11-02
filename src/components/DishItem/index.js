import './index.css'

const vegLogo =
  'https://res.cloudinary.com/drnrrd97f/image/upload/v1698934824/_d3f8423af5d5ceeeb5baca2d56a1caa8f9b7db5920170905-6221-j2o9ot_p1jezr.jpg'
const nonVegLogo =
  'https://res.cloudinary.com/drnrrd97f/image/upload/v1698935231/non-vegggg_dh8khm.jpg'

const DishItem = props => {
  const {details} = props
  console.log(details)

  const dishType = details.dish_Type === 1 ? nonVegLogo : vegLogo
  const description = details.dish_description.slice(0, 80)
  const isCustimizationAvail = details.addonCat.length !== 0

  const renderDishAvailabilityOrNot = details.dish_Availability ? (
    <div className="buttons-container">
      <button className="plus-btn" type="button">
        {' '}
        +{' '}
      </button>
      <button className="add-btn" type="button">
        {' '}
        Add
      </button>
      <button className="minus-btn" type="button">
        {' '}
        -{' '}
      </button>
    </div>
  ) : (
    <p className="not-available-text"> Not available </p>
  )

  return (
    <li className="dish-item-container">
      <div className="dish-details-container">
        <div className="dish-container">
          <img
            src={dishType}
            className="dish-type-img"
            alt="vegornonvegimage"
          />
          <div className="dish-text-details">
            <p className="dish-heading"> {details.dish_name} </p>
            <p className="dish-currency">
              {' '}
              {details.dish_currency} {details.dish_price}{' '}
            </p>
            <p className="dish-description"> {description} </p>
            {renderDishAvailabilityOrNot}
            {isCustimizationAvail? <p className='custom'> Custimizations Available</p>: ''}
          </div>
        </div>
        <p className="calories-heading"> {details.dish_calories} calories </p>
        <img src={details.dish_image} alt="dish-image" className="dish-img" />
      </div>
    </li>
  )
}

export default DishItem
