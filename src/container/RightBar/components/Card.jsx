import { DeleteOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'
import classes from "../RightBar.module.scss"

const CardNote = () => {
    return (
        <div className={classes.card}>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellat pariatur earum illo cum fugiat numquam velit nobis. Saepe optio aliquam quae ullam omnis rem iste eligendi deleniti dolor rerum?
            </p>
            <hr />
            <div className={classes.action}>
                <span>12-05-2021</span>
                <Tooltip placement="left" title="Delete!">
                    <DeleteOutlined className={classes.icon} />
                </Tooltip>
            </div>
        </div>
    )
}

export default CardNote