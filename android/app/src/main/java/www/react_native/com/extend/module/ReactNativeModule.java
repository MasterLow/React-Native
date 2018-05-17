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


        //给上下文对象赋值，react-native监听原生事件用，由于版本问题，该函数中的参数reactContext有可能为null，此时会报NullPointException的错误。所以我们需要手动给reactContext赋值（未理解）
        sendEvent.myContext=reactContext;
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

    @ReactMethod
    public void SendEventCallback(String data1,String data2,Promise promise) {
        try {
            //调用Test类中的原生方法。
            new sendEvent().fun(data1,data2);
            promise.resolve("Result"); //value 只适合传数组
        } catch (Exception e) {
            e.printStackTrace();
            promise.reject("0", "不等");
        }
    }
}
