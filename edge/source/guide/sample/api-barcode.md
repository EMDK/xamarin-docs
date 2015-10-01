#BarcodeSample1

##Overview
The Barcode API's are used when you wish to handle all barcode scanning entirely in C# using [Barcode/Scanning APIs](../guide/reference/EMDKList). These API's work independently of any Data Capture profiles..  

The available actions in the [Barcode/Scanning API](../guide/reference/EMDKList?Barcode APIs) are:
  
* Set Scanner Device  
* Set [TriggerType](../api/Scanner_TriggerTypes)
* Set [Decoder Params](../api/ScannerConfig_DecoderParameters)
* Set [Reader Params](../api/ScannerConfig_ReaderParameters)
* Set [Scan Params](../api/ScannerConfig_ScanParameters)
* Scan barcodes based on selected features   

This sample application will allow you to scan barcodes based on selected scanner device, trigger type and few decoder [Decoder Params](../api/ScannerConfig_DecoderParameters).


## Opening the Sample Project
Be sure to read the [Using Component Samples Guide](../guide/sample/about) for instructions for accessing the sample project.


###Visual Studio

Visual Studio will detect your device connected via USB, it will display the name of that device next to the "Play" button.

![img](images/samples/vsPlayButton.png)

Press the "Play" button next to the devices name.  The IDE will build, deploy and start the sample app on your device.

###Xamarin Studio
In Xamarin Studio, you may need to select your attached device from the devices dropdown under `Physical Devices`.

![img](images/samples/xs-select-device.png)

Now press the "Play" button. The IDE will build, deploy and start the sample app on your device.

![img](images/samples/xsPlayButton.png)

## Using the Sample
1. When the application starts it should look like the following.
  
	![img](images/samples/barcode_1.png)
  
2. Set scanner to "Serial SSI Scanner", which is the default one". 

	![img](images/samples/barcode_2.png)

3. Set Trigger Type to "HARD".

	![img](images/samples/barcode_3.png)

	> Note: Trigger Type "HARD" lets you scan the barcode using device's hard scan key whereas "SOFT" allows you to scan without using device's hard scan key.

4. Keep all checkboxes checked for decoder params and this is how it should look after setting all fields.
    
	![img](images/samples/barcode_4.png)  	

5. Click "Start" button and the status will be updated.

	![img](images/samples/barcode_5.png) 
 
6. Since we selected Trigger Type as "HARD", press the hard scan key of Symbol device and scan a particular barcode. It will get the scanned barcode data in "Data" field of UI.
   
	![img](images/samples/barcode_6.png) 