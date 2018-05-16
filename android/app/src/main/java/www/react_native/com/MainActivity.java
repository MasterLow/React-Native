package www.react_native.com;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Toast;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity2 {
    private View mRootView;
    BroadcastReceiver broadcastReceiver; //第一页面加载完成通知进入，解决闪屏

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
//        new Handler().postDelayed(new Runnable() {
//            @Override
//            public void run() {
//                mRootView.setVisibility(View.INVISIBLE);
//                setContentView(mRootView);
//            }
//        },3000);
        registerReceiver(broadcastReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                mRootView.setVisibility(View.VISIBLE);
                setContentView(mRootView);
               // Toast.makeText(MainActivity.this, "显示页面了", Toast.LENGTH_SHORT).show();
            }
        }, new IntentFilter("com.MainActivity.show"));
    }

    @Override
    protected String getMainComponentName() {
        return "My_React_Native";
    }
    @Override
    protected void onPause() {
        super.onPause();

    }

    @Override
    protected void onResume() {
        super.onResume();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        unregisterReceiver(broadcastReceiver);
    }
}
