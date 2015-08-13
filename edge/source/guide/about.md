# EMDK For Xamarin - Beta
Welcome to the EMDK for Xamarin Beta. This beta will provide you with ability to use Zebra's EMDK features within your Xamarin application. Please be sure to read the contents of this guide in it's entirety to ensure your evironment is properly setup

> NOTE: In order to use the EMDK for Xamarin Beta, you must first have Microsoft Visual Studio 2010 or above, and the Xamarin Platform installed on your development system.  Zebra does not provide licenses for Microsoft Visual Studio or licenses for Xamarin Platform/Xamarin Studio. Further information on obtaining licenses or getting started with these products, can be found at the following links.
> >[Microsoft Visual Studio](https://www.visualstudio.com/downloads/download-visual-studio-vs)

> >[Xamarin](http://developer.xamarin.com/guides/cross-platform/getting_started/)


**Features Supported**

- Profile Manager Visual Studio (2012+) Plugin
- Symbol.EMDK.Xamarin APIs
	- EMDKManager, ProfileManager, VersionManager, EMDKBase

**Not Yet Implemented**

- Symbol.EMDK.Xamarin.Barcode - this may be functional, but API names may change
- Xamarin Studio Add-In
- Mac Support

##Getting Started
### 1) Install The Visual Studio Extension
Download and install the Visual Studio Extension using the online extension gallery. For this beta, you will need to add a private gallery to your Visual Studio settings in order to access the extension.

- [Read the Visual Studio Setup Guide](../guide/vs/setup)

### 2) Install The Xamarin Component
When this product is released, the component will be available on the Xamarin Component store, but for the beta you must install it manually:

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

### Report Feedback/Issues
Thanks for taking the time to try out this beta. We would love to hear your [feedback or issues](https://github.com/emdk/xamarin-docs/issues/new?title=EMDK%20For%20Xamarin) you have encountered. Note; A GitHub account is required to create issues, please log into Github before submitting an issue.
