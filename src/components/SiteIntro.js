import React from 'react'

export default function SiteIntro() {
  return (
    <div>
      <div className='lead text-center  font-weight-bolder my-2'><strong>Your Best Life Partner Finder. Now in Nepal!</strong></div>
      <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
  <strong>Holy guacamole! </strong>You are selected for our survery where you can collect huge gifts. Click <a href="/"><strong>here</strong></a> to participate.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </div>
  )
}
