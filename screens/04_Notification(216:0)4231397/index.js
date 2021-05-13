import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_685_392}>
        <View style={styles.View_685_208}>
          <View style={styles.View_685_209} />
          <View style={styles.View_685_210}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57c1/2a9b/50cd3f18e1fe2fbb005628fb8e142f1d"
              }}
              style={styles.ImageBackground_I685_210_681_286}
            />
          </View>
          <View style={styles.View_685_211}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6727/2885/828ac497a9d2fb8288e6f090e66b001f"
              }}
              style={styles.ImageBackground_I685_211_681_273}
            />
          </View>
          <View style={styles.View_685_212}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/097e/9b9d/3066563fec23ed185e6ac271f6daa8cc"
              }}
              style={styles.ImageBackground_I685_212_683_22}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/15c9/fc4254b41fdcba01178ff9767d25c125"
            }}
            style={styles.ImageBackground_685_213}
          />
        </View>
        <View style={styles.View_685_214}>
          <View style={styles.View_I685_214_681_24}>
            <View style={styles.View_I685_214_681_25} />
          </View>
          <View style={styles.View_I685_214_681_26}>
            <View style={styles.View_I685_214_681_27}>
              <View style={styles.View_I685_214_681_28} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
                }}
                style={styles.ImageBackground_I685_214_681_29}
              />
              <View style={styles.View_I685_214_681_30} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
              }}
              style={styles.ImageBackground_I685_214_681_31}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I685_214_681_35}
            />
          </View>
          <View style={styles.View_I685_214_681_40}>
            <View style={styles.View_I685_214_681_41}>
              <Text style={styles.Text_I685_214_681_41}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_685_215}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c8/778b/a21fdf570d6f1374250f9993957a607a"
            }}
            style={styles.ImageBackground_685_216}
          />
          <View style={styles.View_685_217} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa16/3e48/5ec1a4152b101226f67a05b83342e130"
            }}
            style={styles.ImageBackground_685_218}
          />
          <View style={styles.View_685_223}>
            <Text style={styles.Text_685_223}>Up to 70% Off</Text>
          </View>
          <View style={styles.View_685_224}>
            <View style={styles.View_685_225} />
            <View style={styles.View_685_226}>
              <Text style={styles.Text_685_226}>Explore Now</Text>
            </View>
            <View style={styles.View_685_227}>
              <Text style={styles.Text_685_227}>plus</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_685_228}>
          <View style={styles.View_685_229} />
          <View style={styles.View_685_230}>
            <View style={styles.View_685_231}>
              <View style={styles.View_685_232} />
              <View style={styles.View_685_233}>
                <View style={styles.View_685_234}>
                  <View style={styles.View_685_235} />
                  <View style={styles.View_685_236}>
                    <Text style={styles.Text_685_236}>Shop NOW</Text>
                  </View>
                  <View style={styles.View_685_237}>
                    <View style={styles.View_685_238} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3884/4a88/a9e9e346af297ba0a5d066ca6e99b291"
                      }}
                      style={styles.ImageBackground_685_239}
                    />
                  </View>
                </View>
                <View style={styles.View_685_240}>
                  <Text style={styles.Text_685_240}>Take a Look</Text>
                </View>
                <View style={styles.View_685_241}>
                  <Text style={styles.Text_685_241}>TO OUR Amazing BAGS</Text>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebd3/1822/31caf9ce2119e7f4506771fc9a3dc31b"
              }}
              style={styles.ImageBackground_685_242}
            />
          </View>
          <View style={styles.View_685_243}>
            <View style={styles.View_685_244}>
              <View style={styles.View_685_245} />
              <View style={styles.View_685_246}>
                <Text style={styles.Text_685_246}>Shop NOW</Text>
              </View>
              <View style={styles.View_685_247} />
              <View style={styles.View_685_248}>
                <Text style={styles.Text_685_248}>plus</Text>
              </View>
              <View style={styles.View_685_249}>
                <Text style={styles.Text_685_249}>Take A LOOK</Text>
              </View>
              <View style={styles.View_685_250}>
                <Text style={styles.Text_685_250}>TO OUR Amazing BAGS</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/675d/7210/cced2abcf835606cdb0b9af5dab1fba5"
              }}
              style={styles.ImageBackground_685_251}
            />
          </View>
        </View>
        <View style={styles.View_685_252}>
          <View style={styles.View_685_253} />
          <View style={styles.View_685_254}>
            <View style={styles.View_685_255}>
              <Text style={styles.Text_685_255}>Daily Deals</Text>
            </View>
            <View style={styles.View_685_256}>
              <View style={styles.View_685_257} />
              <View style={styles.View_685_258}>
                <View style={styles.View_685_259}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18d9/aca1/d4fb1c247b71c3835e28169358e77c5b"
                    }}
                    style={styles.ImageBackground_685_260}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0903/24c7/00fabf3bc0d5b6072f23298f9fe626ad"
                    }}
                    style={styles.ImageBackground_685_261}
                  />
                  <View style={styles.View_685_262}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876a/44d8/34b98dbca03156847394bf0f0012be08"
                      }}
                      style={styles.ImageBackground_685_263}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ec7/1b29/844348b4f0f3db6c15c0f89b14a06aa5"
                      }}
                      style={styles.ImageBackground_685_264}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2353/80b3/77140ecdb413272d64b6e6beb5a8476e"
                      }}
                      style={styles.ImageBackground_685_265}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af2f/02e3/572fa8f0208dc80ca3b38e37a2956a23"
                      }}
                      style={styles.ImageBackground_685_267}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8911/92d0/a1680273f8598b6bf0290aa5e6089952"
                      }}
                      style={styles.ImageBackground_685_269}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/a9a6/927d93f912da27c565ac2a757259ca93"
                      }}
                      style={styles.ImageBackground_685_270}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_685_271}>
            <View style={styles.View_685_272}>
              <Text style={styles.Text_685_272}>Daily Hot Deals</Text>
            </View>
            <View style={styles.View_685_273}>
              <View style={styles.View_685_274} />
              <View style={styles.View_685_275}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29f6/03fb/804a6a36379011a1be19b1e588f23365"
                  }}
                  style={styles.ImageBackground_685_276}
                />
                <View style={styles.View_685_284}>
                  <View style={styles.View_685_285}>
                    <View style={styles.View_685_286}>
                      <View style={styles.View_685_287}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fc3/0932/5a347872b3c7d94c29f3e20e7fa531a8"
                          }}
                          style={styles.ImageBackground_685_288}
                        />
                      </View>
                    </View>
                    <View style={styles.View_685_290}>
                      <View style={styles.View_685_291}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1657/b6a6/0dd81e657fdb4df821284ae2a6694c4f"
                          }}
                          style={styles.ImageBackground_685_292}
                        />
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e51/8127/0e7902946ae599f49e07da65f22724a1"
                      }}
                      style={styles.ImageBackground_685_294}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ccf/eef2/109e665935cd088f8123025ba288c7ec"
                      }}
                      style={styles.ImageBackground_685_296}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6493/e966/7fefb16c3196c3887567eec625bf644f"
                      }}
                      style={styles.ImageBackground_685_298}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b439/8e21/6dfc5574b3c38d6fdd6d065fd3a03200"
                      }}
                      style={styles.ImageBackground_685_300}
                    />
                  </View>
                  <View style={styles.View_685_303}>
                    <View style={styles.View_685_304}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac7/062a/371ef8ce4ef904caa2c7962b738e55d1"
                        }}
                        style={styles.ImageBackground_685_305}
                      />
                    </View>
                  </View>
                  <View style={styles.View_685_307}>
                    <View style={styles.View_685_308}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d20a/bf01/088d006827f216b9b5f20318fd09c668"
                        }}
                        style={styles.ImageBackground_685_309}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_685_311}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81cc/0778/022a079b2a41a0e880dc6d4f8abe7dd5"
                    }}
                    style={styles.ImageBackground_685_312}
                  />
                  <View style={styles.View_685_313}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcc9/aacf/e02b2a46e20eaa3a4a432fa8f4b5a430"
                      }}
                      style={styles.ImageBackground_685_314}
                    />
                  </View>
                  <View style={styles.View_685_318}>
                    <View style={styles.View_685_319}>
                      <View style={styles.View_685_320}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b79/265a/efdb2b380b36ddcb4d158619e9cdd64a"
                          }}
                          style={styles.ImageBackground_685_321}
                        />
                      </View>
                      <View style={styles.View_685_323}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b79/265a/efdb2b380b36ddcb4d158619e9cdd64a"
                          }}
                          style={styles.ImageBackground_685_324}
                        />
                      </View>
                    </View>
                    <View style={styles.View_685_326}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e75/827a/5243fe2af7f78257d9ced1333bf85749"
                        }}
                        style={styles.ImageBackground_685_327}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f11/e0c7/3cf00aca3307077506e3cb57883c1ef8"
                        }}
                        style={styles.ImageBackground_685_329}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_685_330}>
          <View style={styles.View_I685_330_682_83}>
            <View style={styles.View_I685_330_682_84}>
              <View style={styles.View_I685_330_682_85} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/344d/6779/48b73303811be15a8924edd018ea6156"
              }}
              style={styles.ImageBackground_I685_330_682_86}
            />
          </View>
          <View style={styles.View_I685_330_682_223}>
            <View style={styles.View_I685_330_682_223_681_166} />
          </View>
          <View style={styles.View_I685_330_682_87}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ee/22ee/13807c8c84a7fbbcc02a451925a6a598"
              }}
              style={styles.ImageBackground_I685_330_682_87_681_290}
            />
          </View>
          <View style={styles.View_I685_330_682_88}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9edd/0a4f/d05dd7818c3a434d192d7d1398a20bc6"
              }}
              style={styles.ImageBackground_I685_330_682_88_681_277}
            />
          </View>
          <View style={styles.View_I685_330_682_89}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2126/c645/8108b190e87b203b796ce19e9b0825f5"
              }}
              style={styles.ImageBackground_I685_330_682_89_681_294}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2912/cbdf/d95026ae564db56c199ab74858d2109f"
            }}
            style={styles.ImageBackground_I685_330_682_90}
          />
          <View style={styles.View_I685_330_682_91}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cf4/d18e/2ad32f6414a3cad849705cef2c348534"
              }}
              style={styles.ImageBackground_I685_330_682_91_681_283}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b2/cf20/174c7df860c26ea7becfe8e7f5e8ef52"
            }}
            style={styles.ImageBackground_I685_330_682_92}
          />
          <View style={styles.View_I685_330_682_93}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d9/40fd/dbe1f0c1ce38584baf03fc34d6b4b7f9"
              }}
              style={styles.ImageBackground_I685_330_682_93_681_300}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896c/2e88/894217d1c0c64d5455943ace2051265f"
        }}
        style={styles.ImageBackground_216_4}
      />
      <View style={styles.View_216_5}>
        <View style={styles.View_216_6} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f97/4eb4/5f79d7933bcbe85e4f7001a277e34f51"
          }}
          style={styles.ImageBackground_216_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be2f/9c57/896a011d05d5480d762df2ad19b7a9d8"
          }}
          style={styles.ImageBackground_216_8}
        />
        <View style={styles.View_216_9}>
          <Text style={styles.Text_216_9}>Notify me</Text>
        </View>
        <View style={styles.View_216_10}>
          <Text style={styles.Text_216_10}>Not interested</Text>
        </View>
        <View style={styles.View_216_11}>
          <Text style={styles.Text_216_11}>
            Want to be notified about special promotions and new ways to save?
          </Text>
        </View>
        <View style={styles.View_216_12}>
          <Text style={styles.Text_216_12}>
            We promise not to blow up your phone a million times a day
          </Text>
        </View>
        <View style={styles.View_216_13}>
          <View style={styles.View_216_14} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c38c/cf30/966e206d5452b176232869899002f67f"
            }}
            style={styles.ImageBackground_216_15}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_685_392: {
    width: wp("155.46666666666667%"),
    minWidth: wp("155.46666666666667%"),
    height: hp("111.47540983606557%"),
    minHeight: hp("111.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("0%")
  },
  View_685_208: {
    width: wp("100%"),
    height: hp("14.207650273224044%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  View_685_209: {
    width: wp("100%"),
    height: hp("14.207650273224044%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_685_210: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_210_681_286: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%"),
    top: hp("0.27322404371584774%")
  },
  View_685_211: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_211_681_273: {
    flexGrow: 1,
    width: wp("5.003813680013021%"),
    height: hp("2.6259521317612275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7408040364583286%"),
    top: hp("0.37948525017076484%")
  },
  View_685_212: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_212_683_22: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_685_213: {
    width: wp("22.666666666666664%"),
    height: hp("2.185792349726776%"),
    top: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%")
  },
  View_685_214: {
    width: wp("100%"),
    height: hp("5.372747306615277%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_214_681_24: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I685_214_681_25: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_214_681_26: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I685_214_681_27: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288883463541666%"),
    top: hp("0.045559575648907114%")
  },
  View_I685_214_681_28: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I685_214_681_29: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.500888511782787%")
  },
  View_I685_214_681_30: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I685_214_681_31: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("0.045159345116120075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873876953125006%")
  },
  ImageBackground_I685_214_681_35: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_214_681_40: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I685_214_681_41: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896194%")
  },
  Text_I685_214_681_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_685_215: {
    width: wp("100%"),
    height: hp("52.459016393442624%"),
    top: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  ImageBackground_685_216: {
    width: wp("100%"),
    height: hp("52.459016393442624%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_217: {
    width: wp("100%"),
    height: hp("52.459016393442624%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_218: {
    width: wp("12.533333333333333%"),
    height: hp("1.092896174863388%"),
    top: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%")
  },
  View_685_223: {
    width: wp("50.4%"),
    top: hp("32.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%")
  },
  Text_685_223: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_224: {
    width: wp("33.86666666666667%"),
    height: hp("5.327868852459016%"),
    top: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%")
  },
  View_685_225: {
    width: wp("33.86666666666667%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(184, 114, 83, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_685_226: {
    width: wp("21.6%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800000000000004%")
  },
  Text_685_226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_227: {
    width: wp("2.933333333333333%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  Text_685_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_228: {
    width: wp("155.20000000000002%"),
    height: hp("18.852459016393443%"),
    top: hp("83.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%")
  },
  View_685_229: {
    width: wp("100%"),
    height: hp("18.852459016393443%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_685_230: {
    width: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_685_231: {
    width: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_232: {
    width: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_685_233: {
    width: wp("31.733333333333334%"),
    height: hp("11.885245901639344%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.13333333333333%")
  },
  View_685_234: {
    width: wp("28.000000000000004%"),
    height: hp("3.0054644808743167%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_235: {
    width: wp("28.000000000000004%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_685_236: {
    width: wp("17.066666666666666%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  Text_685_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_685_237: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666677%")
  },
  View_685_238: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_685_239: {
    width: wp("2.190625%"),
    height: hp("1.0261910860655739%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666558%")
  },
  View_685_240: {
    width: wp("18.933333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_685_240: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_241: {
    width: wp("31.733333333333334%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_685_241: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_685_242: {
    width: wp("24.266666666666666%"),
    height: hp("12.431693989071038%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    resizeMode: "cover"
  },
  View_685_243: {
    width: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%")
  },
  View_685_244: {
    width: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_245: {
    width: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_685_246: {
    width: wp("17.066666666666666%"),
    top: hp("10.792349726775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%")
  },
  Text_685_246: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_685_247: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("10.792349726775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_685_248: {
    width: wp("2.4%"),
    top: hp("11.065573770491795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%")
  },
  Text_685_248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_249: {
    width: wp("18.933333333333334%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%")
  },
  Text_685_249: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_250: {
    width: wp("31.733333333333334%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%")
  },
  Text_685_250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_685_251: {
    width: wp("24.266666666666666%"),
    height: hp("12.431693989071038%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%")
  },
  View_685_252: {
    width: wp("100%"),
    height: hp("12.158469945355192%"),
    top: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_253: {
    width: wp("100%"),
    height: hp("12.158469945355192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_685_254: {
    width: wp("35.46666666666667%"),
    height: hp("6.693989071038252%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%")
  },
  View_685_255: {
    width: wp("19.2%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%")
  },
  Text_685_255: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_256: {
    width: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_257: {
    width: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_685_258: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_685_259: {
    width: wp("8.12652791341146%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2700846354166666%")
  },
  ImageBackground_685_260: {
    width: wp("8.126500447591146%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_261: {
    width: wp("4.063530476888021%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.062988281249999%")
  },
  View_685_262: {
    width: wp("5.000596110026042%"),
    height: hp("2.5617716742343593%"),
    top: hp("2.252230618169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.562662760416667%")
  },
  ImageBackground_685_263: {
    width: wp("5.000577799479167%"),
    height: hp("2.5617716742343593%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_264: {
    width: wp("2.5002888997395836%"),
    height: hp("2.5617716742343593%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.500325520833332%")
  },
  ImageBackground_685_265: {
    width: wp("0.6250732421875%"),
    height: hp("0.3202224689754632%"),
    top: hp("1.6011222464139365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8128417968750004%")
  },
  ImageBackground_685_267: {
    width: wp("0.6250712076822916%"),
    height: hp("0.32022168727520384%"),
    top: hp("0.6404355575478142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.562662760416666%")
  },
  ImageBackground_685_269: {
    width: wp("1.8752604166666667%"),
    height: hp("1.2808075368078682%"),
    top: hp("0.6405022626366126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5626302083333332%")
  },
  ImageBackground_685_270: {
    width: wp("0.9376271565755209%"),
    height: hp("0.9290054196217021%"),
    top: hp("0.6405022626366126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.500325520833332%")
  },
  View_685_271: {
    width: wp("42.4%"),
    height: hp("6.693989071038252%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333333%")
  },
  View_685_272: {
    width: wp("26.13333333333333%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%")
  },
  Text_685_272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_273: {
    width: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_274: {
    width: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_685_275: {
    width: wp("8.085713704427084%"),
    height: hp("4.495797912931182%"),
    top: hp("0.8885117827868818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4903645833333385%")
  },
  ImageBackground_685_276: {
    width: wp("4.461088053385417%"),
    height: hp("3.115627935023907%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_284: {
    width: wp("7.5794718424479175%"),
    height: hp("3.0854355442067964%"),
    top: hp("1.4103456924521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5062500000000014%")
  },
  View_685_285: {
    width: wp("7.5794718424479175%"),
    height: hp("3.0854355442067964%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_286: {
    width: wp("6.039383951822916%"),
    height: hp("3.0854355442067964%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00011393229166856145%")
  },
  View_685_287: {
    width: wp("6.039383951822916%"),
    height: hp("3.0854355442067964%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_288: {
    width: wp("6.039383951822916%"),
    height: hp("3.0854355442067964%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_290: {
    width: wp("6.03941650390625%"),
    height: hp("2.118320152407787%"),
    top: hp("0.9670903773907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_291: {
    width: wp("6.03941650390625%"),
    height: hp("2.118320152407787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_292: {
    width: wp("6.03941650390625%"),
    height: hp("2.118320152407787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_294: {
    width: wp("2.8725830078125%"),
    height: hp("1.478509955067452%"),
    top: hp("0.01707650273224104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7068847656249915%")
  },
  ImageBackground_685_296: {
    width: wp("2.0179484049479166%"),
    height: hp("0.7151285807291667%"),
    top: hp("0.01707650273224104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.53489583333333%")
  },
  ImageBackground_685_298: {
    width: wp("0.7498087565104167%"),
    height: hp("0.27432467768101093%"),
    top: hp("0.03081775102459261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.184000651041664%")
  },
  ImageBackground_685_300: {
    width: wp("1.79583740234375%"),
    height: hp("1.0392152546533469%"),
    top: hp("0.4563295124658495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.706933593749994%")
  },
  View_685_303: {
    width: wp("2.1003580729166664%"),
    height: hp("1.0730347346738387%"),
    top: hp("0.2137231045082011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2190755208333357%")
  },
  View_685_304: {
    width: wp("2.1003580729166664%"),
    height: hp("1.0730347346738387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_305: {
    width: wp("2.1003580729166664%"),
    height: hp("1.0730347346738387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_307: {
    width: wp("0.6939697265625%"),
    height: hp("0.3545375469603825%"),
    top: hp("0.39602811219262435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.26853841145833%")
  },
  View_685_308: {
    width: wp("0.6939697265625%"),
    height: hp("0.3545375469603825%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_309: {
    width: wp("0.6939697265625%"),
    height: hp("0.3545375469603825%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_311: {
    width: wp("3.2178548177083335%"),
    height: hp("1.643921899013832%"),
    top: hp("2.117553043886616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9381510416666643%")
  },
  ImageBackground_685_312: {
    width: wp("3.2177408854166667%"),
    height: hp("1.6439052227416324%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_313: {
    width: wp("3.217728678385417%"),
    height: hp("1.64368009306694%"),
    top: hp("0.00026682035518987846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00013020833333143855%")
  },
  ImageBackground_685_314: {
    width: wp("3.217728678385417%"),
    height: hp("1.64368009306694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_318: {
    width: wp("1.7947631835937499%"),
    height: hp("0.9169114743425546%"),
    top: hp("0.363542733948087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7114583333333329%")
  },
  View_685_319: {
    width: wp("1.7947631835937499%"),
    height: hp("0.9169114743425546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_320: {
    width: wp("0.6545369466145834%"),
    height: hp("0.3343842720073429%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_321: {
    width: wp("0.6545369466145834%"),
    height: hp("0.3343842720073429%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_323: {
    width: wp("0.6545328776041667%"),
    height: hp("0.3343926101434426%"),
    top: hp("0.5825355404713086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1402343750000057%")
  },
  ImageBackground_685_324: {
    width: wp("0.6545328776041667%"),
    height: hp("0.3343926101434426%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_326: {
    width: wp("1.5277628580729166%"),
    height: hp("0.7805245821593237%"),
    top: hp("0.05082927766393297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16744791666666003%")
  },
  ImageBackground_685_327: {
    width: wp("1.5277628580729166%"),
    height: hp("0.7805245821593237%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_685_329: {
    width: wp("0.7138997395833333%"),
    height: hp("0.3647184111381489%"),
    top: hp("0.1750341530054662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4715006510416728%")
  },
  View_685_330: {
    width: wp("100%"),
    height: hp("15.983606557377051%"),
    top: hp("95.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_330_682_83: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311478%")
  },
  View_I685_330_682_84: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_330_682_85: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 156, 173, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I685_330_682_86: {
    width: wp("30.933333333333334%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%")
  },
  View_I685_330_682_223: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207652%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_330_682_223_681_166: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I685_330_682_87: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_330_682_87_681_290: {
    flexGrow: 1,
    width: wp("4.039746348063151%"),
    height: hp("2.6260547950619557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.27322404371587083%")
  },
  View_I685_330_682_88: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_330_682_88_681_277: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.27322404371587083%")
  },
  View_I685_330_682_89: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_330_682_89_681_294: {
    flexGrow: 1,
    width: wp("4.933355204264323%"),
    height: hp("2.4725817591766193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7333007812500085%"),
    top: hp("0.4439890710382741%")
  },
  ImageBackground_I685_330_682_90: {
    flexGrow: 1,
    width: wp("2.9333335876464846%"),
    height: hp("0.7513663156436441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("4.508196721311478%")
  },
  View_I685_330_682_91: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_330_682_91_681_283: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I685_330_682_92: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("0%")
  },
  View_I685_330_682_93: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_330_682_93_681_300: {
    flexGrow: 1,
    width: wp("6.577740478515624%"),
    height: hp("3.3696521175363676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9778320312499957%"),
    top: hp("0.5010219219603869%")
  },
  ImageBackground_216_4: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_216_5: {
    width: wp("89.33333333333333%"),
    height: hp("49.86338797814208%"),
    top: hp("25.546448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  },
  View_216_6: {
    width: wp("89.33333333333333%"),
    height: hp("37.84153005464481%"),
    top: hp("12.021857923497262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  ImageBackground_216_7: {
    width: wp("5.71162187649558e-7%"),
    height: hp("6.693989071038252%"),
    top: hp("43.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333333%")
  },
  ImageBackground_216_8: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("43.30601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_216_9: {
    width: wp("18.666666666666668%"),
    top: hp("45.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6%")
  },
  Text_216_9: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_10: {
    width: wp("27.46666666666667%"),
    top: hp("45.08196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%")
  },
  Text_216_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_216_11: {
    width: wp("68.8%"),
    top: hp("21.584699453551917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999999%")
  },
  Text_216_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_12: {
    width: wp("68%"),
    top: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%")
  },
  Text_216_12: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_13: {
    width: wp("49.8767578125%"),
    height: hp("19.94535519125683%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%")
  },
  View_216_14: {
    width: wp("49.8767578125%"),
    height: hp("19.94535519125683%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(237, 237, 237, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_216_15: {
    width: wp("49.8767578125%"),
    height: hp("19.94535519125683%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
