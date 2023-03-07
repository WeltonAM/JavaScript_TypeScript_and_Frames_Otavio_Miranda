import React from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

type Props = {}

const Post = (props: Props) => {

  const { id } = useParams();

  const [qs] = useSearchParams();

  return (
    <div>

      <h1>Post - </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam qui, doloremque a magni quibusdam error blanditiis aliquam nihil natus maxime cumque alias praesentium temporibus exercitationem. Quasi saepe consequatur dolor quis?
      </p>
    </div>
  )
}

export default Post