#Your First EMDK For Xamarin Application

This document will contain step by step instructions for using EMDK Api's in a new Xamarin application from scratch. It will cover adding the component to the project, using profile manager, using basic APIs


##Creating a new project
When creating a project for this tutorial use the project name **ProfileDataCaptureTutorial**

If you are developing your project in Visual Studio, follow this [guide](../guide/newprojectvisualstudio) to create a new project.

##Add Symbol EMDK for Xamarin Component
Follow this [guide](../guide/component-install) to add the needed component you your project.

##Setup AndroidManifest.xml
In order to use the Symbol EMDK for Android in your project we first need to add a few items to the AndroidManifest.xml in your project.

**Perform the following steps to setup your AndroidManifest**

1. Open the AndroidManifest.xml in your project from the **Solution Explorer** > "Project Name" > Properties
2. Replace the `<uses-sdk />` line with  `<uses-sdk android:minSdkVersion="19" />`
3. Add a new android permission directly below the `uses-sdk` line.
  > `<uses-permission android:name="com.symbol.emdk.permission.EMDK" />`

4. Now add a `uses-library` tag inside the `application` node.
  > `<uses-library android:name="com.symbol.emdk" android:required="false" />`

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

1. Open our main layout by selecting **Solution Explorer** > "Project Name" > Resources > layout > Main.axml
2. After the layout loads we can begin adding UI elements.
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
    - `id` to @+id/editText1
    - `layout_height` to 214dp
    - `layout_marginBottom` to 173dp
    - `layout_width` to match_parent

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
Now lets add some code to our project by opening up our MainActivity by selecting **Solution Explorer** > "Project Name" > Resources > layout > Main.axml
