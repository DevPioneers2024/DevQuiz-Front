import { CreateRoomForm } from "../components/CreateRoom/CreateRoomForm"
import style from '../sass/Gameroom.module.sass'

const CreateHall = () => {
  return (
    <div className={style.container}>
        <h1>Answer Race 2024</h1>
       <CreateRoomForm /> 
    </div>
    
  )
}

export default CreateHall