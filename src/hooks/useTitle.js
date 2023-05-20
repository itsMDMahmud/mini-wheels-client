import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Mini wheels`;
    }, [title])
};

export default useTitle;