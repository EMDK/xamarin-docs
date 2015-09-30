#Xamarin Studio Setup

<!--## Watch This Guide
![yt:4z1HQ1M3qJ0](images/video.png)-->


##Installing the Add-in


1. Open Xamarin Studio

2. Open Xamarin Studio Add-in Manager
	
	* For windows, select Tools > Add-in Manager

	* For Mac, select Xamarin Studio > Add-in Manager


2. Then select the Gallery Tab 
3. Enter `emdk` in the search box in the top right corner of the Add-in Manager.
	> As you type in the search box, the Add-in manager will filter out all add-ins except **EMDK for Xamarin**.

	![img](images/xs/gallery-tab-search-emdk.png)


2.  Now click the `Install` button in the bottom left corner of the right hand pane.

3. Then select Install in the next dialog.

	> You will likely see an error message stating that the install failed. This is a known issue, and will
	be addressed in later revisions of the Xamarin Studio.  The Add-in is now installed, we just need to restart the IDE for the EMDK menu to be displayed.  
	
	![img](images/xs/InstallFailed.png)

4. Click the close button for that dialog, then click the Close button for the Add-in Manager.

5. Restart Xamarin Studio and you will see the EMDK menu on the Menu bar.


##Uninstalling the Add-in

1. Open Xamarin Studio Add-in Manager
	
	* For windows, select Tools > Add-in Manager

	* For Mac, select Xamarin Studio > Add-in Manager

2. In the Installed Tab, click the **arrow** left of **IDE extensions** label

3. Find and select `EMDK for Xamarin`

4. Click the Uninstall button in the bottom left corner of the right hand pane.
5. Click the Uninstall button in the next dialog.
	> You will likely see an error message stating that the uninstall failed. This is a known issue, and will
	be addressed in later revisions of the Xamarin Studio.  The Add-in is now uninstalled, we just need to restart the IDE for the EMDK menu to be removed. 
6. Click the close button for that dialog, then click the Close button for the Add-in Manager.
7. Restart Xamarin Studio and you should no longer see the EMDK menu on the Menu bar.

## What's Next
In order to fully enable the EMDK for Xamarin, you must [install the Xamarin Component](../guide/component/install)
