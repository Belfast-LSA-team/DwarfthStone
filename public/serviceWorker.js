/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./serviceWorker.js",['./workbox-cbb0196f'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/0cad49203d23028cdc51ee2763e91ec8.eot",
    "revision": null
  }, {
    "url": "/14d81a205d0bf9eb95c55ef7b0e9b9ef.woff2",
    "revision": null
  }, {
    "url": "/1f5c3c0d0b06612749ab3aa2e8fc3c5c.woff",
    "revision": null
  }, {
    "url": "/22d22edc51b42df22dbc86e486778bde.eot",
    "revision": null
  }, {
    "url": "/257ff2ade74c135ac41efff0e99519f5.ttf",
    "revision": null
  }, {
    "url": "/3f62ad9b414b465fdde90aa111c13fca.eot",
    "revision": null
  }, {
    "url": "/40f11029aa616e8bbbe534a081a5aa63.woff",
    "revision": null
  }, {
    "url": "/4ff99841b08686bda3f7921d91044afb.ttf",
    "revision": null
  }, {
    "url": "/5c0cf2f17c2c739ba7bdb3a0f44542b1.eot",
    "revision": null
  }, {
    "url": "/5cb6e6f8616a8348189428c5a8e56ceb.woff2",
    "revision": null
  }, {
    "url": "/66d2367570bd7a14558b6552cc4b2348.woff",
    "revision": null
  }, {
    "url": "/76f41669c841bc25d1b71f4e34e831fe.woff",
    "revision": null
  }, {
    "url": "/833d605d1c26b0712ab05b8a73098ede.ttf",
    "revision": null
  }, {
    "url": "/a3b327eaeb0a8f1a50cfc1dad8f93f46.woff2",
    "revision": null
  }, {
    "url": "/assets/GameMedia.png",
    "revision": "116b2663063ab93705793a7e12900e02"
  }, {
    "url": "/assets/card-health-0.png",
    "revision": "407869782501c08e3bd93350d0bc082a"
  }, {
    "url": "/assets/card-health-1.png",
    "revision": "e888f2f0a5662bcf5fe2d3a036d122cd"
  }, {
    "url": "/assets/card-health-10.png",
    "revision": "12e0f73b1c77de75f906e4e3c2acd137"
  }, {
    "url": "/assets/card-health-11.png",
    "revision": "76f77569985a463a3c0d6547bf74fa4e"
  }, {
    "url": "/assets/card-health-12.png",
    "revision": "f82e8e2cbfb43ff532eba132b56c491e"
  }, {
    "url": "/assets/card-health-13.png",
    "revision": "606075e9a169f34000751b37f7aff752"
  }, {
    "url": "/assets/card-health-14.png",
    "revision": "fe6ebaefdf05854fb52534092e85ab94"
  }, {
    "url": "/assets/card-health-15.png",
    "revision": "bd5e3675ab29ff34445f2b3c0d8b60f2"
  }, {
    "url": "/assets/card-health-16.png",
    "revision": "652c77a11cd46d857f9c02158ed7b6ad"
  }, {
    "url": "/assets/card-health-17.png",
    "revision": "6b5e24e422c2c02ed64b19df557bc4a2"
  }, {
    "url": "/assets/card-health-18.png",
    "revision": "10eb8f36f6b36fd2e6e82e466f6fe911"
  }, {
    "url": "/assets/card-health-19.png",
    "revision": "64f6dcca48ddd6c8350d7ee05ccbd74e"
  }, {
    "url": "/assets/card-health-2.png",
    "revision": "17fc6603f19fd4c5989b89008ead8577"
  }, {
    "url": "/assets/card-health-20.png",
    "revision": "c2f4a54c51664a4ec58ebe6621662e5b"
  }, {
    "url": "/assets/card-health-21.png",
    "revision": "3a24e527e9714ed889229fc39b0db1dd"
  }, {
    "url": "/assets/card-health-22.png",
    "revision": "c8ce967e458c8c4098f1abd9c21d7097"
  }, {
    "url": "/assets/card-health-23.png",
    "revision": "d7d2e005bf17a4513032e4dd663e0fb8"
  }, {
    "url": "/assets/card-health-24.png",
    "revision": "79d6f38206b433752cf3af3dbb091f67"
  }, {
    "url": "/assets/card-health-25.png",
    "revision": "4a6634edb02570fd881bbfac4b53e6d9"
  }, {
    "url": "/assets/card-health-26.png",
    "revision": "e6a9e61f8f2b1c63f0e430dcbfa200e3"
  }, {
    "url": "/assets/card-health-27.png",
    "revision": "fb62acdad08363d825be02b61c388b0c"
  }, {
    "url": "/assets/card-health-28.png",
    "revision": "616abe31c0924973e007af48d3f1c983"
  }, {
    "url": "/assets/card-health-29.png",
    "revision": "aee7019bf5e590d82f89dbe72fb0c602"
  }, {
    "url": "/assets/card-health-3.png",
    "revision": "8ef1eee1a106514482820568d57b1079"
  }, {
    "url": "/assets/card-health-4.png",
    "revision": "45a6367bc6ed36cad07f993c4f0bc7e0"
  }, {
    "url": "/assets/card-health-5.png",
    "revision": "b5de9f24f6b1fdbe167f9f0d5fe23166"
  }, {
    "url": "/assets/card-health-6.png",
    "revision": "57a5c3f14f4ecc7efa0709f2c2cdc1a2"
  }, {
    "url": "/assets/card-health-7.png",
    "revision": "46bbf746472060099275d1cfb7fd4ae5"
  }, {
    "url": "/assets/card-health-8.png",
    "revision": "dc9ef1118cf44097437fc883dfdae9d1"
  }, {
    "url": "/assets/card-health-9.png",
    "revision": "477e19e02df740b89da44491d90b975a"
  }, {
    "url": "/assets/card-health.png",
    "revision": "718b2afc560bd3be4fabe06402dba3fb"
  }, {
    "url": "/assets/card-mana-1.png",
    "revision": "68fc120fda6d05041bd96446dfe7af7e"
  }, {
    "url": "/assets/card-mana-10.png",
    "revision": "da0df5e407f0a5ce15edd114ead61ddc"
  }, {
    "url": "/assets/card-mana-2.png",
    "revision": "5274723e7390af4365835c1150aed0a5"
  }, {
    "url": "/assets/card-mana-3.png",
    "revision": "6da777eb1dae39bc20b5157949b47dbc"
  }, {
    "url": "/assets/card-mana-4.png",
    "revision": "cd36a704c3606eb422765973e15f22a4"
  }, {
    "url": "/assets/card-mana-5.png",
    "revision": "b0d6d2031803abda3d904078c820b464"
  }, {
    "url": "/assets/card-mana-6.png",
    "revision": "6c7275718973708c60e10c74082eef6b"
  }, {
    "url": "/assets/card-mana-7.png",
    "revision": "6e5410e96837850ceeaaa2ceae2807bc"
  }, {
    "url": "/assets/card-mana-8.png",
    "revision": "c9be7c3341a7b729ff48bf52ec9fb193"
  }, {
    "url": "/assets/card-mana-9.png",
    "revision": "ab1a4d286a1fada330f755d7c6fd4ecd"
  }, {
    "url": "/assets/card-strength-1.png",
    "revision": "8743f0c9137bfdfea3984ca99a251c2c"
  }, {
    "url": "/assets/card-strength-10.png",
    "revision": "0909595c6322563bf3fac3b4eae2d841"
  }, {
    "url": "/assets/card-strength-11.png",
    "revision": "e0cef7313323b01504b534496da26953"
  }, {
    "url": "/assets/card-strength-12.png",
    "revision": "9d9bcc43660e0daae94b2aa63d2c021d"
  }, {
    "url": "/assets/card-strength-13.png",
    "revision": "cafab4c0b44b05a26d8c26cffcafe364"
  }, {
    "url": "/assets/card-strength-14.png",
    "revision": "1d8922ae3c9ca7ba0a7d211afdf9a68e"
  }, {
    "url": "/assets/card-strength-15.png",
    "revision": "02e08dfbece07de93f371e3ebf71773e"
  }, {
    "url": "/assets/card-strength-16.png",
    "revision": "aec86351426f0027a8b48de519b1c1bf"
  }, {
    "url": "/assets/card-strength-17.png",
    "revision": "19c8317e1590c2c40fdb5e7300e993df"
  }, {
    "url": "/assets/card-strength-18.png",
    "revision": "4e5315dd983a86974ec1c66dd29e0f87"
  }, {
    "url": "/assets/card-strength-19.png",
    "revision": "3a8ec898e27c0640f3fbc19cc58ca207"
  }, {
    "url": "/assets/card-strength-2.png",
    "revision": "c361d571910dd20c09ccc6ce7da0c529"
  }, {
    "url": "/assets/card-strength-20.png",
    "revision": "ad66e5a0c7b7c4a78bda61683b1cb0c1"
  }, {
    "url": "/assets/card-strength-21.png",
    "revision": "325164673fa05a749bb8f2792b8adb4e"
  }, {
    "url": "/assets/card-strength-22.png",
    "revision": "151b798f4c6ecbe76f2384b7c70ff692"
  }, {
    "url": "/assets/card-strength-23.png",
    "revision": "c462e501c8c1220bcaf99b90e725efae"
  }, {
    "url": "/assets/card-strength-24.png",
    "revision": "311bcb1f55168b14fc68c5b82398dd23"
  }, {
    "url": "/assets/card-strength-25.png",
    "revision": "d4f16fb39e216beced07b8d17ed62737"
  }, {
    "url": "/assets/card-strength-26.png",
    "revision": "4f8e95dd44bdaf370c12be5cc1f61dbb"
  }, {
    "url": "/assets/card-strength-27.png",
    "revision": "d94547a355278d65dc8e4f6ec592bc37"
  }, {
    "url": "/assets/card-strength-28.png",
    "revision": "c3d76a0190ebb20f36e574499b5aa1ba"
  }, {
    "url": "/assets/card-strength-29.png",
    "revision": "0dad4f52ce1158f2ea84feb4201310a5"
  }, {
    "url": "/assets/card-strength-3.png",
    "revision": "f373de9aea46e95b26896a6dcfc2163d"
  }, {
    "url": "/assets/card-strength-4.png",
    "revision": "b9eda9ff1321bd73def1f14ed756d00f"
  }, {
    "url": "/assets/card-strength-5.png",
    "revision": "ff69791d4f8049c4fd9666554f029d02"
  }, {
    "url": "/assets/card-strength-6.png",
    "revision": "422f2e4de9384fc1cfac72a0e2713a5b"
  }, {
    "url": "/assets/card-strength-7.png",
    "revision": "c6716fb62fde68e86739a369c7d35fbe"
  }, {
    "url": "/assets/card-strength-8.png",
    "revision": "2fea3ab9807c34a1ce273e0bebf9f336"
  }, {
    "url": "/assets/card-strength-9.png",
    "revision": "485c834af78f5e644a48bd96ff467b62"
  }, {
    "url": "/assets/card-strength.png",
    "revision": "0dd9bbdbaeb5271b1afd2f97fa179177"
  }, {
    "url": "/assets/card_1.png",
    "revision": "820867ba31f434e9e99015faed55760a"
  }, {
    "url": "/assets/card_10.png",
    "revision": "9f2d85c0530b9c20b5ace5517dcb69d1"
  }, {
    "url": "/assets/card_10_dead.png",
    "revision": "8935ecabcb06eb5a0e8a54a173238784"
  }, {
    "url": "/assets/card_10_fight.png",
    "revision": "a8df9bdfa5a0e26f1f57538f71942b9e"
  }, {
    "url": "/assets/card_1_dead.png",
    "revision": "43fb1ca795c7b02705f2cfba152cbe15"
  }, {
    "url": "/assets/card_1_fight.png",
    "revision": "6383b1f2e5a7af2d01fd08503b5e8ea9"
  }, {
    "url": "/assets/card_2.png",
    "revision": "444f847d86682248d6bb9585a41e94e0"
  }, {
    "url": "/assets/card_2_dead.png",
    "revision": "94eb931e10af3f27dc3968e5695095df"
  }, {
    "url": "/assets/card_2_fight.png",
    "revision": "d7102532b009fad07c5388e212d43e6a"
  }, {
    "url": "/assets/card_3.png",
    "revision": "1300acee285841278ff08db976f2e4d3"
  }, {
    "url": "/assets/card_3_dead.png",
    "revision": "e5530075fbfbf613159631dede74b354"
  }, {
    "url": "/assets/card_3_fight.png",
    "revision": "d012a10fc1e349339725febddb95ac5e"
  }, {
    "url": "/assets/card_4.png",
    "revision": "4c8fcec3fb0b40f16016a80103a881ba"
  }, {
    "url": "/assets/card_4_dead.png",
    "revision": "37d3864408c5cb53a8627be039429dc1"
  }, {
    "url": "/assets/card_4_fight.png",
    "revision": "841e3e852984e09b72365a83fdad8b59"
  }, {
    "url": "/assets/card_5.png",
    "revision": "9cc6cf9ff170d0b2adf8de1ac2488858"
  }, {
    "url": "/assets/card_5_dead.png",
    "revision": "384b52b7bcad31047656a2c150ef6771"
  }, {
    "url": "/assets/card_5_fight.png",
    "revision": "0e8cde8aa9626b26724aee73a189e73c"
  }, {
    "url": "/assets/card_6.png",
    "revision": "4079d12bdd3c34b3e02c99439e871a30"
  }, {
    "url": "/assets/card_6_dead.png",
    "revision": "a78f1fcc699467a86ea48fab72f996dd"
  }, {
    "url": "/assets/card_6_fight.png",
    "revision": "22e05addf7f0275fb91cdb314f35f455"
  }, {
    "url": "/assets/card_7.png",
    "revision": "f26883d0c9993c1830ed0da0e6f4671c"
  }, {
    "url": "/assets/card_7_dead.png",
    "revision": "40c1697dd83667a2952870d6770f08c9"
  }, {
    "url": "/assets/card_7_fight.png",
    "revision": "95a7da16f9d62797feaffd52e0918e47"
  }, {
    "url": "/assets/card_8.png",
    "revision": "f367cff15d3814e5fa9251f0530bd00b"
  }, {
    "url": "/assets/card_8_dead.png",
    "revision": "5bd0e5f7f75e6997ba8f0b84de6df357"
  }, {
    "url": "/assets/card_8_fight.png",
    "revision": "2f2e080bb9e202c5c61f7f8ac8ae9d90"
  }, {
    "url": "/assets/card_9.png",
    "revision": "455858662bd7859ac25be561fd54cfe0"
  }, {
    "url": "/assets/card_9_dead.png",
    "revision": "998ca4ec1293817cb3bb3df00d3470ef"
  }, {
    "url": "/assets/card_9_fight.png",
    "revision": "69967ec01b717b98bf1ce61665a5b20d"
  }, {
    "url": "/assets/deck.jpg",
    "revision": "a635b3b0dcc43137b3df71ece93308fd"
  }, {
    "url": "/assets/default-user.png",
    "revision": "be977f7b6d4bd05417744dfa772d52bd"
  }, {
    "url": "/assets/end-turn.png",
    "revision": "3ee970e1f6642476c9f2083d557a1c03"
  }, {
    "url": "/assets/green-bg.png",
    "revision": "3182b87d84bc980f6f78ba0dd4c46a91"
  }, {
    "url": "/assets/health-0.png",
    "revision": "a20fbab21ae7cb48b1586c638d7f188a"
  }, {
    "url": "/assets/health-1.png",
    "revision": "a5c95e646e9ee759ea20b5546c71c20c"
  }, {
    "url": "/assets/health-10.png",
    "revision": "51cd0ac2b07b30f9dddc99817005b17a"
  }, {
    "url": "/assets/health-11.png",
    "revision": "a520be4f484fd5453ef7b22ccfff011f"
  }, {
    "url": "/assets/health-12.png",
    "revision": "58c8feaf34eafa612355ad6db6a88b7d"
  }, {
    "url": "/assets/health-13.png",
    "revision": "7cb4ec75b8f5ce05d66e8b2767f01344"
  }, {
    "url": "/assets/health-14.png",
    "revision": "7d842670fee0083fda029998debbdc56"
  }, {
    "url": "/assets/health-15.png",
    "revision": "98eee652a8f942ac10983a3a7bf4b8ae"
  }, {
    "url": "/assets/health-16.png",
    "revision": "3970858f66fe7ee0d53029cf6940ef5d"
  }, {
    "url": "/assets/health-17.png",
    "revision": "79ebb88dff93f93e81ef1aa4330431f9"
  }, {
    "url": "/assets/health-18.png",
    "revision": "d6da1baf9c0cd20972f17eb4a83f814e"
  }, {
    "url": "/assets/health-19.png",
    "revision": "32869311bc0f512830adf095aae66242"
  }, {
    "url": "/assets/health-2.png",
    "revision": "eb7a2763f9324ce1db6b7abf93ad7472"
  }, {
    "url": "/assets/health-20.png",
    "revision": "00cc372a93200ebdbbf4742a56ac769b"
  }, {
    "url": "/assets/health-21.png",
    "revision": "b277cc77db89e3cf1b73255500243a1f"
  }, {
    "url": "/assets/health-22.png",
    "revision": "bf59a9aff633bb09646c57b60c2d5812"
  }, {
    "url": "/assets/health-23.png",
    "revision": "591d9f8aaa500decdb246fa9b260e139"
  }, {
    "url": "/assets/health-24.png",
    "revision": "fdfb5e837d75363552f96e2c43d35698"
  }, {
    "url": "/assets/health-25.png",
    "revision": "ef60d20daee0afbe11c4bdae313b7d66"
  }, {
    "url": "/assets/health-26.png",
    "revision": "7ff8fcec89ea4d8919b7655259c77c14"
  }, {
    "url": "/assets/health-27.png",
    "revision": "f3d362fb8cb4b71a22193eb95ff88f70"
  }, {
    "url": "/assets/health-28.png",
    "revision": "314c9ba6e684914e0adb9e47820a1704"
  }, {
    "url": "/assets/health-29.png",
    "revision": "93fc4ab88d408d1d2525e5ab80bc7af7"
  }, {
    "url": "/assets/health-3.png",
    "revision": "b582ac0043aea86700dd7bb1e64ae920"
  }, {
    "url": "/assets/health-4.png",
    "revision": "88ffcf741d7ad9e39b93f27ca1fc314c"
  }, {
    "url": "/assets/health-5.png",
    "revision": "4bd04dda2b3b76ab3d5ae94bcd6439ff"
  }, {
    "url": "/assets/health-6.png",
    "revision": "757b8f92c97e0d15ffa3d99ad78bc08e"
  }, {
    "url": "/assets/health-7.png",
    "revision": "37e6d641b6aa85313f511b722da13b18"
  }, {
    "url": "/assets/health-8.png",
    "revision": "f554ae8dbe46179d26dcc7320bd9f4f4"
  }, {
    "url": "/assets/health-9.png",
    "revision": "8774613ffb93e6aea685f2eba34ad43f"
  }, {
    "url": "/assets/health.png",
    "revision": "f0de5349c0cb7d683403d8d8f4b66ff2"
  }, {
    "url": "/assets/left-decor.png",
    "revision": "a00b5462bf6c745e8b179810630c6869"
  }, {
    "url": "/assets/mana-0.png",
    "revision": "87fd6199dd16a8506ed8f43f30aedf5c"
  }, {
    "url": "/assets/mana-1.png",
    "revision": "f9dc72ae36a0e42411242899f2fa9c3b"
  }, {
    "url": "/assets/mana-10.png",
    "revision": "358dcbad28cba5a17583b0e8c9a7d26b"
  }, {
    "url": "/assets/mana-11.png",
    "revision": "24722b9355ccfc90e4161a783afb081d"
  }, {
    "url": "/assets/mana-12.png",
    "revision": "f9899ae0ba21e918279d620c9eb864aa"
  }, {
    "url": "/assets/mana-13.png",
    "revision": "01666a98635e0d99f5438bac49e3e570"
  }, {
    "url": "/assets/mana-14.png",
    "revision": "01aa546e7aa930fbdf39fc775b72d3f5"
  }, {
    "url": "/assets/mana-15.png",
    "revision": "02297586a3fc06f6bf9070f0e66e4241"
  }, {
    "url": "/assets/mana-16.png",
    "revision": "f3fb3d1c8d13e1c936093679492805bc"
  }, {
    "url": "/assets/mana-17.png",
    "revision": "9f36dead3cf95b8b286a524e58fd3c45"
  }, {
    "url": "/assets/mana-18.png",
    "revision": "7e843571b53eb9e9805b265c78eb01f3"
  }, {
    "url": "/assets/mana-19.png",
    "revision": "944a3520ae1e2b091242c6a1f5bfde82"
  }, {
    "url": "/assets/mana-2.png",
    "revision": "42b8bc40ed3ac006bacc314846bcbdce"
  }, {
    "url": "/assets/mana-20.png",
    "revision": "a0c18f82f8b91c53eb1228f02992b286"
  }, {
    "url": "/assets/mana-21.png",
    "revision": "c57f961c92caabf9803cdaec1c88c662"
  }, {
    "url": "/assets/mana-22.png",
    "revision": "dc25e4729b54abb56c0167b4d405bafa"
  }, {
    "url": "/assets/mana-23.png",
    "revision": "641373f31179f8b90422620103144c7d"
  }, {
    "url": "/assets/mana-24.png",
    "revision": "ce6e8497b09de6389ee19cba38dceac2"
  }, {
    "url": "/assets/mana-25.png",
    "revision": "866295cbaa361cb5be5949a893e85a52"
  }, {
    "url": "/assets/mana-26.png",
    "revision": "ebd2f51b9b128d1118a3ba16b13850c4"
  }, {
    "url": "/assets/mana-27.png",
    "revision": "0a416a7d8ca99e32ad02b55198c8f21f"
  }, {
    "url": "/assets/mana-28.png",
    "revision": "01a50a9bbd583f4a9870b2718e64375a"
  }, {
    "url": "/assets/mana-29.png",
    "revision": "93fc4ab88d408d1d2525e5ab80bc7af7"
  }, {
    "url": "/assets/mana-3.png",
    "revision": "b97fed6833d4077f16699482e2a21550"
  }, {
    "url": "/assets/mana-4.png",
    "revision": "cb5f259b804e2f184ba71eb47ef550ae"
  }, {
    "url": "/assets/mana-5.png",
    "revision": "ade50353b1b4acd8c43c796216eefb98"
  }, {
    "url": "/assets/mana-6.png",
    "revision": "accfd2e5b17067dd2fffa394e1de4034"
  }, {
    "url": "/assets/mana-7.png",
    "revision": "e1ee8476bdf5f4f710d6e92ff8c06fc0"
  }, {
    "url": "/assets/mana-8.png",
    "revision": "fa975d1388fd5a026b7bbe566efeb18f"
  }, {
    "url": "/assets/mana-9.png",
    "revision": "6ee44000297fd87ea6d40e4bd27c96b4"
  }, {
    "url": "/assets/mana.png",
    "revision": "a3bf60b7b8400c455c395e7f0425cc7d"
  }, {
    "url": "/assets/montserrat-v15-cyrillic-100.svg",
    "revision": "3273702bb2b4535a3782d0bfcdae2ef9"
  }, {
    "url": "/assets/montserrat-v15-cyrillic-200.svg",
    "revision": "aa7683fe0a26a04ca9979470c4cd8f5f"
  }, {
    "url": "/assets/montserrat-v15-cyrillic-600.svg",
    "revision": "a6924a5e072a58911c8588859f6825d5"
  }, {
    "url": "/assets/montserrat-v15-cyrillic-900.svg",
    "revision": "a58176a7458bdb52ef7827b782e69b88"
  }, {
    "url": "/assets/montserrat-v15-cyrillic-italic.svg",
    "revision": "9c2240af4ab4a8da5dbc1f9c4667d882"
  }, {
    "url": "/assets/montserrat-v15-cyrillic-regular.svg",
    "revision": "f3fef7e587e6c436df1d7985b2a90ada"
  }, {
    "url": "/assets/profile-pic-wrapper.png",
    "revision": "5d5953334307d5931482ff7f22e71097"
  }, {
    "url": "/assets/right-decor.png",
    "revision": "64e0d69213ab1ccecdf9654c32c7b923"
  }, {
    "url": "/assets/sword.png",
    "revision": "7d611c77418b6362d234c65b9d8130be"
  }, {
    "url": "/c1ba4359982fe0cc48ec8d1ad403fdeb.woff",
    "revision": null
  }, {
    "url": "/cb6af70a6c123ef283dbe178621fad25.ttf",
    "revision": null
  }, {
    "url": "/ce12d40345c591e9daf12f9bda365078.ttf",
    "revision": null
  }, {
    "url": "/d04e4634eb8b566e1bd0b81d92eaae70.woff2",
    "revision": null
  }, {
    "url": "/d9efdead1749a21fae169b359de60941.woff",
    "revision": null
  }, {
    "url": "/dc9c0830fb34ea831853f6b5c49dd0fa.eot",
    "revision": null
  }, {
    "url": "/eb4735b30729893f823d0cd355a377f1.woff2",
    "revision": null
  }, {
    "url": "/ecc6ec3f6771ae3135e0c4008b4e97cf.ttf",
    "revision": null
  }, {
    "url": "/f0c7195566c1471c1f1ad6a2b93fa885.eot",
    "revision": null
  }, {
    "url": "/f263cfd0a6fa311229a6321b6f901d03.woff2",
    "revision": null
  }], {});
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

});
