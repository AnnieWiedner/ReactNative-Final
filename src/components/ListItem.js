import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BoxSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.categoryCreate({ category: this.props.category });
  }

  render() {
    const { name } = this.props.category;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <BoxSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </BoxSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

export default ListItem;
