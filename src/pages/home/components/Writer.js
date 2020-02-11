import React, { PureComponent } from 'react';
import {
    WriterWrapper,
    WriterItem
} from '../style'

export default class Writer extends PureComponent {
    render () {
        return (
            <WriterWrapper>
                <WriterItem>
                    <img className="pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <h4 className="author">董克平日记</h4>
                    <p>写了836.5k字 | </p><p>2.8k喜欢</p>
                    <a className="follow" href="###">+ 关注</a>
                </WriterItem>
                <WriterItem>
                    <img className="pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <h4 className="author">董克平日记</h4>
                    <p>写了836.5k字 | </p><p>2.8k喜欢</p>
                    <a className="follow" href="###">+ 关注</a>
                </WriterItem>
            </WriterWrapper>
        )
    }
}