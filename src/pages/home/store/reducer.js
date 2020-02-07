import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "//upload-images.jianshu.io/upload_images/16440539-19515228ef104b4d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },{
        id: 2,
        title: "手绘",
        imgUrl: "//upload-images.jianshu.io/upload_images/644910-288da7c6572d91fc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }],
    articleList: [{
        id: 1,
        title: "马云身边藏了9年的女人，美过“奶茶妹妹”，30岁就身家百亿",
        imgUrl: "//upload-images.jianshu.io/upload_images/16851809-91ea743321d982a3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        desc: "不久前，马云发表公开信将从阿里“退位”，重返教师岗位， 一时间网络上出现各种质疑和猜测 没了马云的阿里，还能继续笑傲江湖吗？但马云表示自己六年前..."
    },{
        id: 2,
        title: "马云身边藏了9年的女人，美过“奶茶妹妹”，30岁就身家百亿",
        imgUrl: "//upload-images.jianshu.io/upload_images/16851809-91ea743321d982a3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        desc: "不久前，马云发表公开信将从阿里“退位”，重返教师岗位， 一时间网络上出现各种质疑和猜测 没了马云的阿里，还能继续笑傲江湖吗？但马云表示自己六年前..."
    },{
        id: 3,
        title: "马云身边藏了9年的女人，美过“奶茶妹妹”，30岁就身家百亿",
        imgUrl: "//upload-images.jianshu.io/upload_images/16851809-91ea743321d982a3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        desc: "不久前，马云发表公开信将从阿里“退位”，重返教师岗位， 一时间网络上出现各种质疑和猜测 没了马云的阿里，还能继续笑傲江湖吗？但马云表示自己六年前..."
    },{
        id: 5,
        title: "马云身边藏了9年的女人，美过“奶茶妹妹”，30岁就身家百亿",
        imgUrl: "//upload-images.jianshu.io/upload_images/16851809-91ea743321d982a3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        desc: "不久前，马云发表公开信将从阿里“退位”，重返教师岗位， 一时间网络上出现各种质疑和猜测 没了马云的阿里，还能继续笑傲江湖吗？但马云表示自己六年前..."
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}