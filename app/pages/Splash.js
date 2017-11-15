import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Splash extends React.Component {
    static navigationOptions = {
      header:null
    }
    componentDidMount() {
        const { navigation } = this.props;
        this.timer = setTimeout(() => {
            navigation.navigate('TabBarView');
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Image
                style={{
                    width: SCREEN_WIDTH,
                    height:SCREEN_HEIGHT
                }}
                source={require('../resource/start_page.jpg')}
            />
        );
    }
}
