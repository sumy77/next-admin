"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import styles from "./search.module.css"
import { MdSearch } from "react-icons/md"
import { useDebouncedCallback } from "use-debounce"

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    if(e.target.value) {
      params.set("q", e.target.value);
    }else{
      params.delete("q");
    }
    replace(`${pathName}?${params}`)
  }, 300);
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type="text" className={styles.searchInput} placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
}

export default Search