import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { categoriesFetch } from '../actions';
import ListItem from './ListItem';
import { BoxSection, Button } from './common';
import { Actions } from 'react-native-router-flux';



class CategoryList extends Component {
  componentWillMount() {
    this.props.categoriesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ categories }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(categories)
  }

  renderRow(category) {
    return <ListItem category={category} />
  }

  render() {
    return (
      <View>
        <BoxSection>
          <Text style={styles.headerStyle}>Categories</Text>
        </BoxSection>

        <BoxSection>
        </BoxSection>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
        <BoxSection>
          <Button onPress={() => Actions.categoryCreate()}>New Category</Button>
        </BoxSection>

      </View>
    )
  }
}

const mapStateToProps = state => {
  const categories = _.map(state.categories, (val, uid) => {
    return { ...val, uid };
  })
  return { categories };
};

const styles = {
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    paddingTop: 50,
    flex: 1,

  },
}

export default connect(mapStateToProps, { categoriesFetch })(CategoryList);
