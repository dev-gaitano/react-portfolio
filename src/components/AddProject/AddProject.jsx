import BtnPrimary from "../ui/BtnPrimary"
import InputPrimary from "../ui/InputPrimary"
import "./AddProject.css"

function Addproject() {
  return (
    <div className="wrapper-add-project">
      <div className="thumbnail-upload-area">
        <div className="upload-inner-border">
          <p>Upload thumbnail</p>
        </div>
      </div>
      <div>
        <h2>Add project</h2>
        <div className="input-area">
          <div className="field-group">
            <label htmlFor="title">Project title</label>
            <InputPrimary type={"text"} name={"title"} id="title" placeholder="Project name" />
          </div>
          <div className="field-group">
            <label htmlFor="description">Project description</label>
            <textarea id="description" name="description" rows="5" placeholder="Describe the project..."></textarea>
          </div>
        </div>
        <BtnPrimary type={"submit"} text={"Add"} />
      </div>
    </div>
  )
}

export default Addproject
