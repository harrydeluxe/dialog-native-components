/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import { StyleSheet } from 'react-native';
import { Color, Padding } from '../../styles';

const getStyles = (theme, styleOverride) => {
  const style = {
    container: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Padding.large * 2,
      paddingBottom: Padding.default * 2
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    title: {
      fontSize: 28,
      color: '#fff'
    },
    online: {
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.5)'
    },
    button: {
      borderRadius: 6,
      backgroundColor: '#fff',
      height: 44,
      width: '100%',
      paddingLeft: Padding.small,
      paddingRight: Padding.small,
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    buttonWrapper: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      color: theme.color.primary || Color.primary,
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '500',
      flex: 0,
      paddingLeft: Padding.default / 2 + 26
    },
    buttonIcon: {
      position: 'absolute',
      left: 0,
      top: -3,
      tintColor: theme.color.primary || Color.primary
    }
  };

  return StyleSheet.create(Object.assign({}, style, styleOverride));
};

export default getStyles;
