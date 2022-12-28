// css
import styles from "./Search.module.css"

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"



const Search = () => {
    const query = useQuery()
    const search = query.get("q")
  return (
    <div>Search</div>
  )
}

export default Search