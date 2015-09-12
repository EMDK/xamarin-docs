#Sample: Data Capture Profiles

This guide will provide details of the Data Capture sample project included with the EMDK for Xamarin component.

## Opening the Sample Project
Be sure to read the [Using Component Samples Guide](../sample/about) for instructions for accessing the sample project.



## Running the Sample
If Visual Studio detects your device connected via USB, it will display the name of that device next to the "Play"
button.

For Example (in Visual Studio ): ![img](images/samples/vsPlayButton.png)

Press the "Play" button next to the devices name.  The IDE will build, deploy and start the sample app on your device.

## Using the Sample
When the Sample Application loads it will present the following screen. The user interface provides a means to configure the barcode type that the scanner is allowed to decode. In order to make best use of this sample you will need a barcode that represents each of the listed type.

A successful scan of an enabled barcode symbology will append the barcode data to a list in the lower section of the user interface. Disabled type will not scan and will not append data to the barcode data list.



![img](images/samples/ProfileDataCaptureScreen1.png)

To test this sample, change the barcode types that are allowed by checking, or un-checking the checkboxes next to the barcode types. Then press the `Set` button.

![img](images/samples/ProfileDataCaptureScreen2.png)

The Status message should change, stating that the profile was successfully modified.

![img](images/samples/ProfileDataCaptureScreen3.png)

To test that your settings have taken effect, scan a barcode type that was disabled previously, the barcode should not scan. Now scan a barcode that was previously disabled, the user interface should update with the decoded barcode data.

##Code sample explanation
This seems like a very simple application, but looking at the source code will reveal a very important concept in developing applications that use EMDK profiles.

The EMDK Profile Manager and Wizard allow you to create profiles that are stored in an XML file (EMDKConfig.xml) in your project's Assets folder. You can programmatically submit this profile via the ProfileManager API's and the
settings configured in that profile will take effect.  The profile in this sample, `DataCaptureProfile-1` has several hardcoded barcode types that are enabled or disabled.  There are two ways to change those hardcoded values. one, at designed time, via the Profile Wizard, or programmatically by using a feature of the ProfileManager API's that allows you to replace hardcoded values in the static XML profile before submitting it.

Have a look at the following method from our samples source. It builds an xml string that contains updates to specific values in our profile depending on the state of our user interface checkboxes. A global variable `extraDataXml` is initialized with that string for later use.

    :::cs
    void CreateExtraDataFromUI()
    {
        extraDataXML = "";

        extraDataXML += "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
                        "<characteristic type=\"Profile\">" +
                        "<characteristic type=\"Barcode\" version=\"0.1\">" +
                        "<characteristic type=\"Decoders\">";

        if (cbCode128.Checked)
        {
            extraDataXML += "<parm name=\"decoder_code128\" value=\"true\"/>";
        }
        else
        {
            extraDataXML += "<parm name=\"decoder_code128\" value=\"false\"/>";
        }

        if (cbCode39.Checked)
        {
            extraDataXML += "<parm name=\"decoder_code39\" value=\"true\"/>";
        }
        else
        {
            extraDataXML += "<parm name=\"decoder_code39\" value=\"false\"/>";
        }

        if (cbEAN8.Checked)
        {
            extraDataXML += "<parm name=\"decoder_ean8\" value=\"true\"/>";
        }
        else
        {
            extraDataXML += "<parm name=\"decoder_ean8\" value=\"false\"/>";
        }

        if (cbEAN13.Checked)
        {
            extraDataXML += "<parm name=\"decoder_ean13\" value=\"true\"/>";
        }
        else
        {
            extraDataXML += "<parm name=\"decoder_ean13\" value=\"false\"/>";
        }

        if (cbUPCA.Checked)
        {
            extraDataXML += "<parm name=\"decoder_upca\" value=\"true\"/>";
        }
        else
        {
            extraDataXML += "<parm name=\"decoder_upca\" value=\"false\"/>";
        }

        if (cbUPCE0.Checked)
        {
            extraDataXML += "<parm name=\"decoder_upce0\" value=\"true\"/>";
        }
        else
        {
            extraDataXML += "<parm name=\"decoder_upce0\" value=\"false\"/>";
        }

        extraDataXML += "</characteristic>" +
                        "</characteristic>" +
                        "</characteristic>";
    }


After the `extraDataXML` global string has been initialized, we can use it when submitting the profile via the ProfilManager's  ProcessProfile() method.

    :::cs
    void ModifyProfileXML()
    {
        CreateExtraDataFromUI();

        String[] modifyData = new String[1];
        modifyData[0] = extraDataXML;

        EMDKResults results = profileManager.ProcessProfile(profileName, ProfileManager.PROFILE_FLAG.Set, modifyData);

        if (results.StatusCode != EMDKResults.STATUS_CODE.Success)
        {
            tvStatus.Text = "Profile modification failed ...";
        }
        else
        {
            tvStatus.Text = "Profile modification succeeded ...";
        }
    }
