
export default function Filter(props){
    return <input type="text"
                    placeholder="Search Customer" 
                    onChange={(evt) => props.filterEvt(evt.target.value)}
                    /> 
}