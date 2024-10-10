import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';

const SearchBox = () => {
    return (
        <div className='headerSearch ml-3 mr-3'>
            <input type='text' placeholder='Search for products...' />
            <Button><CiSearch /></Button>
        </div>
    )

}

export default SearchBox;