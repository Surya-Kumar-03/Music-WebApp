"use client";
import {
	Button,
	TextField,
	Typography,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const LoginForm = (props: { open: boolean; setOpen: Function }) => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const formik = useFormik({
		initialValues: {
			id: "",
			password: "",
			submit: null,
		},
		validationSchema: Yup.object({
			id: Yup.string()
				.email("Enter a valid email")
				.required("Email Id is required"),
			password: Yup.string()
				.max(255, "Password is too")
				.required("Password is required"),
		}),

		onSubmit: async (values: any, helpers: any) => {
			try {
				// api request
				if (typeof window !== "undefined") {
					// redirect after successfull login
					// router.push()
				}
			} catch (err: any) {
				// failed login
			}
		},
	});

	return (
		<>
			<Dialog
				open={props.open}
				TransitionComponent={Transition}
				keepMounted
				fullWidth={true}
				maxWidth='sm'
				aria-describedby='alert-dialog-slide-description'
			>
				<div className='flex h-96'>
					<div className='w-2/3 h-full hidden sm:flex'>
						<img src='/login.png' className='h-full' alt='login' />
					</div>
					<div className='w-full h-full flex flex-col'>
						<div
							className='cursor-pointer flex justify-end pr-2 pt-2'
							onClick={() => {
								props.setOpen(false);
							}}
						>
							<svg
								width='2rem'
								height='2rem'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='Menu / Close_SM'>
									<path
										id='Vector'
										d='M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16'
										stroke='#000000'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</g>
							</svg>
						</div>
						<div className='flex justify-center items-center flex-grow'>
							<form
								noValidate
								onSubmit={e => {
									formik.handleSubmit(e);
								}}
								className='flex flex-col gap-4 mt-3'
								autoComplete='off'
							>
								<TextField
									error={!!(formik.touched.id && formik.errors.id)}
									fullWidth
									helperText={formik.touched.id && formik.errors.id}
									label='Email Id'
									name='id'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type='text'
									value={formik.values.id}
								/>
								<TextField
									error={!!(formik.touched.password && formik.errors.password)}
									fullWidth
									helperText={formik.touched.password && formik.errors.password}
									label='Your Password'
									name='password'
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type={showPassword ? "text" : "password"}
									value={formik.values.password}
									autoComplete='on'
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>
												<IconButton onClick={handlePasswordVisibility}>
													{showPassword ? (
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															strokeWidth={1.5}
															stroke='currentColor'
															className='w-6 h-6'
														>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
															/>
														</svg>
													) : (
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															strokeWidth={1.5}
															stroke='currentColor'
															className='w-6 h-6'
														>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
															/>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
															/>
														</svg>
													)}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
								{formik.errors.submit && (
									<Typography color='error' sx={{ mt: 3 }} variant='body2'>
										{formik.errors.submit}
									</Typography>
								)}
								<Button
									size='small'
									type='submit'
									variant='contained'
									style={{
										backgroundColor: "#007efc",
										textTransform: "none",
										fontSize: "1.3rem",
									}}
									color='primary'
									className='font-roboto shadow-md'
								>
									Log In
								</Button>
							</form>
						</div>
					</div>
				</div>
			</Dialog>
		</>
	);
};

export default LoginForm;
