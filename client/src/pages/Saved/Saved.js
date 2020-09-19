import React, { useState, useEffect } from 'react'
import API from '../../utils/API'

const Saved = () => {

  const [savedState, setSavedState] = useState({
    saved:[]
  })

  useEffect(() => {
    API.getSavedMedia()
      .then(({ data }) => {
        setSavedState({ ...savedState, saved:data })
      })
  }, [])

  return (
    <>
      <h1>Your saved Movies/TV</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(media => (
            <div key={media.imdbID}>
              <img src={media.poster} alt={media.title} />
              <h3>{media.title}</h3>
              <h4>Type: {media.type}</h4>
              <h4>Year: {media.year}</h4>
              <h5>imdbID: {media.imdbID}</h5>
              <button onClick={() => savedState.handleSaveMedia()}>Save</button>
            </div>
          ))
        ) : null
      }
    </>
  )
}

export default Saved