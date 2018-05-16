package www.react_native.com.extend.module;

import android.content.Intent;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;



/**
 * Created by Administrator on 2018/5/16.
 */

public class ReactNativeModule  extends ReactContextBaseJavaModule {

    private ReactApplicationContext mContext;

    public ReactNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);

        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "ReactNativeModule";
    }

    @ReactMethod
    public void MainActivityView(String data1,String data2,Callback ModuleCallback) {
        try {
            System.out.println("打印："+data1+data2);
            getCurrentActivity().sendBroadcast(new Intent("com.MainActivity.show"));
            ModuleCallback.invoke("add user success");//value 只适合传数组
        } catch (Exception e) {
            e.printStackTrace();
            ModuleCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void PromiseCallback(String data1,String data2,Promise promise) {
        try {
            System.out.println("打印："+data1+data2);
            promise.resolve("Result"); //value 只适合传数组
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject("0", "不等");
        }
    }
}
