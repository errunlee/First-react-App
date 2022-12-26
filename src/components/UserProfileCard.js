import React from 'react'

export default function userProfileCard(props) {
  return (
    <div>
      <div className="card mx-3 mb-2" style={{width:'15rem'}}>
  <img src={props.src} className="card-img-top" alt="userimage"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="/" className="btn btn-primary">View Profile</a>
  </div>
</div>
    </div>
  )
}
