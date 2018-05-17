package www.react_native.com.extend.module;

/**
 * Created by Administrator on 2018/5/17.
 */

    import android.provider.Settings;
    import android.support.annotation.Nullable;

    import com.facebook.react.bridge.Arguments;
    import com.facebook.react.bridge.ReactContext;
    import com.facebook.react.bridge.WritableMap;
    import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by Administrator on 2016/10/30.
 */

public class sendEvent {
    //定义上下文对象
    public static ReactContext myContext;

    //定义发送事件的函数
    public  void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params)
    {
        System.out.println("reactContext="+reactContext);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName,params);
    }

    public  void fun(String EventName,String data)
    {
        //在该方法中开启线程，然后向JavaScript端发送事件。
        //发送事件,事件名为EventName,参数data
        WritableMap params= Arguments.createMap();
                try {
                    params.putString("result", data);
                } catch (Exception e) {
                    e.printStackTrace();
                    params.putString("result", e.getMessage());
                }
        sendEvent(myContext,EventName,params);
    }
}