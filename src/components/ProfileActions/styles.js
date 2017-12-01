/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    block: {
      paddingTop: Padding.large,
      paddingBottom: Padding.large,
      paddingRight: Padding.default * 2,
      paddingLeft: Padding.default * 2,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      alignContent: 'flex-start',
      justifyContent: 'center'
    },
    count: {
      flex: 0,
      fontSize: 16,
      color: Color.grayLight
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
