/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { Platform, StyleSheet } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    wrapper: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '33%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      padding: 15,
      marginTop: -15,
      marginBottom: -20,
      marginLeft: -10,
      marginRight: -10
    },
    container: {
      width: 64,
      height: 64,
      flex: 0,
      borderRadius: 500,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    small: {
      padding: 0,
      width: 50,
      height: 50
    },
    value: {
      fontWeight: '400',
      fontSize: 22,
      lineHeight: 30,
      height: 30,
      color: theme.color.primary || Color.primary
    },
    valueSmall: {
      fontSize: 18,
      height: 26,
      lineHeight: 26
    },
    text: {
      color: Color.gray,
      fontSize: 10,
      lineHeight: 14,
      height: 14
    },
    textSmall: {
      fontSize: 9,
      lineHeight: 10,
      height: 10
    },
    wrapperCompact: {
      marginBottom: -30
    },
    textCompact: {},
    valueCompact: {}
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
