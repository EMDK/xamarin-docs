#Visual Studio Setup

##Adding Extension Gallery
Prior to releasing the EMDK For Xamarin, we will be hosting a private Visual Studio Extension gallery to allow you to easily install the extension. To get access to the gallery, you need to add a configuration option to your Visual Studio settings.

1. Open Visual Studio and select `Tools\Options`.

	![img](images/vs/toolsoptions.png)
2. Then select `Environment\Extensions`. 

	![img](images/vs/options-extensions-section.png)
3. On the right hand side of the `Options` dialog, select the `Add` button.

	![img](images/vs/options-gallery-add.png)
4. Enter `EMDK for Xamarin Beta` for the `Name` field.
5. Enter `http://emdk.github.io/xamarin-docs/vs/atom.xml` for the `URL` field.
6. Click `Ok` to close the Options dialog.

	![img](images/vs/options-gallery-complete.png)


##Installing the Extension
Now that the gallery has been added to Visual Studio, you will be able to use this to download new versions of the beta releases. To install the EMDK for Xamarin extension:

1. Open Visual Studio and select `Tools\Extensions and Updates`.

	![img](images/vs/toolsextensions.png)
2. Select the `Online` section in the left hand side of the `Extensions and Updates` dialog.
3. Choose the `EMDK For Xamarin Beta` item you just added.
4. You should now be presented with a listing, showing the `EMDK For Xamarin Visual Studio Extension`. 
5. Click the `Download` button to install it.
	
	![img](images/vs/extension-download.png)
6. Click `Yes` when prompted to allow the program to make changes to your computer.

	![img](images/vs/vsix-install-allow.png)
7. Click `Install` when prompted to agree to the license terms.

	![img](images/vs/vsix-install-license.png)
8. Click `Close` when the extension installer is complete.

	![img](images/vs/vsix-install-complete.png)
9. Restart Visual Studio as directed

	![img](images/vs/vsix-restart.png)

## What's Next
In order to fully enable the EMDK for Xamarin, you must [install the Xamarin Component](../guide/component/install) 
