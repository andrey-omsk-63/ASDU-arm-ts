import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const PointsXtGrid1111 = (props) => {
  let resStr = [];

  const styleXTG02 = {
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 1,
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
  };

  const styleXTG03 = {
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 1,
    textAlign: 'center',
  };

  const styleXTG04 = {
    borderRight: 0,
    borderColor: 'primary.main',
    margin: -1,
  };

  const HeaderPXG1111 = () => {
    return (
      <Grid item container xs={12}>
        <Grid item xs={2} sx={styleXTG02}></Grid>
        <Grid item xs={3} sx={styleXTG02}>
          <b>КС на ДК</b>
        </Grid>
        <Grid item xs={3} sx={styleXTG02}>
          <b>ПК</b>
        </Grid>
        <Grid item xs={4} sx={styleXTG02}>
          <b>Качество</b>
        </Grid>
      </Grid>
    );
  };

  const TimeStr = (tim) => {
    let timLiner = '';
    let hour = Math.trunc(tim / 60);
    let min = tim % 60;

    if (hour < 10) timLiner = '0';
    timLiner += hour.toString();
    timLiner += ':';
    if (min < 10) timLiner += '0';
    timLiner += min.toString();
    return timLiner;
  };

  const StrokaPXG1111 = () => {
    resStr = [];

    if (Object.keys(props.xctrl.results).length > 0) {
      for (let i = 0; i < props.xctrl.results.result.length; i++) {
        resStr.push(
          <Grid key={Math.random()} container xs={12} item>
            <Grid key={Math.random()} xs={2} item sx={styleXTG03}>
              {TimeStr(props.xctrl.results.result[i].Time)}
            </Grid>
            <Grid key={Math.random()} xs={3} item sx={styleXTG03}>
              {props.xctrl.results.result[i].Value[0]}
            </Grid>
            <Grid key={Math.random()} xs={3} item sx={styleXTG03}>
              {props.xctrl.results.result[i].Value[1]}
            </Grid>
            <Grid key={Math.random()} xs={4} item sx={styleXTG03}>
              н/д
            </Grid>
          </Grid>,
        );
      }
    }
    return resStr;
  };

  return (
    <Grid item sx={styleXTG04}>
      <Box sx={{ marginRight: 0.74, border: 0 }}>
        <HeaderPXG1111 />
      </Box>
      <Box sx={{ overflowX: 'auto', height: '75vh', border: 0 }}>
        {props.open && <div>{StrokaPXG1111()}</div>}
      </Box>
    </Grid>
  );
};

export default PointsXtGrid1111;
