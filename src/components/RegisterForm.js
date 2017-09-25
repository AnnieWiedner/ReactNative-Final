import React, { Component } from 'react';
import { Text } from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, registerUser, goToLogin } from '../actions';
import { Box, BoxSection, Input, Button, Spinner, Link } from './common';

class RegisterForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.registerUser({ email, password })
  }

  onLinkPress() {
    const { email, password, loading, error } = this.props;
    this.props.goToLogin({ email, password, loading, error })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Register
      </Button>
    )
  }

  render() {
    return (
      <Box>
        <BoxSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        </BoxSection>
        <BoxSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        </BoxSection>

        <Text style={styles.errorTextStyle}>{this.props.error}</Text>

        <BoxSection>
          {this.renderButton()}
        </BoxSection>

        <BoxSection>

          <Link onPress={this.onLinkPress.bind(this)}>
            Login
          </Link>
        </BoxSection>

      </Box>

    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red',
    paddingTop: 5
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading }
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, registerUser, goToLogin
})(RegisterForm);
