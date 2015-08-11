#ProfileManager
This class handles all the profile related functions.

**Type** - Symbol.EMDK.Xamarin.EMDKBase

##Methods
###AddDataListener
**public virtual void AddDataListener (Symbol.EMDK.Xamarin.ProfileManager.IDataListener p0);**

The client can register to get data notification via callbacks.

**Parameters:** 

* Symbol.EMDK.Xamarin.ProfileManager+IDataListener **p0** - DataListener Instance

**Returns** - System.Void

###CreateNameValuePair
**public static string CreateNameValuePair (string p0, string p1, string p2);**

This function creates a name value pair string according to the Name-Value pair request. The return string is compatible with ProfileManager.processProfile(String profileName, PROFILE_FLAG profileFlag, String[] extraData) function’s extraData array element. If this function failed, it throws InvalidParameterException exception.

**Parameters:** 

* System.String **p0** - Emdk Name
* System.String **p1** - Parameter Name.
* System.String **p2** - Parameter Value.

**Returns** - System.String

###ProcessProfile
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfile (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

Processes the given profile based on the data provided and the flag and return status of the action.

**Parameters:** 

* System.String **p0** - profileName - Name of the profile. ex: 'Profile1'.
* Symbol.EMDK.Xamarin.ProfileManager+PROFILE_FLAG **p1** - profileFlag - ProfileManager.PROFILE_FLAG If the profileFlag is set to SET, and if the given profile is not available in the EMDKConfig.xml, it will look for valid profile in extraData argument and if present, the profile will be added to the internal XML volatile repository and also applied to the device. If the profile is present in the EMDKConfig.xml, it will be applied to the device. If profileFlag is set to GET and if the profile is present in the internal repository, it will be returned in extraData.
* Org.W3c.Dom.IDocument **p2** - This can be used to provide data for processing action.

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###ProcessProfile
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfile (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, string[] p2);**

To be added.

**Parameters:** 

* System.String **p0** - To be added.
* Symbol.EMDK.Xamarin.ProfileManager+PROFILE_FLAG **p1** - To be added.
* System.String[] **p2** - To be added.

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###ProcessProfileAsync
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfileAsync (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

To be added.

**Parameters:** 

* System.String **p0** - To be added.
* Symbol.EMDK.Xamarin.ProfileManager+PROFILE_FLAG **p1** - To be added.
* Org.W3c.Dom.IDocument **p2** - To be added.

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###ProcessProfileAsync
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfileAsync (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, string[] p2);**

To be added.

**Parameters:** 

* System.String **p0** - To be added.
* Symbol.EMDK.Xamarin.ProfileManager+PROFILE_FLAG **p1** - To be added.
* System.String[] **p2** - To be added.

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###RemoveDataListener
**public virtual void RemoveDataListener (Symbol.EMDK.Xamarin.ProfileManager.IDataListener p0);**

To be added.

**Parameters:** 

* Symbol.EMDK.Xamarin.ProfileManager+IDataListener **p0** - To be added.

**Returns** - System.Void

##Properties

###IsPreviousRequestPending
This method tells whether the previous process profile request is pending or not. If the previous request is pending, you can't submit the next request until the current request completes and calling the process profile method will return error.

**Type** - System.Boolean


