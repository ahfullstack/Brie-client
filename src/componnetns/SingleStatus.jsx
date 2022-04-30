import {useState} from 'react'
import EditStat from './EditStat';
function SingleStatus (props){
    const symptoms = props.stat.symptoms[0]
    const [showForm, setShowForm]= useState(false)
    const handleShow = ()=>{
        setShowForm(!showForm)
    }
  return (
    <div>
        <p>{props.stat.name || 'Anonymous'}</p>
        <p>{props.stat.description || 'No Description'}</p>
        <ul>
            <li>Feelings : {symptoms.feelings}</li>
            <li>Worries : {symptoms.worries}</li>
            <li>Troubles : {symptoms.troubles}</li>
            <li>Fears : {symptoms.fears}</li>
        </ul>
        <button onClick={()=>props.deleteStatus(props.stat._id)}>delete</button>
        <button onClick={handleShow}>Edit?</button>
       {showForm && <EditStat editStat={props.editStat} symptoms={symptoms} stat={props.stat} handleShow={handleShow}/>}
    </div>
  )
}
export default SingleStatus;