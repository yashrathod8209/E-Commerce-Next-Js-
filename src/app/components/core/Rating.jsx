import React from 'react'

const Rating = ({rating}) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStar =  5 - fullStars - (halfStar ? 1 : 0); 

  return (
    <div className='flex'>
      {
        [...Array(fullStars)].map((_,index)=>(
            <svg
            key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FF532E"
                    >
                    <g>
                      <rect fill="none" height="24" width="24" x="0" />
                      <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
                    </g>
                  </svg>
        ))
      }
      {
        halfStar && (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FF532E"
          >
            <g>
              <rect fill="none" height="24" width="24" x="0" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z" />
                </g>
              </g>
            </g>
          </svg>
        )
      }
      {
        [...Array(emptyStar)].map((_,index)=>(
            <svg
            key={index}
             xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FF532E"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
        ))
      }
    </div>
  )
}

export default Rating
