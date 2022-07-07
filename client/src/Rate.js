import React, { useState } from 'react'
import { Rate, Input, Button } from 'antd'
import axios from 'axios';

export const Rating = ({ userId, getComment, getRating }) => {
    const [rating, setRating] = useState(getRating);
    const [comment, setComment] = useState(getComment);

    const postComment = async () => {
        axios.post(`/api/users/comment/post/${userId}`, { rating, comment }).then(res => {
            if (res.status === 200) {
                console.log(res.data);
            }
            else {
                console.log(res.data.errorMessage);
            }
        })
    };

    console.log(comment)
    return (
        <div>
            Rate: <Rate value={rating} onChange={(value) => setRating(value)} />
            <br />
            <br />
            <div>
                <Input value={comment} style={{ width: '50%' }} onChange={(e) => setComment(e.target.value)} />
                <br />
                <br />
                <Button onClick={postComment}>Submit</Button>
            </div>
        </div>
    )
}
