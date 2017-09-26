import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryUpdate, categoryCreate } from '../actions'
import { View, Text, Picker, Item } from 'react-native';
import { Box, BoxSection, Input, Button, LargerInput, CancelButton } from './common'
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';



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

        <BoxSection>
          <CancelButton onPress={() => Actions.categoryList()}>
            Cancel
          </CancelButton>
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
  },

}


const mapStateToProps = (state) => {
  const { name, description } = state.categoryForm;
  return { name, description }
};

export default connect(mapStateToProps, {
  categoryUpdate, categoryCreate
})(CategoryCreate);
