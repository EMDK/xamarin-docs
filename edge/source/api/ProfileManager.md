#ProfileManager
This class handles all the profile related functions.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###AddDataListener
**public virtual void AddDataListener (Symbol.XamarinEMDK.ProfileManager.IDataListener p0);**

The client can register to get data notification via callbacks.

**Parameters:** 

* Symbol.XamarinEMDK.ProfileManager.IDataListener **p0** - 

**Returns** - System.Void

###CreateNameValuePair
**public static string CreateNameValuePair (string p0, string p1, string p2);**

This function creates a name value pair string according to the Name-Value pair request. The return string is compatible with com.symbol.emdk.ProfileManager. processProfile(String profileName, PROFILE_FLAG profileFlag, String[] extraData) function’s extraData array element. If this function failed it throws InvalidParameterException exception.

**Parameters:** 

* System.String **p0** - emdk name String
* System.String **p1** - Parameter name String
* System.String **p2** - Parameter value String

**Returns** - System.String

###ProcessProfile
**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfile (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

To be added.

**Parameters:** 

* System.String **p0** - To be added.
* Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1** - To be added.
* Org.W3c.Dom.IDocument **p2** - To be added.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###ProcessProfile
**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfile (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, string[] p2);**

To be added.

**Parameters:** 

* System.String **p0** - To be added.
* Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1** - To be added.
* System.String[] **p2** - To be added.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###ProcessProfileAsync
**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfileAsync (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

To be added.

**Parameters:** 

* System.String **p0** - To be added.
* Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1** - To be added.
* Org.W3c.Dom.IDocument **p2** - To be added.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###ProcessProfileAsync
**public virtual Symbol.XamarinEMDK.EMDKResults ProcessProfileAsync (string p0, Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG p1, string[] p2);**

To be added.

**Parameters:** 

* System.String **p0** - To be added.
* Symbol.XamarinEMDK.ProfileManager.PROFILE_FLAG **p1** - To be added.
* System.String[] **p2** - To be added.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###RemoveDataListener
**public virtual void RemoveDataListener (Symbol.XamarinEMDK.ProfileManager.IDataListener p0);**

The client can un-register to get data notification via callbacks.

**Parameters:** 

* Symbol.XamarinEMDK.ProfileManager.IDataListener **p0** - 

**Returns** - System.Void

##Properties

###IsPreviousRequestPending
This method tells whether the previous process profile request is pending or not. If the previous request is pending, you can't submit the next request till the current request completes and calling the process profile method will return error.

**Type** - System.Boolean


