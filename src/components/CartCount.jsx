import React from 'react'

export default function CartCount(props) {
  const {itemCount} = props
  return (
    <div>
      CartCount : {itemCount}
    </div>
  )
}
