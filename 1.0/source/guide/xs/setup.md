#Xamarin Studio Setup

<!--## Watch This Guide
![yt:4z1HQ1M3qJ0](images/video.png)-->


##Adding Extension Gallery
Prior to releasing the EMDK For Xamarin, we will be hosting a private Xamarin Studio Add-in gallery to allow you to easily install the 
Add-in. To get access to the gallery, you need to add a gallery to the Xamarin Studio Add-in Manger.



1. Open Xamarin Studio
	
	* For windows, select Tools > Add-in Manager

		![img](images/xs/OpenAddinManager_win.png)

	* For Mac, select Xamarin Studio > Add-in Manager

		![img](images/xs/OpenAddinManager_mac.png)


2. Then select the Gallery Tab and click the down arrow on the Repository combo box.

	![img](images/xs/GalleryTabAndRepoDownArrow.png)



3. Select "Manage Repositories" from that drop down

	![img](images/xs/SelectManageRepositories.png)

4. Then click the "add" button, in the "Add-in Repository Management" window.
	
	![img](images/xs/SelectAddRepo.png)
	
5. Enter http://emdk.github.io/xamarin-docs/xs/main.mrep into the "Register an On-line Repository" box, then select `OK`

	![img](images/xs/EnterRepoURL.png)


6. Now that we see the Add-in Repository has been added, select `Close`
	
	![img](images/xs/RepoAddedNowSelectClose.png)



##Installing the Add-in

1. In the far left pane under the Repository combo box, Select "EMDK for Xamarin" under "IDE extensions".
	
	![img](images/xs/ClickInstallButton.png)

2.  Now click the "Install button" in the bottom left of the right hand pane.

3. Then select Install in the next pop-up.

	![img](images/xs/SelectInstallFromPopup.png)

	> You will likely see an error message stating that the install failed. This is a known issue in Xamarin Studio, and will
	be address in later revisions of the IDE.  The Add-in is now installed, we just need to restart the IDE for the EMDK menu to be displayed.  
	
	![img](images/xs/InstallFailed.png)


4. Restart Xamarin Studio and you will see the EMDK menu on the Menu bar.





## What's Next
In order to fully enable the EMDK for Xamarin, you must [install the Xamarin Component](../guide/component/install)
