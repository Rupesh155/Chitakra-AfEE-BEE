import { useRouter } from 'next/router'
import React from 'react'

const data = () => {
 const router=   useRouter()
 const data=  router.query.data
  return (
    <div>{data}</div>
  )
}

export default data