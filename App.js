import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

<TouchableOpacity
style={StyleSheet.submitButton}
onPress={this.submitStory}
>
    <Text style={StyleSheet.buttonText}>Submit</Text>
</TouchableOpacity>