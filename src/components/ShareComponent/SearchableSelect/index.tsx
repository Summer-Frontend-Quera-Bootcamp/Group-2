import React, { useState, useMemo } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
  TextField,
  InputAdornment
} from "@mui/material";
import Search from '../../ShareComponent/Icons/Search';

interface ISearchableProps {
    _allOptions: Array<string>;
    _placeHolder: string;
    _label: string;
}

const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  
const SearchableSelect: React.FC<ISearchableProps> = ({_allOptions, _placeHolder, _label}): JSX.Element => {
    // const allOptions = ["Option One", "Option Two", "Option Three", "Option Four"];
    const allOptions = _allOptions;
    const [selectedOption, setSelectedOption] = useState(allOptions[0]);

    const [searchText, setSearchText] = useState("");
    const displayedOptions = useMemo(
        () => allOptions.filter((option) => containsText(option, searchText)),
        [searchText]
    );
    // const label = _label;

  return (
    <Box sx={{ m: 0 }}>
      <FormControl fullWidth>
        <InputLabel id="search-select-label">{_label}</InputLabel>
        <Select
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{ autoFocus: false }}
          labelId="search-select-label"
          id="search-select"
          value={selectedOption}
          label="Options"
          onChange={(e) => setSelectedOption(e.target.value)}
          onClose={() => setSearchText("")}
          // This prevents rendering empty string in Select's value
          // if search text would exclude currently selected option.
          renderValue={() => selectedOption}
        >
          {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
          <ListSubheader>
            <TextField
              size="small"
              // Autofocus on textfield
              autoFocus
              placeholder={_placeHolder}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SearchableSelect;