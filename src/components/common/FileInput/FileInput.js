import React, { useEffect, useRef } from "react";




const FileInput = ({ value, ...rest }) => {

  const inputRef = useRef();

  _handleImageChange(e) {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
          this.setState({
              file: file,
              imagePreviewUrl: reader.result
          });
      }
      reader.readAsDataURL(file)
  }
  
  useEffect(() => {
    if (value === "") {
      inputRef.current.value = "";
    } else {
      inputRef.current.files = value;
    }
  }, [value]);
  
  return <form onSubmit={(e) => this._handleSubmit(e)} className={styles.fileBlock}>
                        <input className={styles.fileInput} type="file" id="fileForArticle"
                            onChange={(e) => this._handleImageChange(e)} />
                        <label for="fileForArticle">Upload file</label>
                    </form>
};

export default FileInput;