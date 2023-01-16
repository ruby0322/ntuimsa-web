import {
  Stack,
  Box,
  Paper,
  FormGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../api/professor";

const Filter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f0f0fc",
        padding: "0px",
      }}
    >
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="文字探勘"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="商業分析"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="機器學習"
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="物聯網"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="資訊安全"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="雲端服務"
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="區塊鏈"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="程式語言"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="人工智慧"
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="供應鏈"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="資訊管理"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="創業與創新"
          />
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="作業研究"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="電子商務"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="金融科技"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
