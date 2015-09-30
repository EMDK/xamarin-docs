#Your First EMDK For Xamarin Application

This document will contain step by step instructions for using EMDK Api's in a new Xamarin application from scratch. It will cover adding the component to the project, using profile manager, using basic APIs


##Create a new project
When creating a project for this tutorial use the project name **ProfileDataCaptureTutorial**

If you are developing your project in Visual Studio, follow this [guide](../guide/newprojectvisualstudio) to create a new project.

##Add Symbol EMDK Component
Follow this [guide](../guide/component-install) to add the needed component you your project.

##Setup AndroidManifest.xml
In order to use the Symbol EMDK for Xamarin in your project we first need to add a few items to the AndroidManifest.xml in your project.

**Perform the following steps to setup your AndroidManifest**

1. Open the AndroidManifest.xml in your project from the **Solution pane** > "Project Name" > Properties
2. Replace the `<uses-sdk />` line with  `<uses-sdk android:minSdkVersion="19" />`
3. Add a new android permission directly below the `uses-sdk` line.

        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK" />

4. Now add a `uses-library` tag inside the `application` node.

        :::xml
        <uses-library android:name="com.symbol.emdk" android:required="false" />

  >NOTE: This tag uses an optional parameter `android:requred`. When set to false, this parameter allows your
  application to load if it where to be run on a non-Zebra device( which would not have the EMDK libraries). This would allow you to create an application that can run on many devices and make use of other libraries on non-Zebra devices to perform similar tasks.


**Your completed AndroidManifest.xml should resemble the following:**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
              package="ProfileDataCaptureTutorial.ProfileDataCaptureTutorial" android:versionCode="1" android:versionName="1.0">
      <uses-sdk android:minSdkVersion="19" />
      <uses-permission android:name="com.symbol.emdk.permission.EMDK" />
      <application android:label="ProfileDataCaptureTutorial" android:icon="@drawable/Icon">
        <uses-library android:name="com.symbol.emdk" android:required="false" />
      </application>
    </manifest>

##Build the User Interface
Now lets build our User Interface by opening our main layout file and dragging a dropping some UI elements into our Form.

1. Open our main layout by selecting **Solution pane** > "Project Name" > Resources > layout > Main.axml
2. After the layout loads in the Form Builder we can begin adding and modifying UI elements.
  1. Select the **HELLO WORLD, CLICK ME!** button, and set its `id` and `text` properties to the following values in the **Properties** pane.
    - **MyButton** set **id** to `@+id/buttonSet` and set **text** to `Set`
  2. Add 6 new checkboxes from the **Toolbox** pane above the **buttonSet** button.
  3. Select each check box widget and set its `id` and `text` properties to one of the following values in the **Properties** pane.
    - **checkbox1** set **id** to `@+id/checkBoxCode128` and set **text** to `Code128`
    - **checkbox2** set **id** to `@+id/checkBoxCode39` and set **text** to `Code39`
    - **checkbox3** set **id** to `@+id/checkBoxEAN8` and set **text** to `EAN8`
    - **checkbox4** set **id** to `@+id/checkBoxEAN13` and set **text** to `EAN13`
    - **checkbox5** set **id** to `@+id/checkBoxUPCA` and set **text** to `UPCA`
    - **checkbox6** set **id** to `@+id/checkBoxUPCE0` and set **text** to `UPCE0`
  4. Add a new textview widget to the form directly below the **buttonSet** button.
  5. Select the new textview **textView1**, and set its `id` and `text` properties to the following values in the **Properties** pane.
    -  **textView1** set **id** to `@+id/textViewStatus` and set **text** to `Status:`
  6. Add a new EditText widget to the for directlty below *textView1** and set its properties to the following values in the **Properties** pane.
    - set **id** to `@+id/editText1`
    - set **layout_height** to `214dp`
    - set **layout_marginBottom** to `173dp`
    - set **layout_width** to `match_parent`

**Your completed Main.axml should resemble the following:**
>NOTE: To veiw layout in as xml, switch from **Design** to **Source** view by selecting `Source` in the bottom left corner of the **Form Builder**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:orientation="vertical"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent">
        <CheckBox
            android:text="Code128"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/checkBoxCode128"
            android:checked="true" />
        <CheckBox
            android:text="Code39"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/checkBoxCode39" />
        <CheckBox
            android:text="EAN8"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/checkBoxEAN8"
            android:checked="true" />
        <CheckBox
            android:text="EAN13"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/checkBoxEAN13" />
        <CheckBox
            android:text="UPCA"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/checkBoxUPCA"
            android:checked="true" />
        <CheckBox
            android:text="UPCE0"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/checkBoxUPCE0" />
        <Button
            android:text="Set"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/buttonSet" />
        <TextView
            android:text="Status:"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:id="@+id/textViewStatus" />
        <EditText
            android:inputType="textMultiLine"
            android:layout_width="match_parent"
            android:layout_height="214.4dp"
            android:id="@+id/editText1"
            android:layout_marginBottom="173.4dp" />
    </LinearLayout>

##Add Some Code
Now lets add some code to our project.

1. Start by opening up our MainActivity, select **Solution pane** > "Project Name" > MainActivity.cs
2. Add a `using` directive that references the Symbol EMDK for Xamarin
  > `using Symbol.EMDK.Xamarin;`

3. Now lets add some global variables to the MainActivity class for later use.

        :::cs
        private EMDKManager emdkManager = null;
        private ProfileManager profileManager = null;
        private String profileName = "DataCaptureProfile-1";
        private String extraDataXML = "";
        private TextView tvStatus = null;
        private CheckBox cbCode128 = null;
        private CheckBox cbCode39 = null;
        private CheckBox cbEAN8 = null;
        private CheckBox cbEAN13 = null;
        private CheckBox cbUPCA = null;
        private CheckBox cbUPCE0 = null;

4. When our OnCreate Activity lifecycle method is called, we call the Activity's SetContentVeiw() method, which will pull in the layout we created previously in Main.axml. We now need to initialize our User Interface global variables so they can be referenced anywhere in the MainActivity class. We will do that inside our OnCreate method just below where SetContentVeiw() is called.

            :::cs
            tvStatus = FindViewById<TextView>(Resource.Id.textViewStatus);
            cbCode128 = FindViewById<CheckBox>(Resource.Id.checkBoxCode128);
            cbCode39 = FindViewById<CheckBox>(Resource.Id.checkBoxCode39);
            cbEAN8 = FindViewById<CheckBox>(Resource.Id.checkBoxEAN8);
            cbEAN13 = FindViewById<CheckBox>(Resource.Id.checkBoxEAN13);
            cbUPCA = FindViewById<CheckBox>(Resource.Id.checkBoxUPCA);
            cbUPCE0 = FindViewById<CheckBox>(Resource.Id.checkBoxUPCE0);

5. While we are initializing the User Interface lets also add a callback to our "SET" button which will call a method to collect our checkbox selections and modify our scanning profile to enable or disable barcode types. For this we will add a method to our MainActivity class that can be called in our OnCreate method.

  1. Add the class method  

            :::cs
            void AddButtonListener()
            {
                Button btnSet = FindViewById<Button>(Resource.Id.buttonSet);

                btnSet.Click += delegate { ModifyProfileXML();};
            }

  2. Call the method inside OnCreate

            :::cs
            AddButtonListener();


6. Also in our OnCreate method, we will call the EMDKManager.GetEMDKManger() method to start the EMDKManger initialization process. Then we will check the result of the method and alert the user by updating the Status TextView.

            :::cs
            EMDKResults results = EMDKManager.GetEMDKManager(Android.App.Application.Context, this);
            if (results.StatusCode != EMDKResults.STATUS_CODE.Success)
            {
                tvStatus.Text = "Status: EMDKManager object creation failed ...";
            }
            else
            {
                tvStatus.Text = "Status: EMDKManager object creation succeeded ...";
            }


7. Next we will to add and interface to our Activity that notifies the client ( MainActivity ) that the EMDKManager object is ready to use `OnOpened` or is no longer available for use `OnClosed`.
  1. Add the the interface to our MainActivity

            :::cs
            public class MainActivity : Activity, EMDKManager.IEMDKListener

  2. Add the IEMDKListener methods **OnOpened** and **OnClosed** to the MainActivity class

            :::cs
            void EMDKManager.IEMDKListener.OnOpened(EMDKManager emdkManager)
            {

            }

            void EMDKManager.IEMDKListener.OnClosed()
            {

            }

  3. When the OnOpened method is called, an instance of the EMDKManger is passed as its only argument. We will
  use this instance of the EMDKManger to initialize our global EMDKManager object. We will also alert the user that EMDKManager was successfully Opened and is ready for use. This is also a good time to initialize the ProfileManager global variable, and alert the user if there are any issues while doing so.

            :::cs
            void EMDKManager.IEMDKListener.OnOpened(EMDKManager emdkManager)
            {
                tvStatus.Text = "Status: EMDK Opened successfully ...";

                this.emdkManager = emdkManager;

                try
                {
                    profileManager = (ProfileManager)emdkManager.GetInstance(EMDKManager.FEATURE_TYPE.Profile);
                }
                catch (Exception e)
                {
                    tvStatus.Text = "Status: Exception <" + e.Message + ">";
                }
            }
  4. We also need to make sure we clean up the EMDKManger references when they can no longer be used. We will do this in the OnClosed method.

            :::cs
            void EMDKManager.IEMDKListener.OnClosed()
            {
                tvStatus.Text = "Status: EMDK Open failed unexpectedly. Please close and restart the application ...";

                if (emdkManager != null)
                {
                    emdkManager.Release();
                    emdkManager = null;
                }
            }

8. Later we will create a Profile via the ProfileManager Wizard. We need a way to pass that Profile to the ProfileManager to be processing, for this we will add a method to our MainActivity class.
  1. Create the InitProfile method

            :::cs
            void InitProfile()
            {

                if(profileManager != null)
                {
                    EMDKResults results = profileManager.ProcessProfile(profileName, ProfileManager.PROFILE_FLAG.Set, new String[] {""});
                    if(results.StatusCode != EMDKResults.STATUS_CODE.Success)
                    {
                        tvStatus.Text = "Status: Profile initialization failed ...";
                    }
                    else
                    {
                        tvStatus.Text = "Status: Profile initialization success ...";
                    }
                }
                else
                {
                     tvStatus.Text = "Status: profileManager is null ...";
                }
            }

  2. Call the InitProfile method when right after the Profile manager is initialized in OnOpened

            :::cs
            void EMDKManager.IEMDKListener.OnOpened(EMDKManager emdkManager)
            {
                tvStatus.Text = "Status: EMDK Opened successfully ...";

                this.emdkManager = emdkManager;

                try
                {
                    profileManager = (ProfileManager)emdkManager.GetInstance(EMDKManager.FEATURE_TYPE.Profile);
                    InitProfile();
                }
                catch (Exception e)
                {
                    tvStatus.Text = "Status: Exception <" + e.Message + ">";
                }
            }

9. The ProfileManager.ProcessProfile() method allows one to pass an xml structure that will serve as an update to a static xml profile. ProcessProfile() will take the update xml and apply it to the static Profile before summiting it to be processed.
So now we need a method that will check the status of our checkboxes and create an xml string that will update our extraDataXML global variable. We will add a method to the MainActivity class.

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

10. Now we need to add is a method to submit the extraDataXML Profile update. This method will be called by our "SET" button. Lets add a new method to the MainActivity class.

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

##Build a Profile
