/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import getStyles from './styles';
import { Color } from '../../../styles';

type Props = {
  id: string,
  title: string,
  onChange: (id: string, value: string) => mixed,
  value: string,
  keyboardType: 'default' | 'numeric'
};

class CustomFormString extends PureComponent<Props> {
  styles: Object;

  static defaultProps = {
    keyboardType: 'default'
  };

  static contextTypes = {
    theme: PropTypes.object,
    style: PropTypes.object,
    locale: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.styles = getStyles(context.theme, context.style.CustomFormString);
  }

  handleChange = (value: string) => {
    this.props.onChange(this.props.id, value);
  };

  renderTitle() {
    return <Text style={this.styles.title}>{this.props.title}</Text>;
  }

  renderTextInput() {
    return (
      <TextInput
        style={this.styles.input}
        onChangeText={this.handleChange}
        value={this.props.value}
        returnKeyType="done"
        // placeholder={this.props.title}
        keyboardType={this.props.keyboardType}
      />
    );
  }

  render() {
    return (
      <View style={this.styles.container}>
        {this.renderTitle()}
        {this.renderTextInput()}
      </View>
    );
  }
}

export default CustomFormString;