import React from 'react';
import styles from './Articles.module.css'
import { Field, reduxForm } from 'redux-form';
import Article from './Article/Article';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../utils/validator/validators';
import Fade from 'react-reveal/Fade';

let maxLength300 = maxLengthCreator(300);
let maxLength30 = maxLengthCreator(30);

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '', disabled: true };
    }

    addArticle = (values) => {
        let date = new Date();
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'short' });
        this.props.addArticle(values.newArticle, values.newTitle, this.state.imagePreviewUrl, day, month);
    };

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                disabled: false
            });
        }
        reader.readAsDataURL(file)
    }
    deleteFile(e) {
        e.preventDefault();
        this.setState({
            file: '',
            imagePreviewUrl: '',
            disabled: true
        });
    }

    render() {
        let articlesElements = this.props.articleData.map(p =>
            <Article title={p.title} text={p.text} image={p.image} day={p.day} month={p.month} key={p.id} />);
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} className={styles.newImage} />)
        }

        return (
            <div className={styles.articlesBlock}>
                <Fade duration={700}>
                    <div className={styles.pageTitle}>Recent Articles</div>
                </Fade>
                <div className={styles.articles}>
                    <Fade left duration={2000}>
                        {articlesElements}
                    </Fade>
                </div>
                <div className={styles.previewComponent}>
                    <div className={styles.fileLoader}>
                        <form onSubmit={(e) => this._handleSubmit(e)} className={styles.fileBlock}>
                            <input id="fileForArticle" className={styles.fileInput} type="file"
                                onChange={(e) => this._handleImageChange(e)} />
                            <label htmlFor="fileForArticle">Upload file</label>
                        </form>
                        <button onClick={(e) => this.deleteFile(e)}
                        className={styles.btnClearFile} disabled={this.state.disabled} >Clear file</button>
                    </div>
                    <div className={styles.imgPreview}>
                        {imagePreview}
                    </div>
                </div>
                <AddArticleFormRedux onSubmit={this.addArticle} />
            </div>
        )
    }
}

const AddArticleForm = (props) => {
    const { handleSubmit, reset, pristine, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea} name="newTitle" placeholder="Enter title"
                        validate={[required, maxLength30]} className={styles.titleField} />
                </div>
                <div>
                    <Field component={Textarea} name="newArticle" placeholder="Enter your post"
                        validate={[required, maxLength300]} className={styles.textField} />
                </div>
                <div>
                    <button className={styles.addBtn} >Add post</button>
                    <button className={styles.addBtn} disabled={pristine || submitting} onClick={reset} >Clear text</button>
                </div>
            </div>
        </form>
    )
}

const AddArticleFormRedux = reduxForm({
    form: "addArticleForm"
})(AddArticleForm);


export default Articles;