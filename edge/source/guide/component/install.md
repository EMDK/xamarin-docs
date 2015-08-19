#Xamarin Component Install
The Xamarin Component part of the EMDK includes the API libraries that you will use in your Android application. You must install the component and add it to your android project before being able to use the APIs.

## Watch This Guide
![yt:RazeKMsKrXU](images/video.png)


## Installing the Xamarin Component
Normally, you would install the Xamarin Component by accessing the Xamarin Component store, however for the beta we have included the component as part of the [Visual Studio Extension](../guide/vs/setup). After you have installed the EMDK For Xamarin Visual Studio Extension:

1. Select `EMDK\Add Xamarin Component`

	![img](images/vs/install-component.png)

This will install the Xamarin Component to Visual Studio so that it may be added to any Android project.

![img](images/vs/install-component-installed.png)

## Adding to a Visual Studio Project
Once the Xamarin Component has been installed to the IDE, you need to add it to your Android project.

> Note: Each project will cache the version of the component you have added withing your project folder. Even after removing the component from your project using the IDE, the component files will remain inside your project folder. 

1. Create or Open an Android based project.
2. Right click on the Project's `Component` folder in the `Solution Explorer`.
3. Choose `Edit Components`

	![img](images/vs/edit-components.png)
4. You must be logged into your Xamarin account in order to add the component	

	![img](images/component/login.png)
	![img](images/component/login-complete.png)

5. Choose `Add to Project` in the `EMDK For Xamarin` item of the `Installed on this machine` section

	![img](images/component/add.png)

6. The project is now installed and listed in the projects `Component` folder.

	![img](images/component/installed.png)

7. Clicking on the `Details` link in the projects `Edit Components` page will give you access to more details about the component, like version information, documentation and samples.

	![img](images/component/details-button.png)
	![img](images/component/details.png)

