import React from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

type Props = {}

const Posts = (props: Props) => {

  const { id } = useParams();

  const [qs] = useSearchParams();

  return (
    <div>
      Posts

      <Outlet />
    </div>
  )
}

export default Posts