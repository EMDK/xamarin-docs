# EMDK For Xamarin - Beta 
Welcome to the EMDK for Xamarin Beta. This beta will provide you with ability to use Zebra's EMDK features within your Xamarin application. Please be sure to read the contents of this guide in it's entirety to ensure your evironment is properly setup

**Features Supported**

- Profile Manager Visual Studio (2012+) Plugin
- Symbol.EMDK.Xamarin APIs
	- EMDKManager, ProfileManager, VersionManager, EMDKBase

**Not Yet Implemented**

- Symbol.EMDK.Xamarin.Barcode - this may be functional, but API names may change
- Xamarin Studio Add-In
- Mac Support

##Getting Started
### 1) Install the Xamarin Component
When this product is released, the component will be available on the Xamarin Component store, but for the beta you must install it manually:

- [Download and unzip the component]()
- In a command prompt, navigate to the folder containing the unzipped contents

	xamarin-component install emdk-component-0.0.1.xam

> Note: You will not see any feedback after running the command. The component will be listed when you attempt to [add a component to a project](../guide/components)

### 2) Complete IDE Setup
Installing the Xamarin Component only enables the EMDK API library, you must complete the installation of the IDE integration. This step only needs to be performed once, however adding the EMDK For Xamarin component needs to be performed for each project you wish to include it in.

- [Read the Visual Studio Setup Guide](../guide/vs/setup)

### 3) Try the Sample
A sample is included as part of the Xamarin Component package to help get you started. Click on the **samples** tab on the component details page to add it to your solution project.

- [Read the Using Xamarin Samples Guide](../guide/sample/about)

### 4) Understand Profile Manager
One unique feature to EMDK for Xamarin is to control device behavior and configuration through the use of *profiles*. The EMDK Profile Manager lets you create profiles right from your IDE using a GUI interface for selecting the features and settings that your application wishes to use. Then in your application you would simply apply the profile when needed. This results in a simple approach and minimal lines of code required to accomplish tasks

- [Read the Profile Manager Overview Guide](../guide/profiles/about)

### 5) Build a Simple Application
Now that you have your environment setup and have an overview of the EMDK for Xamarin, let's walk through and build an application from scratch.

- [Follow the Hello Xamarin tutorial](../guide/tutorial/helloxamarin)

### 6) Check out our docs
We have a lot more resources for you to benefit from:

- API reference
- Developer Guides
- Tutorials
- Videos
- More Samples
- [More docs online](http://emdk.github.io/xamarin-docs/edge)

### 7) Report Feedback/Issues
Thanks for taking the time to try out this beta. We would love to hear your [feedback or issues](https://github.com/emdk/xamarin-docs/issues/new?title=EMDK%20For%20Xamarin) you have encountered. Note; A GitHub account is required to create issues, please log into Github before submitting an issue.



