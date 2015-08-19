# Configuring A Device

>NOTE: Devices will need to be updated with the latest EMDK for Android Device Runtime

## Watch This Guide
![yt:KhXADu7t924](images/video.png)


##	Installing The Device Update

For your convenience, a menu item has been added to the Visual Studio extension to perform the device updated. Before running make sure:

1. The device has USB Debugging enabled
2. The device has been connected to the development machine

Once the device is connected:

1. Select the `EMDK` menu from the menu bar
2. Select `Apply Device Update` menu item

![img](images/deviceupdate.png)

The device will be reboot after the device update completes.

### Device Update APK
After selecting the `Apply Device Update` at least once, the device update APK file can be found in `C:\Users\Public\Symbol EMDK For Xamarin` folder.

## Installing the EMDK device runtime when the AppLock Manager is On:

* Option 1: Turn Off the AppLock Manager before EMDK device runtime deployment and the AppLock Manager can be turned On after device reboot.
* Option 2: The customer can add the EMDK OS update app name to the AppLock Manager Applications white list before the EMDK device runtime deployment.

## Installing the EMDK device runtime on Google Mobile Service (GMS) devices:
Before installing EMDK device runtime on GMS devices, you must enable the enterprise-grade features like Mobility Extensions (MX). To download enterprise enabler for your device, go to [https://portal.motorolasolutions.com/Support/US-EN](https://portal.motorolasolutions.com/Support/US-EN) and search for "Enterprise Enabler" along with the device name.

## Modify Device Runtime Installation Behavior
The EMDK device runtime update application will skip the EMDK runtime install if a device has an EMDK runtime version higher than the install version. The EMDK device runtime installation behavior can be modified by pushing an EMDK install mode configuration (`emdkosupdateconfig.xml`) to the `/enterprise/usr/` folder on a devices internal storage. This overrides the default settings of the application.

>NOTE: **This process is not required to use the default installation behavior.**

**Example emdkosupdateconfig.xml**

		:::xml
		<?xml version="1.0" encoding="utf-8"?>
		<wap-provisioningdoc>
			<characteristic type="EmdkOSUpdateMode">
				<parm name="InstallMode" value="skip"/>
				<parm name="RemoveInstaller" value="true"/>
			</characteristic>
		</wap-provisioningdoc>


**InstallMode Parm Value Options:**
This determines the install behavior when the existing version on the device is higher than the version being installed. The default install mode is `skip`.

* **auto** - Displays alert box during installation and waits for the user input
* **overwrite** - Overwrite and continue installation
* **skip** - Skip and continue installation. This is the default
* **cancel** - Exit the installation

**RemoveInstaller Parm Value Options:**
Removes the EMDK OS Update application on successful update.

* **true** - Removes the EMDK OS Update application on successful update (Default).
* **false** - Don't remove the EMDK OS Update application on successful update.

>Note: Supported in EMDKOS Update App v3.1.37 or higher.

**EMDK Device Runtime Installation Steps**

1. Create `emdkosupdateconfig.xml` and push into `/enterprise/usr/` to modify the default behavior.
2. Push the `EmdkOSUpdateApp_[version].apk` to a supported Symbol device.
3. Install EmdkOSUpdateApp application.
4. Launch installed EmdkOSUpdateApp application.

>NOTE: If the update succeeds, the EmdkOSUpdateApp will be un-installed (if the default settings have not overridden) and device will be rebooted. If the update fails, the EmdkOSUpdateApp application will not be un-installed. The update results will be available at  `/enterprise/usr/emdkosupdateresults.xml`
