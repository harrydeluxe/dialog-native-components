/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { ThemeOverride, StyleOverride } from '../../../types';
import { StyleSheet, Platform } from 'react-native';
import { Color } from '../../../styles';

const getStyles = (theme: ThemeOverride, styleOverride: StyleOverride) => {
  const style = {
    container: {
      flex: 0,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      ...Platform.select({
        ios: {
          padding: 20
        },
        android: {
          padding: 12
        }
      })
      // backgroundColor: 'rgba(0,255,0,.2)'
    },
    horizontal: {
      paddingBottom: 10
    },
    smallWidth: {
      height: 40
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
