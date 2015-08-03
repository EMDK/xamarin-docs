var menuStrcture = [
	{
		title: 'Help',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'About The EMDK for Xamarin',
				link: '#guide-about',
			},
			{
				name: 'Getting Started',
				icon: 'fa fa-rocket',
				link: '#',
				items: [
					{
						title: 'Getting Started',
						icon: 'fa fa-rocket',
						items: [
							{
								name: 'Xamarin Component Installation',
								link: '#guide-xamarinSetup',
							},
							{
								name: 'Visual Studio Plug-in',
								link: '#guide-vsSetup',
							},
							{
								name: 'Xamarin Studio Plug-in',
								link: '#guide-xsSetup',
							},
							{
								name: 'Setup A Device',
								link: '#guide-setupDevice',
							},
							{
								name: 'EMDK Profiles Overview',
								link: '#guide-profiles-usingwizard',
							},
							{
								name: 'Profile Manager API Tutorial',
								link: '#guide-tutorial-profileManagerApi',
							}
						]
					}
				]
			},
			{
				name: 'Tutorials',
				icon: 'fa fa-terminal',
				link: '#',
				items: [
					{
						title: 'Tutorials',
						icon: 'fa fa-terminal',
						items: [
							{
								name: 'Profile Manager',
								link: '#',
								items: [
									{
										title: 'Profile Manager Tutorials',
										icon: 'fa fa-book',
										items: [
											{
												name: 'Basic Data Capture',
												link: '#guide-tutorial-tutdatacaptureprofile',
											},

										]
									}
								]
							},
							{
								name: 'Scanning APIs',
								link: '#',
								items: [
									{
										title: 'Scanning API Tutorials',
										icon: 'fa fa-book',
										items: [
											{
												name: 'Basic Scanning Tutorial',
												link: '#guide-tutorial-tutBasicScanningAPI',
											},
										]
									}
								]
							},
						]
					}
				]
			},
			{
				name: 'Samples',
				icon: 'fa fa-download',
				link: '#',
				items: [
					{
						title: 'Samples',
						icon: 'fa fa-download',
						items: [
							{
								name: 'Using EMDK For Xamarin Samples',
								link: '#guide-sample-emdksamples',
							},
							{
								name: 'DataCapture Profile Sample',
								link: '#guide-sample-sampledatacaptureprofile',
							},
						]
					}
				]
			},
			{
				name: 'Guides',
				icon: 'fa fa-book',
				link: '#',
				items: [
					{
						title: 'Guides',
						icon: 'fa fa-book',
						items: [
							{
								name: 'SimulScan API',
								link: '#guide-simulscan_guide',
							},
							{
								name: 'Name-Value Pair',
								link: '#guide-name_value_pair',
							},
							{
								name: 'PersonalShopper API',
								link: '#guide-personalshopper',
							},
							{
								name: 'Secure NFC API',
								link: '#guide-securenfc',
							}
						]
					}
				]

			},
			{
				name: 'Reference',
				icon: 'fa fa-code',
				link: '#',
				items: [
					{
						title: 'Reference',
						icon: 'fa fa-code',
						items: [
							{
								name: 'Core and ProfileManager APIs',
								link: '#guide-reference-EMDKList',

							},
							{
								name: 'Barcode APIs (Java)',
								link: '#guide-reference-EMDKList?Barcode APIs',

							},
							{
								name: 'Profile Manager Features',
								link: '#',
								items: [
									{
										title: 'Profile Manager Features',
										icon: 'fa fa-book',
										items: [

											{
												name: 'EMDK Profiles Overview',
												link: '#guide-profiles-usingwizard',
											},
											{
												name: 'Data Capture',
												link: '#',
												items: [
													{
														title: 'Data Capture',
														icon: 'fa fa-barcode',
														items: [
															{
																name: 'Activity Selection',
																link: '#guide-profiles-profileactivity',
															},
															{
																name: 'Barcode',
																link: '#guide-profiles-profilebarcode',
															},
															{
																name: 'Intent Output',
																link: '#guide-profiles-profileintent',
															},
															{
																name: 'IP Output',
																link: '#guide-profiles-profileIP',
															},
															{
																name: 'Keystroke',
																link: '#guide-profiles-profilekeystroke',
															},
															{
																name: 'Magstripe',
																link: '#guide-profiles-profilemsr',
															},
														]
													},
												]
											},
											{
												name: 'Access Manager',
												link: '#guide-profiles-access',
											},
											{
												name: 'Analytics Manager',
												link: '#guide-profiles-analytics',
											},
											{
												name: 'App Manager',
												link: '#guide-profiles-app',
											},
											{
												name: 'Audio Manager <span class="label label-primary">New</span>',
												link: '#guide-profiles-audio',
											},
											{
												name: 'Battery Manager <span class="label label-primary">New</span>',
												link: '#guide-profiles-battery',
											},
											{
												name: 'Browser Manager',
												link: '#guide-profiles-browser',
											},
											{
												name: 'Camera Manager',
												link: '#guide-profiles-camera',
											},
											{
												name: 'Cellular Manager',
												link: '#guide-profiles-cellular',
											},
											{
												name: 'Certificate Manager',
												link: '#guide-profiles-cert',
											},
											{
												name: 'Clock',
												link: '#guide-profiles-clock',
											},
											{
												name: 'Component Manager <span class="label label-primary">New</span>',
												link: '#guide-profiles-component',
											},
											{
												name: 'Dev Admin',
												link: '#guide-profiles-devadmin',
											},
											{
												name: 'DHCP Manager <span class="label label-primary">New</span>',
												link: '#guide-profiles-dhcp',
											},
											{
												name: 'Display Manager',
												link: '#guide-profiles-display',
											},
											{
												name: 'Encrypt Manager',
												link: '#guide-profiles-encrypt',
											},
											{
												name: 'GPRS Manager',
												link: '#guide-profiles-gprs',
											},
											{
												name: 'KeyMap Manager <span class="label label-primary">New</span>',
												link: '#guide-profiles-keymap',
											},
											{
												name: 'Persistence Manager',
												link: '#guide-profiles-persistence',
											},
											{
												name: 'Power Manager',
												link: '#guide-profiles-power',
											},
											{
												name: 'PowerKey Manager',
												link: '#guide-profiles-powerkey',
											},
											{
												name: 'SD Card  Manager',
												link: '#guide-profiles-sdcard',
											},
											{
												name: 'Settings  Manager',
												link: '#guide-profiles-settings',
											},
											{
												name: 'Threat  Manager',
												link: '#guide-profiles-threat',
											},
											{
												name: 'Touch  Manager',
												link: '#guide-profiles-touch',
											},
											{
												name: 'UI  Manager',
												link: '#guide-profiles-ui',
											},
											{
												name: 'USB  Manager',
												link: '#guide-profiles-usb',
											},
											{
												name: 'WiFi',
												link: '#guide-profiles-wifi',
											},
											{
												name: 'Wireless  Manager',
												link: '#guide-profiles-wireless',
											},
											{
												name: 'XML  Manager',
												link: '#guide-profiles-xml',
											},
											{
												name: '',
												link: '',
											}
										]
									}
								]
							},

						]
					}
				]
			},
			{
				name: 'Using This Help',
				link: '#guide-abouthelp',
				icon: 'fa fa-question-circle'
			},

		]
	}
];
