#ProfileManager
This class handles all the profile related functions.

**Type** - Symbol.EMDK.Xamarin.EMDKBase

##Methods
###AddDataListener
**public virtual void AddDataListener (Symbol.EMDK.Xamarin.ProfileManager.IDataListener p0);**

The client can register to get data notification via callbacks.

Parameters: 

* Symbol.EMDK.Xamarin.ProfileManager+IDataListener **p0**

**Returns** - System.Void

###CreateNameValuePair
**public static string CreateNameValuePair (string p0, string p1, string p2);**

This function creates a name value pair string according to the Name-Value pair request. The return string is compatible with ProfileManager.processProfile(String profileName, PROFILE_FLAG profileFlag, String[] extraData) function’s extraData array element. If this function failed, it throws InvalidParameterException exception.

Parameters: 

* System.String **p2**
* System.String **p2**
* System.String **p2**

**Returns** - System.String

###ProcessProfile
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfile (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

Processes the given profile based on the data provided and the flag and return status of the action.

Parameters: 

* Org.W3c.Dom.IDocument **p2**
* Org.W3c.Dom.IDocument **p2**
* Org.W3c.Dom.IDocument **p2**

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###ProcessProfile
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfile (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, string[] p2);**

To be added.

Parameters: 

* System.String[] **p2**
* System.String[] **p2**
* System.String[] **p2**

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###ProcessProfileAsync
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfileAsync (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, Org.W3c.Dom.IDocument p2);**

To be added.

Parameters: 

* Org.W3c.Dom.IDocument **p2**
* Org.W3c.Dom.IDocument **p2**
* Org.W3c.Dom.IDocument **p2**

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###ProcessProfileAsync
**public virtual Symbol.EMDK.Xamarin.EMDKResults ProcessProfileAsync (string p0, Symbol.EMDK.Xamarin.ProfileManager.PROFILE_FLAG p1, string[] p2);**

To be added.

Parameters: 

* System.String[] **p2**
* System.String[] **p2**
* System.String[] **p2**

**Returns** - Symbol.EMDK.Xamarin.EMDKResults

###RemoveDataListener
**public virtual void RemoveDataListener (Symbol.EMDK.Xamarin.ProfileManager.IDataListener p0);**

To be added.

Parameters: 

* Symbol.EMDK.Xamarin.ProfileManager+IDataListener **p0**

**Returns** - System.Void

##Properties

###IsPreviousRequestPending
This method tells whether the previous process profile request is pending or not. If the previous request is pending, you can't submit the next request until the current request completes and calling the process profile method will return error.

**Type** - System.Boolean


