import React from 'react';
import { connect } from 'react-redux';
import Articles from './Articles';
import {addArticle} from '../redux/articles-reducer';

let mapStatetoProps = (state) => ({
    articleData: state.articlesPage.articleData
})

let mapDispatchToProps = (dispatch) => {
    return {
        addArticle : (newArticle, newTitle, image, day, month) => {
            dispatch(addArticle(newArticle, newTitle, image, day, month));
        }
    }
}

const ArticlesContainer = connect(mapStatetoProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;

