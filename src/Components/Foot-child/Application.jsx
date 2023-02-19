import React from "react";
import { Link } from "react-router-dom";
import "../Foot-child-style/Application.scss";

function sayHello() {
  alert("Are you sure you want to download this!");
}

export default function Application() {
  return (
    <div className="container-page">
      <div className="application">
        <div className="application-wrapper">
          <div className="Image-phone">
            <img className="Image-logo" src="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220615/0148405/1089262699621646344/1089262699621646344.png" alt=""/>
          </div>
          <ul className="application-list">
          <h1 className="info-heading">MovieCool Android Movies Apk</h1>
            <h3 className="app-txt">Official Movies App for Android of MovieCool</h3>
            <li className="app-li">
              Free HD Movies App for Android with Chromecast support.
            </li>
            <li className="app-li">Multiple languages of Subtitles.</li>
            <li className="app-li">Absolutely No Ads.</li>
            <li className="app-li">
              Fast streaming speed than on the website.
            </li>
            <li className="app-li">
              All streaming issues will be fixed within 24 hours.
            </li>
            <li className="app-li">Daily update on both Movies and Shows.</li>
            <div className="download">
            <Link className="a-download" to="/download">
              <button className="btn-download" onClick={sayHello}>
              <svg className="btn-download-logo" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor" d="M77.5 118.5a12 12 0 0 1 17-17L116 123V40a12 12 0 0 1 24 0v83l21.5-21.5a12 12 0 0 1 17 17l-42 42a12.1 12.1 0 0 1-17 0ZM216 140a12 12 0 0 0-12 12v52H52v-52a12 12 0 0 0-24 0v56a20.1 20.1 0 0 0 20 20h160a20.1 20.1 0 0 0 20-20v-56a12 12 0 0 0-12-12Z"/></svg>
              <h5 className="download-text">Download</h5>
              </button>
            </Link>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
