import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryUpdate, categoryCreate } from '../actions'
import { View, Text } from 'react-native';
import { Box, BoxSection, Input, Button, LargerInput } from './common'

class CategoryCreate extends Component {
  onButtonPress() {
    const { name, description } = this.props;
    this.props.categoryCreate({ name, description });
  }

  render() {
    return (
      <Box>
        <BoxSection>
          <Text style={styles.headerStyle}>Create New</Text>
        </BoxSection>
        <BoxSection>
        <Input
          label="Name"
          placeholder="name"
          value={this.props.name}
          onChangeText={value => this.props.categoryUpdate({ prop: 'name', value })}
        />
        </BoxSection>
        <BoxSection>
        <LargerInput
          label="Description"
          placeholder="description"
          value={this.props.description}
          onChangeText={value => this.props.categoryUpdate({ prop: 'description', value })}
        />
        </BoxSection>
        <BoxSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </BoxSection>
      </Box>

    )
  }
}

const styles = {
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    flex: 1,
    paddingBottom: 20,
    color: 'red',
  },

}


const mapStateToProps = (state) => {
  const { name, description } = state.categoryForm;
  return { name, description }
};

export default connect(mapStateToProps, {
  categoryUpdate, categoryCreate
})(CategoryCreate);
