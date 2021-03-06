import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const PointsXt112Comp11 = (props) => {
  const crRoad = props.crossroad;
  const colorsGraf = [
    'orange',
    'Turquoise',
    'YellowGreen',

    'Yellow',
    'Pink',
    'Aqua',

    'Lime',
    'Tomato',
    'teal',

    'purple',
    'RosyBrown',
    'Coral',

    'Olive',
    'Magenta',
    'DarkGray',

    'RoyalBlue',
    'SpringGreen',
    'Violet',
  ];

  const styleXTG02 = {
    fontSize: 11,
    maxHeight: '15px',
    minHeight: '15px',
    backgroundColor: '#F1F3F4',
    color: 'black',
    marginRight: 1,
  };

  const [value, setValue] = React.useState(0);

  let dlMas = props.xctrl.xctrls[crRoad].StrategyB.length;
  const horizon = props.xctrl.xctrls[crRoad].StrategyB[dlMas - 1].xright;
  const vertical = props.xctrl.xctrls[crRoad].StrategyB[dlMas - 1].xleft;
  const axisHorizon = horizon * 1;
  const steepHorizon = 12 / axisHorizon;
  const axisVertical = vertical * 1;
  const steepVertical = 84.4 / axisVertical;
  let matrix = [[]];
  let scale = 5;

  let coler = 'red';
  let colerOld = [];
  let masStr = [];
  let masCol = [];
  let colBl = 0;

  const PointsXt112Comp1Tab4 = () => {
    let resStr = [];
    let resSps = [];

    if (value > 1) scale = 2;

    MakeMatrix();

    const PointsXt112Comp1Tab4Str = (j) => {
      resStr = [];
      coler = 'red';
      colerOld = matrix[j / scale][0 / scale];
      masStr = [];
      masCol = [];
      colBl = 0;

      for (let i = 0; i < horizon; i += scale) {
        coler = matrix[j / scale][i / scale];
        if (coler === colerOld) {
          colBl++
        } else {
          masStr.push(colBl);
          masCol.push(colerOld);
          colBl = 1;
          colerOld = coler
        }
      }
      masStr.push(colBl);
      masCol.push(coler);

      for (let i = 0; i < masStr.length; i++) {
        resStr.push(
          <Grid
            key={i}
            xs={steepHorizon * scale * masStr[i]}
            item
            sx={{
              backgroundColor: masCol[i],
              height: String(steepVertical * scale) + 'vh',
            }}></Grid>,
        );
      }
      return resStr;
    };

    for (let j = 0; j < vertical; j += scale) {
      resSps.push(
        <Grid key={j} item container sx={{ border: 0 }}>
          {PointsXt112Comp1Tab4Str(j)}
        </Grid>,
      );
    }
    return resSps;
  };

  const MakeMatrix = () => {
    let ratio = 0;
    let luchP = 1;
    let luchO = 1;
    let coler = 'red';
    let i = 0;
    let j = 0;

    const MakeMatrixColor = (num) => {
      luchP = props.xctrl.xctrls[crRoad].StrategyB[num].vleft;
      luchO = props.xctrl.xctrls[crRoad].StrategyB[num].vright;
      ratio =
        props.xctrl.xctrls[crRoad].StrategyB[num].xright /
        props.xctrl.xctrls[crRoad].StrategyB[num].xleft;
      coler = colorsGraf[num * 3];
      if (luchP !== 1 || luchO !== 1) {
        if (i < j * luchO * ratio) coler = colorsGraf[num * 3 + 1];
        if (i >= j * luchP * ratio) coler = colorsGraf[num * 3 + 2];
      }
    };

    for (j = 0; j < vertical; j += scale) {
      matrix[j] = [];

      for (i = 0; i < horizon; i += scale) {
        if (
          dlMas >= 1 &&
          props.xctrl.xctrls[crRoad].StrategyB[0].xright >= i &&
          props.xctrl.xctrls[crRoad].StrategyB[0].xleft >= j
        ) {
          MakeMatrixColor(0);
        } else {
          if (
            dlMas >= 2 &&
            props.xctrl.xctrls[crRoad].StrategyB[1].xright >= i &&
            props.xctrl.xctrls[crRoad].StrategyB[1].xleft >= j
          ) {
            MakeMatrixColor(1);
          } else {
            if (
              dlMas >= 3 &&
              props.xctrl.xctrls[crRoad].StrategyB[2].xright >= i &&
              props.xctrl.xctrls[crRoad].StrategyB[2].xleft >= j
            ) {
              MakeMatrixColor(2);
            } else {
              if (
                dlMas >= 4 &&
                props.xctrl.xctrls[crRoad].StrategyB[3].xright >= i &&
                props.xctrl.xctrls[crRoad].StrategyB[3].xleft >= j
              ) {
                MakeMatrixColor(3);
              } else {
                if (
                  dlMas >= 5 &&
                  props.xctrl.xctrls[crRoad].StrategyB[4].xright >= i &&
                  props.xctrl.xctrls[crRoad].StrategyB[4].xleft >= j
                ) {
                  MakeMatrixColor(4);
                } else {
                  if (
                    dlMas >= 6 &&
                    props.xctrl.xctrls[crRoad].StrategyB[5].xright >= i &&
                    props.xctrl.xctrls[crRoad].StrategyB[5].xleft >= j
                  ) {
                    MakeMatrixColor(5);
                  }
                }
              }
            }
          }
        }
        matrix[j].push(coler);
      }
    }
    matrix = matrix.filter(function (el) {
      //?????????????????????? ???? ???????????? ????????????????
      return el != null;
    });
    matrix.reverse(); //???????????????????????????? ??????????????
  };

  return (
    <Grid item container xs={12}>
      <Button sx={styleXTG02} variant="contained" onClick={() => setValue(1)}>
        <b>?????????????????? ?????????????????? ????????????</b>
      </Button>
      <Button sx={styleXTG02} variant="contained" onClick={() => setValue(2)}>
        <b>?????????????????? ?? ?????????????? ????????????????</b>
      </Button>

      <>{value > 0 && <>{PointsXt112Comp1Tab4()}</>}</>
    </Grid>
  );
};

export default PointsXt112Comp11;
