import React from 'react'

export default function Loading() {
  return (
    <>
    <div className="container-loading">
        <div className="text-loading">
          <h1>Loading...</h1>
        </div>
        <div className="loading">
          <div className="line-box">
            <div className="line" />
          </div>
        </div>
      </div>
    </>
  )
}
