import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 5px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

// Topic
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`    
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
    .topic-pic {
        display: block;
        float: left;
        margin-right: 10px;
        width: 32px;
        height: 32px;
    }
`;

// List
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

// Recommend
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-top: -4px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 11px;
`;

// Writer
export const WriterWrapper = styled.div`
    width: 278px;
    border-radius: 3px;
    height: 300px;
    line-height: 25px;
`;

export const WriterItem = styled.div`
    width: 278px;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    .pic {
        border-radius: 50%;
        float: left;
        width: 45px;
        height: 45px;
        margin-right: 10px
    }
    .author {  
        color: #ccc;
        font-size: 14px;
    }
    p {
        display: inline;
        color: #969696;
        font-size: 12px;
    }
    .follow {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #42c02e;
        text-decoration: none;
        float: right;
    }
`;