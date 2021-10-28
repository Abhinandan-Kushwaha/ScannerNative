package com.nativescreens;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class OpenActivityModule extends ReactContextBaseJavaModule {
    public OpenActivityModule(ReactApplicationContext reactContext){
        super(reactContext);
    }

    public static String scanResult = "null";
    @NonNull
    @Override
    public String getName() {
        return "OpenActivity";
    }

    @ReactMethod
    public void open(){
        Intent intent = new Intent(getCurrentActivity(),CodeScanner.class);
        getCurrentActivity().startActivity(intent);
    }

    @ReactMethod
    public void getScanResult(Promise promise){
        promise.resolve(scanResult);
    }
}
