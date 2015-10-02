# EMDK For Xamarin - 1.0
The EMDK for Xamarin v1.0 provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices while retaining their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what Zebra Technologies devices have to offer.

##What's New

**Version 1.0**

* Supports Visual Studio 2013 and greater
* Supports Xamarin Studio 5.9.5 and greater (Windows and Mac)
* Installs as an IDE Plug-in for [Visual Studio](../guide/vs/setup) & [Xamarin Studio](../guide/xs/setup)
* Online Documentation
* Sample Code
	* [Barcode API Sample](../guide/sample/api-barcode) (included)
	* [Data Capture Profile Sample](../guide/sample/profile-datacapture) (available for download)
	* [Wi-Fi Profile Sample](../guide/sample/profile-wifi) (available for download)
	* [Power Manager Profile Sample](../guide/sample/profile-powermanager) (available for download)
* [Symbol.XamarinEMDK APIs](../guide/reference/EMDKList)
	* EMDKManager, ProfileManager, VersionManager
	* Symbol.XamarinEMDK.Barcode

##Devices Supported
Currently only Zebra Android KitKat devices are supported. Be sure to run the [device update](../guide/deviceupdate) on all devices before using the EMDK for Xamarin.

##Before you get started
In order to use the EMDK for Xamarin, you must have the Xamarin Platform installed on your development system. Xamarin Studio will be installed as part of the Xamarin Platform. If you intend to use Microsoft Visual Studio as your development environment, you must install Microsoft Visual Studio 2013 or higher. Zebra does not provide licenses for Microsoft Visual Studio or licenses for Xamarin Platform. Further information on obtaining licenses or getting started with these products, can be found at the following links.

###Development Environment 
Consult the [Xamarin](http://developer.xamarin.com/guides/android/getting_started/) and Microsoft documentation for installing and setting up Xamarin and Visual Studio:

* Xamarin.Android (Includes Xamarin Studio)
	* [Windows Setup](http://developer.xamarin.com/guides/android/getting_started/installation/windows/)
	* [Mac Setup](http://developer.xamarin.com/guides/android/getting_started/installation/windows/)

* [Microsoft Visual Studio](https://www.visualstudio.com/downloads/download-visual-studio-vs) (Recommended)


### Xamarin Licensing
* When using **Visual Studio** for EMDK development, a Xamarin **Business** License or higher is required. 

* When using **Xamarin Studio** for EMDK development, a Xamarin **Indie** License or higher is required. 

Learn more about [Xamarin Licensing options](https://store.xamarin.com/).



##Getting Started
### 1) Install The Visual Studio Extension or Xamarin Studio Add-in

Download and install the Visual Studio Extension using the online extension gallery. 

- [Read the Visual Studio Setup Guide](../guide/vs/setup)


Download and install the Xamarin Studio Add-in using the Add-in Manager. 

- [Read the Xamarin Studio Setup Guide](../guide/xs/setup)


### 2) Install The Xamarin Component

- [Read the Xamarin Component Install Guide](../guide/component/install)

### 3) Try the Sample
A sample is included as part of the Xamarin Component package to help get you started. Click on the **samples** tab on the component details page to add it to your solution project.

- [Read the Using Xamarin Samples Guide](../guide/sample/about)

### 4) Understand Profile Manager
One unique feature to EMDK for Xamarin is to control device behavior and configuration through the use of *profiles*. The EMDK Profile Manager lets you create profiles right from your IDE using a GUI interface for selecting the features and settings that your application wishes to use. Then in your application you would simply apply the profile when needed. This results in a simple approach and minimal lines of code required to accomplish tasks

- [Read the Profile Manager Overview Guide](../guide/profiles/about)

### 5) Build a Simple Application
Now that you have your environment setup and have an overview of the EMDK for Xamarin, let's walk through and build an application from scratch.

- [Follow the Hello Xamarin tutorial](../guide/tutorial/helloxamarin)

<div style="display:none">
<!-- this section used in Xamarin gettingstarted.md for component packaging -->
### 6) Check out our docs
We have a lot more resources for you to benefit from:

- API reference
- Developer Guides
- Tutorials
- Videos
- More Samples
- [More docs online](http://emdk.github.io/xamarin-docs/edge)
</div>


