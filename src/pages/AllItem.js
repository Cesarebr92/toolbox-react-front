import { useSelector } from "react-redux";
import TextItemList from "../components/textitems/TextItemList";


const AllItem = () => {
    const items = useSelector(state => state.items)

    return(
        <TextItemList items={items}/>
    )
}

export default AllItem;