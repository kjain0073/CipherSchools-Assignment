import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = ({searchfield,searchChange}) => {
 return(
 	<div className='pa2' >
	 	<TextField
      autoComplete="cityname"
      name="cityName"
      color="primary"
      variant="outlined"
      id="cityname"
      label="Enter City or State to search "
      autoFocus
      onChange={searchChange}
      className="m-3 w-50"
      InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          )
        }}
    />        
	</div> 	
 );
}

export default SearchBox;