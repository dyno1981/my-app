import React from 'react'
import Comment from './Comment'

const comments = [
  {
    name: "윤태희",
    comment: "안녕하세요. 윤태희입니다."
  },
  {
    name: "유재석",
    comment: "내가 신이다!"
  },
  {
    name: "장욱",
    comment: "고윤정 입술 좋아~"
  }
]
function CommentList() {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment key={comment.name} name={comment.name} comment={comment.comment} />
        )
      })}
    </div>
  )
}

export default CommentList