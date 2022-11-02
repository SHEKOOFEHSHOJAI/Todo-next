import MyButton from "../component/Button"
import MyInput from "../component/input"

export default function button() {
  return (
    <div>
      <MyButton size={"large"} color={"primary"} type={"button"} value={"click"}></MyButton>
      {/* <MyInput type={"search"} required placeholder={"search"} id={"shat"} name={"shojai"} onChange={(e) => console.log(e.target.value)}/> */}
   
    </div>
  )
}
