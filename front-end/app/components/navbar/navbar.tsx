'use client';
import {Fragment, useState} from 'react';
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginForm from './loginForm';
import {app} from '../../config/firebase.config';
import {getAuth, signOut} from 'firebase/auth';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import api from '../../api';
import ApiLoader from '../../utils/apiLoader';
import NavbarSkeleton from './navbarSkeleton';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

const Search = styled('div')(({theme}) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	borderColor: 'black',
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
	'color': 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			'width': '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const Navbar = () => {
	const router = useRouter();
	const firebaseAuth = getAuth(app);
	function signOutL() {
		signOut(firebaseAuth);
		setLoggedIn(false);
	}
	const [Loader, setLoader] = useState(0);
	React.useEffect(() => {
		firebaseAuth.onAuthStateChanged(async (userCredentials) => {
			// console.log(userCredentials);
			if (userCredentials) {
				const {uid, displayName, email} = userCredentials;
				try {
					const response = await api.post('/user/signin', {
						uid,
						username: displayName,
						email,
					});
					const user = response.data;
					console.log(user);
					setLoggedIn(true);
					setLoginForm(false);
					setLoader(200);
				} catch (error) {
					console.error(error);
					setLoader(200);
				}
			} else {
				setLoader(200);
				setLoggedIn(false);
			}
		});
	}, []);

	const [loggedIn, setLoggedIn] = useState(false); // true if user is logged in
	const [loginForm, setLoginForm] = useState(false);

	return (
		<>
			{loginForm ? <LoginForm open={loginForm} setOpen={setLoginForm} /> : <></>}
			<div className="z-10 border-b-2 border-gray-200 sticky top-0 backdrop-filter backdrop-blur-md bg-white bg-opacity-40">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="flex w-full items-center">
							<Link href="/" className="flex flex-row items-center gap-3">
								<img src="/logo.png" className="h-12 w-12"></img>
							</Link>
							<div className="hidden sm:ml-6 sm:flex justify-center flex-grow">
								<div className="flex h-full items-center space-x-4"></div>
							</div>
						</div>
						<Search className="border-black border border-1">
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{'aria-label': 'search'}}
							/>
						</Search>
						<div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{/* Profile dropdown */}
							{Loader !== 200 ? (
								<ApiLoader state={Loader}>
									<NavbarSkeleton.Profile />
								</ApiLoader>
							) : (
								<>
									{loggedIn ? (
										<Menu as="div" className="relative ml-3">
											<div>
												<Menu.Button className="flex rounded-full text-sm">
													<span className="sr-only">Open user menu</span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-10 h-10">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
														/>
													</svg>
												</Menu.Button>
											</div>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95">
												<Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<Menu.Item>
														{({active}) => (
															<Link
																href="/profile"
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-lg text-gray-700'
																)}>
																Your Profile
															</Link>
														)}
													</Menu.Item>
													<Menu.Item>
														{({active}) => (
															<Link
																href="/admin/create"
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-lg text-gray-700'
																)}>
																Add Song
															</Link>
														)}
													</Menu.Item>
													<Menu.Item>
														{({active}) => (
															<button
																id="Sign-Out"
																onClick={() => signOutL()}
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-lg text-gray-700 w-full text-left'
																)}>
																Sign out
															</button>
														)}
													</Menu.Item>
												</Menu.Items>
											</Transition>
										</Menu>
									) : (
										<span
											className="font-semibold cursor-pointer p-2 hover:bg-slate-200 rounded-md w-20 text-center"
											onClick={() => {
												setLoginForm(true);
											}}>
											Sign-in
										</span>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
