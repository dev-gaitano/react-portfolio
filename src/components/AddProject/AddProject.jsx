import BtnPrimary from "../ui/BtnPrimary"
import InputPrimary from "../ui/InputPrimary"
import "./AddProject.css"

function Addproject() {
  return (
    <div className="wrapper-add-project">
      <h2>Add project</h2>
      <div className="input-area">
        <InputPrimary type={"text"} name={"title"} />
        <textarea rows="5" cols=""></textarea>
      </div>
      <BtnPrimary type={"submit"} text={"Add"} />
    </div>
  )
}

export default Addproject
