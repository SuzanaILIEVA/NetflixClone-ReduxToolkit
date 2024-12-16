import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import defaultStyle from '../../styles';
import HeaderComp from '../../components/ui/headerComp';
import InputComp from '../../components/ui/inputComp';
import ButtonComp from '../../components/ui/buttonComp';
import {themeColors} from '../../themes/themeColors';
import {Formik} from 'formik';
import {signInvalidationSchema} from '../../utils/validationSchema';
import {useNavigation} from '@react-navigation/native';
import {WATCHLIST} from '../../utils/routes';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const [password, setPassword] = useState('');
  return (
    <View style={defaultStyle.container}>
      <HeaderComp
        icon={
          <AntDesign name="arrowleft" size={30} color={themeColors.WHITE} />
        }
        iconPosition="left"
        onPress={() => navigation.goBack()}
      />
      <View style={{height: 60}} />
      <ScrollView style={styles.inputContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={signInvalidationSchema}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            navigation.navigate(WATCHLIST);
            resetForm('');
          }}>
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View>
              <InputComp
                placeholder="Enter your mail address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email && errors.email}
              />
              <View>
                <InputComp
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                  secureTextEntry={secure}
                />
                <TouchableOpacity
                  style={styles.eye}
                  onPress={() => setSecure(!secure)}>
                  {secure == true ? (
                    <Entypo name="eye-with-line" size={22} />
                  ) : (
                    <Entypo name="eye" size={22} />
                  )}
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 50}}>
                <ButtonComp
                  title={'Sign In'}
                  color={themeColors.RED}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <View style={{marginTop: 20}}>
          <Text style={styles.infotext}>Need help?</Text>
          <Text style={[styles.infotext, {}]}>
            New to Netflix?{' '}
            <Text style={{color: themeColors.RED}}> Sign up now</Text>.
          </Text>
        </View>
        <Text style={styles.info}>
          Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
          Learn more.
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  inputContainer: {},
  infotext: {
    color: themeColors.WHITE,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    lineHeight: 20,
  },
  info: {
    textAlign: 'center',
    marginTop: 20,
    color: themeColors.GRAY,
    paddingHorizontal: 80,
    lineHeight: 20,
    fontSize: 16,
  },
  eye: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
});
