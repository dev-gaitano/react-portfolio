import BtnPrimary from "../ui/BtnPrimary"
import "./AddProject.css"

function Addproject() {
  return (
    <div className="wrapper-add-project">
      <h2>Add project</h2>
      <div className="input-area">
        <input type="text" name="title" value="" />
        <textarea rows="" cols=""></textarea>
      </div>
      <BtnPrimary type={"submit"} text={"Add"} />
    </div>
  )
}

export default Addproject
