package www.react_native.com;

import android.os.Bundle;
import android.os.Handler;
import android.view.View;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity2 {
    private View mRootView;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //初始化rnrootview
        super.onCreate(savedInstanceState);
        //获取rnrootview
        mRootView = getRootView();
        //模拟loadding图片
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                setContentView(mRootView);
            }
        },3000);
    }

    @Override
    protected String getMainComponentName() {
        return "My_React_Native";
    }
}
