package com.pratibha;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.react.SmsPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.github.wumke.RNImmediatePhoneCall.RNImmediatePhoneCallPackage;
import net.no_mad.tts.TextToSpeechPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import com.wmjmc.reactspeech.VoicePackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SmsPackage(),
            new ReactNativeContacts(),
            new RNImmediatePhoneCallPackage(),
            new TextToSpeechPackage(),
          new VoicePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
