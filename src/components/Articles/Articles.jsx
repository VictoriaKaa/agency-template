import React from 'react';
import styles from './Articles.module.css'
import { reset, Field, reduxForm } from 'redux-form';
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
    // reset = () => {
    //     console.log("clear");
    //     this.setState({ file: '', imagePreviewUrl: '' });
    //     this.props.resetForm();
    // }

    _handleImageChange(e) {
        e.preventDefault();
        debugger;
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
        debugger;
        this.setState({
            file: '',
            imagePreviewUrl: '',
            disabled: true
        });
    }

    render() {
        let articlesElements = this.props.articleData.map(p =>
            <Article title={p.title} text={p.text} image={p.image} day={p.day} month={p.month} />);
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} className={styles.newImage} />)
        }
        // else {
        //     imagePreview = (<div className={styles.previewText}>Please select an Image for Article</div>);
        // }

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
                            <input className={styles.fileInput} type="file" id="fileForArticle"
                                onChange={(e) => this._handleImageChange(e)} />
                            <label for="fileForArticle">Upload file</label>
                        </form>
                        <button onClick={(e) => this.deleteFile(e)} className={styles.btnClearFile} disabled={this.state.disabled} >Clear file</button>
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
        <form onSubmit={props.handleSubmit}>
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
                    <button className={styles.add__btn} >Add post</button>
                    <button className={styles.add__btn} disabled={pristine || submitting} onClick={props.reset} >Clear text</button>
                </div>
            </div>
        </form>
    )
}
// const afterSubmit = (result, dispatch) =>
// dispatch(reset("addArticleForm"));

const AddArticleFormRedux = reduxForm({
    form: "addArticleForm",
    // onSubmitSuccess: afterSubmit
})(AddArticleForm);


export default Articles;