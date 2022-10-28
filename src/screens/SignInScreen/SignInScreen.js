import React, { useState } from 'react'
import {
	View,
	Image,
	StyleSheet,
	useWindowDimensions,
	ScrollView
} from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Logo from '../../../assets/app.reactIcon.png'

const SignInScreen = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const { height } = useWindowDimensions()
	const onRegisterPressed = () => {
		console.warn('Register')
	}
	const onSignInFacebook = () => {
		console.warn('Sign in with facebook')
	}
	const onSignInGoogle = () => {
		console.warn('Sign in with google')
	}
	const onSignInPressed = () => {
		console.warn('Sign in')
	}
	const onForgotPasswordPressed = () => {
		console.warn('Forgot password')
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Image 
					source={Logo} 
					style={[styles.logo, {height: height * 0.3}]} 
					resizeMode='contain'
				/>
				<CustomInput 
					placeholder={'Nombre de usuario'}
					value={username}
					setValue={setUsername}
				/>
				<CustomInput 
					placeholder={'Contraseña'}
					value={password}
					setValue={setPassword}
					secureTextEntry={true}
				/>
				<CustomButton 
					onPress={onSignInPressed}
					text={'Ingresar'}
				/>
				<CustomButton 
					onPress={onForgotPasswordPressed}
					text={'¿Olvidó la contraseña?'}
					type={'TERTIARY'}
				/>
				<CustomButton 
					onPress={onSignInGoogle}
					text={'Ingresar con Google'}
					bgColor={'#FAE9EA'}
					fgColor={'#DD4D44'}
				/>
				<CustomButton 
					onPress={onSignInFacebook}
					text={'Ingresar con Facebook'}
					bgColor={'#E7EAF4'}
					fgColor={'#4765A9'}
				/>
				<CustomButton 
					onPress={onRegisterPressed}
					text={'¿No tienes una cuenta? Regístrate'}
					type={'TERTIARY'}
				/>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	root: {
    padding: 40,
    alignItems: 'center',
  },
	logo: {
		width: '70%',
		maxWidth: 300,
		maxHeight: 200
	}
})

export default SignInScreen