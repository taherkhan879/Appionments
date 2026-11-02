import './index.css'

const AppointmentIem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    // Write Your code here

    toggleIsStarred(id)
  }
  return (
    <li className="appointment-item">
      <div className="appointment-details">
        <p className="appointment-title">{title}</p>
        <p className="appointment-date">{date}</p>
      </div>
      <button className="star-button" tupr="button" onClick={onClickStar}>
        <img
          className="star-image"
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
          alt="star"
        />
      </button>
    </li>
  )

  // Write your code here
}

export default AppointmentIem
