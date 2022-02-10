import styled from 'styled-components'

export const SmartBannerContainer = styled.span`
  .smartbanner-show
  .smartbanner-margin-top {
    margin-top:80px;
  }
  .smartbanner-show.smartbanner-margin-bottom{
    margin-bottom:80px;
  }
  .smartbanner-show .smartbanner{
    display:block;
  }
  .smartbanner{
    left:0;display:none;width:100%;height:80px;line-height:80px;font-family:Helvetica Neue,sans-serif;background:#f4f4f4;z-index:9998;-webkit-font-smoothing:antialiased;overflow:hidden;-webkit-text-size-adjust:none;
  }
  .smartbanner-top{
    position:absolute;top:0
  }
  .smartbanner-bottom{
    position:fixed;bottom:0
    }
  .smartbanner-container{
    margin:0 auto;padding:0 5px
  }
  .smartbanner-close{
    display:inline-block;vertical-align:middle;margin:0 5px 0 0;font-family:ArialRoundedMTBold,Arial;font-size:20px;text-align:center;color:#888;text-decoration:none;border:0;border-radius:14px;padding:0 0 1px;background-color:transparent;-webkit-font-smoothing:subpixel-antialiased;
  }
  .smartbanner-close:active,
  .smartbanner-close:hover{
    color:#aaa;
  }
  .smartbanner-icon{
    width:57px;height:57px;margin-right:12px;background-size:cover;border-radius:10px;
  }
  .smartbanner-icon,
  .smartbanner-info{
    display:inline-block;vertical-align:middle;
  }
  .smartbanner-info{
    white-space:normal;width:calc(99% - 201px);font-size:11px;line-height:1.2em;font-weight:700;
  }
  .smartbanner-wrapper{
    max-width:110px;display:inline-block;text-align:right;width:100%;
  }
  .smartbanner-title{
    font-size:13px;line-height:18px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;
  }
  .smartbanner-description{
    max-height:40px;overflow:hidden;
  }
  .smartbanner-author{
    text-overflow:ellipsis;white-space:nowrap;overflow:hidden;
  }
  .smartbanner-author:empty+.smartbanner-description{
    max-height:50px;
  }
  .smartbanner-button{
    margin:auto 0;height:24px;font-size:14px;line-height:24px;text-align:center;font-weight:700;color:#6a6a6a;text-transform:uppercase;text-decoration:none;display:inline-block;text-shadow:0 1px 0 hsla(0,0%,100%,.8);
  }
  .smartbanner-button:active,
  .smartbanner-button:hover{color:#aaa}
  .smartbanner-ios{
    background:#f2f2f2;box-shadow:0 1px 1px rgba(0,0,0,.2);line-height:80px;
  }
  .smartbanner-ios .smartbanner-close{
    border:0;width:18px;height:18px;line-height:18px;font-family:Arial;color:#888;text-shadow:0 1px 0 #fff;-webkit-font-smoothing:none;
  }
  .smartbanner-ios .smartbanner-close:active,.smartbanner-ios .smartbanner-close:hover{
    color:#888;
  }
  .smartbanner-ios .smartbanner-icon{
    background-size:cover;
  }
  .smartbanner-ios .smartbanner-info{
    color:#6a6a6a;text-shadow:0 1px 0 hsla(0,0%,100%,.8);font-weight:300;
  }
  .smartbanner-ios .smartbanner-title{
    color:#4d4d4d;font-weight:500;
  }
  .smartbanner-ios .smartbanner-button{
    padding:0 10px;font-size:15px;min-width:10%;font-weight:400;color:#0c71fd;
  }
  .smartbanner-ios .smartbanner-button:active,
  .smartbanner-ios .smartbanner-button:hover{
    background:#f2f2f2;
  }
  .smartbanner-android{
    background:#3d3d3d url("data:image/gif;base64,R0lGODlhCAAIAIABAFVVVf///yH5BAEHAAEALAAAAAAIAAgAAAINRG4XudroGJBRsYcxKAA7");box-shadow:inset 0 4px 0 #88b131;line-height:82px;
  }
  .smartbanner-android .smartbanner-close{
    border:0;max-width:17px;width:100%;height:17px;line-height:17px;margin-right:7px;color:#b1b1b3;background:#1c1e21;text-shadow:0 1px 1px #000;text-decoration:none;box-shadow:inset 0 1px 2px rgba(0,0,0,.8),0 1px 1px hsla(0,0%,100%,.3);cursor:pointer;
  }
  .smartbanner-android .smartbanner-close:active,.smartbanner-android .smartbanner-close:hover{
    color:#eee;
  }
  .smartbanner-android .smartbanner-icon{
    background-color:transparent;box-shadow:none;
  }
  .smartbanner-android .smartbanner-info{
    color:#ccc;text-shadow:0 1px 2px #000;
  }
  .smartbanner-android .smartbanner-title{
    color:#fff;font-weight:700;
  }
  .smartbanner-android .smartbanner-button{
    min-width:12%;color:#d1d1d1;font-weight:700;padding:0;background:none;border-radius:0;box-shadow:0 0 0 1px #333,0 0 0 2px #dddcdc;
  }
  .smartbanner-android .smartbanner-button:active,.smartbanner-android .smartbanner-button:hover{
    background:none;
  }
  .smartbanner-android .smartbanner-button-text{
    text-align:center;display:block;padding:0 10px;background:#42b6c9;background:linear-gradient(180deg,#42b6c9,#39a9bb);text-transform:none;text-shadow:none;box-shadow:none;
  }
  .smartbanner-android .smartbanner-button-text:active,.smartbanner-android .smartbanner-button-text:hover{
    background:#2ac7e1;
  }
  .smartbanner-kindle,.smartbanner-windows{
    background:#f4f4f4;background:linear-gradient(180deg,#f4f4f4,#cdcdcd);box-shadow:0 1px 2px rgba(0,0,0,.5);line-height:80px;
  }
  .smartbanner-kindle .smartbanner-close,.smartbanner-windows .smartbanner-close{
    border:0;width:18px;height:18px;line-height:18px;color:#888;text-shadow:0 1px 0 #fff;
  }
  .smartbanner-kindle .smartbanner-close:active,.smartbanner-kindle .smartbanner-close:hover,.smartbanner-windows .smartbanner-close:active,.smartbanner-windows .smartbanner-close:hover{
    color:#aaa;
  }
  .smartbanner-kindle .smartbanner-icon,.smartbanner-windows .smartbanner-icon{
    background:rgba(0,0,0,.6);background-size:cover;box-shadow:0 1px 3px rgba(0,0,0,.3);
  }
  .smartbanner-kindle .smartbanner-info,.smartbanner-windows .smartbanner-info{
    color:#6a6a6a;text-shadow:0 1px 0 hsla(0,0%,100%,.8);
  }
  .smartbanner-kindle .smartbanner-title,.smartbanner-windows .smartbanner-title{
    color:#4d4d4d;font-weight:700;
  }
  .smartbanner-kindle .smartbanner-button,.smartbanner-windows .smartbanner-button{
    padding:0 10px;min-width:10%;color:#6a6a6a;background:#efefef;background:linear-gradient(180deg,#efefef,#dcdcdc);border-radius:3px;box-shadow:inset 0 0 0 1px #bfbfbf,0 1px 0 hsla(0,0%,100%,.6),inset 0 2px 0 hsla(0,0%,100%,.7);
  }
  .smartbanner-kindle .smartbanner-button:active,.smartbanner-kindle .smartbanner-button:hover,.smartbanner-windows .smartbanner-button:active,.smartbanner-windows .smartbanner-button:hover{
    background:#dcdcdc;background:linear-gradient(180deg,#dcdcdc,#efefef);
  }

`
